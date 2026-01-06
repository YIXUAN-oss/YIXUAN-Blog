<template>
  <div
    class="global-music-player"
    v-if="isClient"
    :style="playerStyle"
  >
    <button
      class="global-music-btn"
      type="button"
      :aria-label="isPlaying ? '暂停背景音乐' : '播放背景音乐'"
      @click="togglePlay"
      :class="{ playing: isPlaying }"
    >
      <span class="global-music-icon">
        <span class="icon-circle">
          <span v-if="!isPlaying">🎵</span>
          <span v-else>⏸</span>
        </span>
        <span class="eq-bars" v-if="isPlaying" aria-hidden="true">
          <span></span><span></span><span></span>
        </span>
      </span>
      <span class="global-music-text">
        {{ isPlaying ? '正在播放' : '背景音乐' }}
      </span>
    </button>

    <!-- 隐藏的 audio 元素 -->
    <audio
      ref="audioRef"
      src="/queyue.mp3"
      preload="metadata"
      @ended="onEnded"
    ></audio>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, onBeforeMount, ref } from 'vue'

const isClient = typeof window !== 'undefined'
const isPlaying = ref(false)
const audioRef = ref<HTMLAudioElement | null>(null)
const playerStyle = ref<Record<string, string>>({
  top: '10px',
})

const STORAGE_KEY = 'yixuan-blog-music-volume'

const loadVolume = () => {
  if (!isClient) return
  try {
    const v = window.localStorage.getItem(STORAGE_KEY)
    if (v && audioRef.value) {
      const vol = Number(v)
      if (!Number.isNaN(vol) && vol >= 0 && vol <= 1) {
        audioRef.value.volume = vol
      }
    }
  } catch {
    // ignore
  }
}

const saveVolume = () => {
  if (!isClient || !audioRef.value) return
  try {
    window.localStorage.setItem(STORAGE_KEY, String(audioRef.value.volume))
  } catch {
    // ignore
  }
}

const togglePlay = async () => {
  const audio = audioRef.value
  if (!audio) return

  if (audio.paused) {
    try {
      loadVolume()
      await audio.play()
      isPlaying.value = true
    } catch (e) {
      console.warn('背景音乐播放被浏览器拦截：', e)
    }
  } else {
    audio.pause()
    isPlaying.value = false
  }

  saveVolume()
}

const onEnded = () => {
  // 播放结束后重置状态（不自动循环，避免打扰）
  isPlaying.value = false
}

const handleVisibilityChange = () => {
  if (document.hidden && audioRef.value && !audioRef.value.paused) {
    audioRef.value.pause()
    isPlaying.value = false
  }
}

const updatePosition = () => {
  if (!isClient) return
  const navbar = document.querySelector('.navbar') as HTMLElement | null
  const player = document.querySelector('.global-music-player') as HTMLElement | null
  if (!navbar || !player) return

  const navRect = navbar.getBoundingClientRect()
  const btnHeight = player.offsetHeight || 28
  const top = navRect.top + (navRect.height - btnHeight) / 2
  playerStyle.value.top = `${Math.max(top, 8)}px`
}

onMounted(() => {
  if (!isClient) return
  document.addEventListener('visibilitychange', handleVisibilityChange)
  // 初始对齐一次
  setTimeout(updatePosition, 0)
  // 窗口变化时重新计算
  window.addEventListener('resize', updatePosition)
})

onBeforeUnmount(() => {
  if (!isClient) return
  document.removeEventListener('visibilitychange', handleVisibilityChange)
  window.removeEventListener('resize', updatePosition)
})
</script>

<style scoped>
.global-music-player {
  position: fixed;
  right: 16px;
  z-index: 9900;
  display: flex;
  align-items: center;
  font-size: 13px;
}

.global-music-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 999px;
  border: 1px solid rgba(120, 125, 255, 0.3);
  background: linear-gradient(120deg, rgba(255, 255, 255, 0.9), rgba(244, 247, 255, 0.9));
  color: var(--reco-text-color, #1f2937);
  cursor: pointer;
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.12);
  transition: all 0.2s ease, transform 0.15s ease;
  min-height: 32px;
}

.global-music-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.18);
  border-color: rgba(129, 140, 248, 0.55);
}

.global-music-icon {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.icon-circle {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #8bb3ff 0%, #9d8bff 100%);
  color: #fff;
  font-size: 14px;
  box-shadow: 0 4px 12px rgba(120, 125, 255, 0.3);
}

.global-music-text {
  white-space: nowrap;
  font-weight: 600;
  letter-spacing: 0.2px;
}

.global-music-btn.playing {
  border-color: rgba(82, 120, 255, 0.65);
  box-shadow: 0 8px 24px rgba(82, 120, 255, 0.25);
}

.eq-bars {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  height: 14px;
}

.eq-bars span {
  display: block;
  width: 3px;
  background: linear-gradient(180deg, #a7b9ff 0%, #6f8aff 100%);
  border-radius: 999px;
  animation: eqBounce 0.9s infinite ease-in-out;
}

.eq-bars span:nth-child(1) {
  animation-delay: 0s;
  height: 8px;
}

.eq-bars span:nth-child(2) {
  animation-delay: 0.15s;
  height: 12px;
}

.eq-bars span:nth-child(3) {
  animation-delay: 0.3s;
  height: 10px;
}

@keyframes eqBounce {
  0%, 100% {
    transform: scaleY(0.7);
  }
  50% {
    transform: scaleY(1.4);
  }
}

[data-theme="dark"] .global-music-btn {
  background: rgba(28, 32, 48, 0.9);
  color: #e5e7eb;
  border-color: rgba(129, 140, 248, 0.35);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.35);
}

[data-theme="dark"] .icon-circle {
  background: linear-gradient(135deg, #7ea2ff 0%, #7c6dff 100%);
  box-shadow: 0 4px 12px rgba(126, 162, 255, 0.3);
}

[data-theme="dark"] .eq-bars span {
  background: linear-gradient(180deg, #c3d1ff 0%, #8fa2ff 100%);
}

@media (max-width: 768px) {
  .global-music-player {
    display: none;
  }
}
</style>


