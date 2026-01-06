<template>
  <div class="about-me-quick-card">
    <div class="card-left">
      <div class="badge">About me in 10s ⚡</div>
      <h2 class="title">懿轩 · in 10 秒认识我</h2>
      <p class="signature" key="signature">
        {{ currentSignature.text }}
      </p>
      <p class="signature-tag">
        #{{ currentSignature.tag }}
      </p>

      <div class="meta-row">
        <div class="meta-item">
          <span class="label">定位</span>
          <span class="value">全栈 / AI / 云原生</span>
        </div>
        <div class="meta-item">
          <span class="label">当前主线</span>
          <span class="value">Java 后端 & AI 应用</span>
        </div>
      </div>

      <div class="actions">
        <button
          type="button"
          class="primary-btn"
          @click="refreshSignature"
        >
          换一句签名
        </button>
        <button
          type="button"
          class="ghost-btn"
          @click="scrollToDetail"
        >
          了解更多 →
        </button>
      </div>
    </div>

    <div class="card-right">
      <div class="avatar-wrap">
        <div class="avatar-ring"></div>
        <img
          src="/avatar.png"
          alt="懿轩头像"
          class="avatar-img"
          loading="lazy"
        />
        <div class="status-pill">
          <span class="dot"></span>
          正在升级自己 · On learning
        </div>
      </div>

      <div class="mini-tags">
        <span class="mini-tag">💻 Coding</span>
        <span class="mini-tag">📚 Reading</span>
        <span class="mini-tag">🎵 Music</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

interface SignatureItem {
  text: string
  tag: string
}

const signatures: SignatureItem[] = [
  {
    text: '写给机器的代码，也写给未来的自己。',
    tag: '代码诗人',
  },
  {
    text: '把复杂的问题拆小，一点一点啃掉它。',
    tag: '问题终结者',
  },
  {
    text: '输出是最好的输入，写博客是和自己对话。',
    tag: '输出驱动',
  },
  {
    text: '技术是手段，让生活和世界变得更好才是目的。',
    tag: '价值至上',
  },
  {
    text: '保持好奇，承认无知，然后去搞懂它。',
    tag: '终身学习者',
  },
]

const currentSignature = ref<SignatureItem>(signatures[0])

const pickRandom = () => {
  if (!signatures.length) return signatures[0]
  const idx = Math.floor(Math.random() * signatures.length)
  return signatures[idx]
}

const refreshSignature = () => {
  let next = pickRandom()
  // 尽量避免和当前重复
  if (next.text === currentSignature.value.text && signatures.length > 1) {
    next = signatures[(signatures.indexOf(next) + 1) % signatures.length]
  }
  currentSignature.value = next
}

const scrollToDetail = () => {
  if (typeof window === 'undefined') return
  const el = document.querySelector('h2[id="个人简介"], h2[id="about-me"]')
  if (el && 'scrollIntoView' in el) {
    ;(el as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'start' })
  } else {
    window.scrollTo({ top: window.innerHeight * 0.7, behavior: 'smooth' })
  }
}

onMounted(() => {
  currentSignature.value = pickRandom()
})
</script>

<style scoped>
.about-me-quick-card {
  display: grid;
  grid-template-columns: minmax(0, 3fr) minmax(0, 2.4fr);
  gap: 32px;
  padding: 28px 24px;
  margin: 24px 0 32px;
  border-radius: 20px;
  background: linear-gradient(
      120deg,
      rgba(91, 143, 249, 0.1),
      rgba(165, 105, 255, 0.08)
    ),
    var(--bg-color, #ffffff);
  border: 1px solid rgba(148, 163, 184, 0.35);
  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.12);
  position: relative;
  overflow: hidden;
}

.about-me-quick-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at top left,
    rgba(129, 140, 248, 0.25),
    transparent 55%
  );
  opacity: 0.9;
  pointer-events: none;
}

.about-me-quick-card::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at bottom right,
    rgba(236, 72, 153, 0.16),
    transparent 55%
  );
  opacity: 0.9;
  pointer-events: none;
}

.card-left,
.card-right {
  position: relative;
  z-index: 1;
}

.badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 12px;
  background: rgba(15, 23, 42, 0.8);
  color: #e5e7eb;
  border: 1px solid rgba(148, 163, 184, 0.5);
  backdrop-filter: blur(12px);
  margin-bottom: 10px;
}

