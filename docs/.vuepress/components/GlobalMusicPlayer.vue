<template>
  <div
    class="global-music-player"
    v-if="isClient"
    :style="playerStyle"
  >
    <button
      class="global-music-btn"
      type="button"
      :aria-label="popupVisible ? '关闭音乐控制面板' : '打开音乐控制面板'"
      @click="togglePopup"
      :class="{ playing: isPlaying, active: popupVisible }"
    >
      <span class="global-music-icon">
        <span v-if="isPlaying" class="eq-bars" aria-hidden="true">
          <span></span><span></span><span></span>
        </span>
        <span v-else class="pause-icon" aria-hidden="true">🎵</span>
      </span>
      <span class="global-music-text">
        {{ isPlaying ? '正在播放' : '背景音乐' }} · {{ currentTrack.name }}
      </span>
    </button>
    <div
      class="music-progress"
      v-if="showProgress"
    >
      <div class="music-progress-bar">
        <div
          class="music-progress-inner"
          :style="{ width: progressPercent + '%' }"
        ></div>
      </div>
      <div class="music-time-row">
        <div class="music-progress-text">
          {{ currentTimeLabel }} / {{ durationLabel }}
        </div>
      </div>
      <div class="music-progress-actions">
        <button
          class="music-skip-btn"
          type="button"
          aria-label="切换上一首"
          @click.stop="prevTrack"
        >
          ⏮
        </button>
        <button
          class="music-skip-btn"
          type="button"
          :aria-label="isPlaying ? '暂停播放' : '播放音乐'"
          @click.stop="playOrPause"
        >
          {{ isPlaying ? '⏸️' : '▶️' }}
        </button>
        <button
          class="music-skip-btn"
          type="button"
          aria-label="切换下一首"
          @click.stop="nextTrack"
        >
          ⏭
        </button>
      </div>
    </div>

    <!-- 隐藏的 audio 元素 -->
    <audio
      ref="audioRef"
      :src="currentTrack.url"
      preload="metadata"
      @ended="onEnded"
      @timeupdate="onTimeUpdate"
      @loadedmetadata="onLoadedMetadata"
    ></audio>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, computed } from 'vue'

const isClient = typeof window !== 'undefined'
const isPlaying = ref(false)
const audioRef = ref<HTMLAudioElement | null>(null)
const playerStyle = ref<Record<string, string>>({
  top: '10px',
})
const currentTime = ref(0)
const duration = ref(0)
const popupVisible = ref(false)
const trackIndex = ref(0)
const playlist = [
  { name: '雀跃', url: '/music/queyue.mp3' },
  { name: '恋人', url: '/music/lianren.mp3' },
  { name: '怀念', url: '/music/wohuainiande.mp3' },
]
const currentTrack = computed(() => playlist[trackIndex.value % playlist.length])

const STORAGE_KEY = 'yixuan-blog-music-volume'
const TRACK_KEY = 'yixuan-blog-music-track-index'

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

const loadTrackIndex = () => {
  if (!isClient) return
  try {
    const v = window.localStorage.getItem(TRACK_KEY)
    if (v !== null) {
      const idx = Number(v)
      if (!Number.isNaN(idx)) {
        trackIndex.value = ((idx % playlist.length) + playlist.length) % playlist.length
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

const playOrPause = async () => {
  const audio = audioRef.value
  if (!audio) return

  if (audio.paused) {
    try {
      loadTrackIndex()
      loadVolume()
      audio.currentTime = currentTime.value || 0
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
  nextTrack(true)
}

const onTimeUpdate = () => {
  const audio = audioRef.value
  if (!audio) return
  currentTime.value = audio.currentTime || 0
  if (audio.duration && !Number.isNaN(audio.duration)) {
    duration.value = audio.duration
  }
}

const onLoadedMetadata = () => {
  const audio = audioRef.value
  if (!audio) return
  if (audio.duration && !Number.isNaN(audio.duration)) {
    duration.value = audio.duration
  }
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

const formatTime = (sec: number) => {
  if (!sec || !Number.isFinite(sec)) return '00:00'
  const minutes = Math.floor(sec / 60)
  const seconds = Math.floor(sec % 60)
  const mm = minutes.toString().padStart(2, '0')
  const ss = seconds.toString().padStart(2, '0')
  return `${mm}:${ss}`
}

const progressPercent = computed(() => {
  if (!duration.value || !Number.isFinite(duration.value)) return 0
  const percent = (currentTime.value / duration.value) * 100
  return Math.max(0, Math.min(100, percent || 0))
})

const currentTimeLabel = computed(() => formatTime(currentTime.value))
const durationLabel = computed(() => formatTime(duration.value))
const showProgress = computed(() => popupVisible.value && duration.value > 0)

const setTrack = async (idx: number, autoPlay = false) => {
  trackIndex.value = ((idx % playlist.length) + playlist.length) % playlist.length
  if (isClient) {
    try {
      window.localStorage.setItem(TRACK_KEY, String(trackIndex.value))
    } catch {
      // ignore
    }
  }

  const audio = audioRef.value
  if (!audio) return
  // 重置时间
  currentTime.value = 0
  duration.value = audio.duration || 0
  audio.currentTime = 0
  audio.load()

  if (autoPlay || isPlaying.value) {
    try {
      await audio.play()
      isPlaying.value = true
    } catch (e) {
      console.warn('切换歌曲后播放被拦截：', e)
      isPlaying.value = false
    }
  }
}

const nextTrack = (autoPlay = true) => {
  setTrack(trackIndex.value + 1, autoPlay)
}

const prevTrack = (autoPlay = true) => {
  setTrack(trackIndex.value - 1, autoPlay)
}

const togglePopup = () => {
  popupVisible.value = !popupVisible.value
}

onMounted(() => {
  if (!isClient) return
  document.addEventListener('visibilitychange', handleVisibilityChange)
  // 初始对齐一次
  setTimeout(updatePosition, 0)
  loadTrackIndex()
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
  gap: 6px;
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
  justify-content: center;
  width: 26px;
  height: 20px;
}

.pause-icon {
  font-size: 16px;
  line-height: 1;
  color: #7c86ff;
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

.global-music-btn.active {
  box-shadow: 0 10px 28px rgba(88, 118, 255, 0.35);
}

.music-progress {
  position: absolute;
  right: 0;
  left: auto;
  top: 100%;
  margin-top: 6px;
  padding: 6px 10px;
  border-radius: 10px;
  background: rgba(248, 249, 252, 0.96);
  color: #1f2937;
  box-shadow: 0 8px 22px rgba(15, 23, 42, 0.18);
  min-width: 160px;
  backdrop-filter: blur(10px);
}

.music-progress-bar {
  position: relative;
  width: 100%;
  height: 4px;
  border-radius: 999px;
  background: rgba(148, 163, 184, 0.35);
  overflow: hidden;
  margin-bottom: 4px;
}

.music-progress-inner {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  border-radius: inherit;
  background: linear-gradient(90deg, #60a5fa, #818cf8, #a855f7);
  transition: width 0.15s ease-out;
}

.music-progress-text {
  font-size: 11px;
  display: flex;
  justify-content: space-between;
  opacity: 0.9;
}

[data-theme="dark"] .music-progress {
  background: rgba(17, 24, 39, 0.96);
  color: #e5e7eb;
  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.65);
}

[data-theme="dark"] .music-progress-bar {
  background: rgba(55, 65, 81, 0.9);
}

.music-progress-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 6px;
}

.eq-bars {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  height: 14px;
  width: 26px;
  justify-content: center;
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

.music-skip-btn {
  padding: 6px 10px;
  border-radius: 10px;
  border: 1px solid rgba(120, 125, 255, 0.3);
  background: rgba(255, 255, 255, 0.9);
  cursor: pointer;
  color: var(--reco-text-color, #1f2937);
  box-shadow: 0 4px 10px rgba(15, 23, 42, 0.12);
  transition: all 0.2s ease, transform 0.15s ease;
  line-height: 1;
  min-width: 40px;
  height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.music-skip-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 16px rgba(15, 23, 42, 0.16);
  border-color: rgba(129, 140, 248, 0.55);
}

[data-theme="dark"] .music-skip-btn {
  background: rgba(28, 32, 48, 0.92);
  color: #e5e7eb;
  border-color: rgba(129, 140, 248, 0.35);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.35);
}

@media (max-width: 768px) {
  .global-music-player {
    display: none;
  }
}
</style>