.title {
  margin: 0 0 12px;
  font-size: 22px;
  font-weight: 700;
  color: #0f172a;
  border: none;
}

[data-theme='dark'] .title {
  color: #e5e7eb;
}

.signature {
  margin: 0;
  font-size: 15px;
  line-height: 1.7;
  color: rgba(15, 23, 42, 0.9);
}

[data-theme='dark'] .signature {
  color: rgba(226, 232, 240, 0.96);
}

.signature-tag {
  margin: 10px 0 0;
  font-size: 13px;
  letter-spacing: 0.03em;
  color: rgba(55, 65, 81, 0.85);
}

[data-theme='dark'] .signature-tag {
  color: rgba(156, 163, 175, 0.96);
}

.meta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 18px;
}

.meta-item {
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid rgba(148, 163, 184, 0.45);
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  backdrop-filter: blur(10px);
}

[data-theme='dark'] .meta-item {
  background: rgba(15, 23, 42, 0.85);
  border-color: rgba(148, 163, 184, 0.8);
}

.meta-item .label {
  opacity: 0.75;
}

.meta-item .value {
  font-weight: 600;
}

.actions {
  margin-top: 22px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.primary-btn,
.ghost-btn {
  border-radius: 999px;
  font-size: 13px;
  padding: 7px 16px;
  border: 1px solid transparent;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  transition: all 0.18s ease-out;
  white-space: nowrap;
}

.primary-btn {
  background: linear-gradient(135deg, #4f46e5, #6366f1);
  color: #f9fafb;
  box-shadow: 0 10px 22px rgba(79, 70, 229, 0.45);
}

.primary-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 14px 26px rgba(79, 70, 229, 0.6);
}

.ghost-btn {
  background: rgba(255, 255, 255, 0.9);
  color: #1f2937;
  border-color: rgba(148, 163, 184, 0.7);
}

.ghost-btn:hover {
  background: rgba(248, 250, 252, 0.9);
  transform: translateY(-1px);
}

[data-theme='dark'] .ghost-btn {
  background: rgba(15, 23, 42, 0.92);
  color: #e5e7eb;
  border-color: rgba(148, 163, 184, 0.9);
}

.card-right {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;
}

.avatar-wrap {
  position: relative;
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-ring {
  position: absolute;
  inset: 0;
  border-radius: 999px;
  background: conic-gradient(
    from 160deg,
    #4f46e5,
    #0ea5e9,
    #22c55e,
    #f97316,
    #ec4899,
    #4f46e5
  );
  opacity: 0.9;
  filter: blur(0.6px);
}

.avatar-img {
  position: relative;
  width: 122px;
  height: 122px;
  border-radius: 999px;
  border: 4px solid rgba(248, 250, 252, 0.96);
  object-fit: cover;
  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.6);
}

[data-theme='dark'] .avatar-img {
  border-color: rgba(15, 23, 42, 0.96);
}

.status-pill {
  position: absolute;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(15, 23, 42, 0.96);
  color: #e5e7eb;
  font-size: 11px;
  padding: 5px 10px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  white-space: nowrap;
  box-shadow: 0 8px 18px rgba(15, 23, 42, 0.7);
}

.status-pill .dot {
  width: 7px;
  height: 7px;
  border-radius: 999px;
  background: #22c55e;
  box-shadow: 0 0 0 6px rgba(134, 239, 172, 0.3);
}

.mini-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  margin-top: 16px;
}

.mini-tag {
  font-size: 11px;
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(148, 163, 184, 0.4);
}

[data-theme='dark'] .mini-tag {
  background: rgba(15, 23, 42, 0.93);
  border-color: rgba(148, 163, 184, 0.8);
  color: #e5e7eb;
}

@media (max-width: 900px) {
  .about-me-quick-card {
    grid-template-columns: minmax(0, 1fr);
    padding: 22px 18px;
    gap: 22px;
  }

  .title {
    font-size: 20px;
  }

  .signature {
    font-size: 14px;
  }

  .avatar-wrap {
    width: 132px;
    height: 132px;
  }

  .avatar-img {
    width: 110px;
    height: 110px;
  }
}

@media (max-width: 640px) {
  .actions {
    flex-direction: row;
  }

  .about-me-quick-card {
    margin: 16px -4px 24px;
    border-radius: 18px;
  }
}
</style>





