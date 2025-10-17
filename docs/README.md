---
home: true
modules:
  - BannerBrand
  - MdContent
  - Footer
bannerBrand:
  bgImage: ''
  bgImageStyle:
    background: 'transparent'
  title: 懿轩的博客
  description: 分享技术知识，记录成长历程
  tagline: 用代码改变世界，用文字记录生活
  buttons:
    - { text: 开始阅读, link: '/articles/' }
    - { text: 教程中心, link: '/tutorials/', type: 'plain' }
  socialLinks:
    - { icon: 'BrandGithub', link: 'https://github.com/YIXUAN-oss' }
    - { icon: 'Mail', link: 'mailto:byyi.xuan@outlook.com' }
blog:
  socialLinks:
    - { icon: 'BrandGithub', link: 'https://github.com/YIXUAN-oss' }
    - { icon: 'Mail', link: 'mailto:byyi.xuan@outlook.com' }
isShowTitleInHome: true
actionText: About
actionLink: /views/other/about
features:
  - title: 🎨 美观主题
    details: 卡片式布局，流畅动画过渡，完美响应式设计
  - title: 🌐 多语言支持
    details: 支持中英文切换，可扩展更多语言
  - title: 🔍 全局搜索
    details: 内置强大的搜索功能，支持关键词高亮
  - title: 🌙 暗黑模式
    details: 自动跟随系统主题，支持手动切换
  - title: 📱 移动友好
    details: 完美适配各种设备，流畅的移动端体验
  - title: 📈 SEO 优化
    details: 自动生成 sitemap、meta 标签，提升搜索引擎排名
  - title: 🖼️ 图片懒加载
    details: 智能加载图片，大幅提升页面加载速度
  - title: 📊 统计分析
    details: 可选集成 Umami 等统计工具
  - title: 🧩 丰富插件
    details: 代码复制、阅读进度、平滑滚动等实用功能
footer:
  record: MIT License
  recordLink: 'https://github.com/YIXUAN-oss/YIXUAN-Blog'
  cyberSecurityRecord: 懿轩的博客
  cyberSecurityLink: 'https://github.com/YIXUAN-oss'
  startYear: 2025
---

<!-- 几何背景装饰 - 仅在顶部 Banner 区域显示 -->
<ClientOnly>
<div class="geometric-background-wrapper">
<div class="geometric-background">
<div class="shape shape-circle shape-blue"></div>
<div class="shape shape-triangle shape-red"></div>
<div class="shape shape-rounded shape-yellow"></div>
<div class="shape shape-circle shape-green"></div>
<div class="shape shape-square shape-purple"></div>
<div class="shape shape-circle shape-pink"></div>
</div>
</div>
</ClientOnly>

<!-- 个人信息卡片 - 点击式弹出 -->
<div class="profile-widget">
<!-- 右下角触发按钮 -->
<div class="profile-trigger" id="profileTrigger">
<img src="/avatar.png" alt="懿轩" />
<div class="pulse-ring"></div>
</div>

<!-- 个人信息卡片 -->
<div class="profile-card-wrapper" id="profileCard">
<div class="profile-card">
<div class="profile-header">
<div class="profile-avatar">
<img src="/avatar.png" alt="懿轩" />
</div>
<div class="profile-name">懿轩</div>
<button class="close-btn" id="closeBtn">✕</button>
</div>

<!-- 社交链接 -->
<div class="profile-social">
<a href="mailto:byyi.xuan@outlook.com" class="social-link" title="发送邮件">
<span class="social-icon">📧</span>
<span class="social-text">邮箱</span>
</a>
<a href="https://github.com/YIXUAN-oss" target="_blank" class="social-link" title="访问 GitHub">
<span class="social-icon">🐙</span>
<span class="social-text">GitHub</span>
</a>
</div>
</div>
</div>
</div>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue';

onMounted(() => {
  const initProfile = () => {
    const trigger = document.getElementById('profileTrigger');
    const card = document.getElementById('profileCard');
    const closeBtn = document.getElementById('closeBtn');
    
    if (!trigger || !card) {
      setTimeout(initProfile, 100);
      return;
    }
    
    const toggleCard = (e) => {
      e?.stopPropagation();
      card.classList.toggle('active');
      trigger.classList.toggle('active');
    };
    
    // 点击头像
    trigger.onclick = toggleCard;
    
    // 点击关闭按钮
    if (closeBtn) {
      closeBtn.onclick = toggleCard;
    }
    
    // 点击外部关闭
    const handleClickOutside = (e) => {
      if (card.classList.contains('active') &&
          !card.contains(e.target) &&
          !trigger.contains(e.target)) {
        card.classList.remove('active');
        trigger.classList.remove('active');
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    
    // 阻止卡片内部点击冒泡
    card.onclick = (e) => {
      if (e.target.tagName === 'A' || e.target.closest('a')) return;
      e.stopPropagation();
    };
  };
  
  // Magic Card 初始化
  const initMagicCards = () => {
    const magicCards = document.querySelectorAll('.magic-card');
    
    magicCards.forEach(card => {
      const bg = card.querySelector('.magic-card__bg');
      
      // 鼠标移动跟踪光效
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        
        if (bg) {
          bg.style.setProperty('--x', `${x}%`);
          bg.style.setProperty('--y', `${y}%`);
        }
      });
      
      // 点击跳转
      card.addEventListener('click', (e) => {
        const href = card.getAttribute('data-href');
        if (href) {
          window.location.href = href;
        }
      });
      
      // 添加悬停样式
      card.style.cursor = 'pointer';
    });
  };
  
  setTimeout(initProfile, 500);
  setTimeout(initMagicCards, 600);
});
</script>

<style>
/* 几何背景包装器 - 只在顶部 Banner 区域显示 */
.geometric-background-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1000px; /* 限制高度，只覆盖 Banner 区域 */
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}

/* 几何背景装饰样式 */
.geometric-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.shape {
  position: absolute;
  opacity: 0.6;
  transition: all 0.3s ease;
}

/* 圆形 */
.shape-circle {
  border-radius: 50%;
  animation: float 20s ease-in-out infinite;
}

/* 三角形 */
.shape-triangle {
  width: 0;
  height: 0;
  border-left: 100px solid transparent;
  border-right: 100px solid transparent;
  border-bottom: 173px solid;
  animation: float 25s ease-in-out infinite, rotate 30s linear infinite;
}

/* 圆角矩形 */
.shape-rounded {
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  animation: float 22s ease-in-out infinite, morph 15s ease-in-out infinite;
}

/* 正方形 */
.shape-square {
  border-radius: 20px;
  animation: float 18s ease-in-out infinite, rotate 25s linear infinite;
}

/* 颜色样式 */
.shape-blue {
  background: #667eea;
  width: 180px;
  height: 180px;
  top: 10%;
  left: 10%;
}

.shape-red {
  border-bottom-color: #f56565;
  top: 45%;
  left: 5%;
  animation-delay: -5s;
}

.shape-yellow {
  background: #fbbf24;
  width: 250px;
  height: 200px;
  top: 5%;
  right: 12%;
  animation-delay: -10s;
}

.shape-green {
  background: #48bb78;
  width: 160px;
  height: 160px;
  top: 55%;
  right: 18%;
  animation-delay: -15s;
}

.shape-purple {
  background: #9f7aea;
  width: 120px;
  height: 120px;
  top: 65%;
  left: 12%;
  animation-delay: -8s;
}

.shape-pink {
  background: #ed64a6;
  width: 100px;
  height: 100px;
  top: 30%;
  right: 6%;
  animation-delay: -12s;
}

/* 浮动动画 */
@keyframes float {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(-30px) translateX(20px);
  }
  50% {
    transform: translateY(-15px) translateX(-20px);
  }
  75% {
    transform: translateY(-40px) translateX(10px);
  }
}

/* 旋转动画 */
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* 形变动画 */
@keyframes morph {
  0%, 100% {
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  }
  25% {
    border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%;
  }
  50% {
    border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%;
  }
  75% {
    border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%;
  }
}

/* 响应式 - 移动端调整 */
@media (max-width: 768px) {
  /* 包装器高度调整 */
  .geometric-background-wrapper {
    height: 500px;
  }
  
  /* 隐藏部分形状 */
  .shape-purple,
  .shape-pink {
    display: none;
  }
  
  .shape {
    opacity: 0.4;
  }
  
  .shape-blue {
    width: 120px;
    height: 120px;
  }
  
  .shape-triangle {
    border-left: 60px solid transparent;
    border-right: 60px solid transparent;
    border-bottom: 104px solid;
  }
  
  .shape-yellow {
    width: 150px;
    height: 120px;
  }
  
  .shape-green {
    width: 100px;
    height: 100px;
  }
}

/* 暗黑模式适配 */
[data-theme="dark"] .geometric-background {
  opacity: 0.3;
}

[data-theme="dark"] .shape {
  opacity: 0.4;
}

/* ============================================ */
/* 页面背景和内容区域样式 */
/* ============================================ */

/* 首页容器定位 */
.home-blog,
.page {
  position: relative;
}

/* 内容区域 - 纯色背景，从教程中心开始 */
.section-header,
.tutorial-cards,
.tutorial-more-btn-wrapper,
.about-section,
.cta-section {
  position: relative;
  z-index: 1;
}

/* 在教程中心之前添加背景遮罩 */
.section-header:first-of-type::before {
  content: '';
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: calc(100% + 2000px);
  background: #ffffff;
  z-index: -1;
  margin-left: -50vw;
}

/* 深色模式下的内容背景 */
[data-theme="dark"] .section-header:first-of-type::before {
  background: #1a1a1a;
}

/* 个人信息组件样式 */
.profile-widget {
  position: fixed;
  bottom: 150px;
  right: 10px;
  z-index: 1000;
}

/* 右下角触发按钮 */
.profile-trigger {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(102, 126, 234, 0.4);
  transition: all 0.3s ease;
  position: relative;
  border: 3px solid #667eea;
  background: white;
}

.profile-trigger img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-trigger:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 25px rgba(102, 126, 234, 0.5);
}

.profile-trigger.active {
  transform: scale(0.95);
}

/* 脉冲环效果 */
.pulse-ring {
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  border: 2px solid #667eea;
  border-radius: 50%;
  animation: pulse 2s ease-out infinite;
  opacity: 0;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}

/* 个人信息卡片容器 */
.profile-card-wrapper {
  position: fixed;
  bottom: 210px;
  right: 60px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px) scale(0.9);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 999;
}

.profile-card-wrapper.active {
  opacity: 1;
  visibility: visible;
  transform: translateY(0) scale(1);
}

/* 个人信息卡片 */
.profile-card {
  background: var(--bg-color, #ffffff);
  border: 2px solid var(--border-color, #eaecef);
  border-radius: 20px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.98);
  min-width: 220px;
  position: relative;
}

/* 卡片头部 */
.profile-header {
  position: relative;
  margin-bottom: 15px;
}

/* 关闭按钮 */
.close-btn {
  position: absolute;
  top: -10px;
  right: -10px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 2px solid var(--border-color, #eaecef);
  background: var(--bg-color, #ffffff);
  color: var(--text-color-secondary, #6a737d);
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  line-height: 1;
  padding: 0;
}

.close-btn:hover {
  background: #f56565;
  color: white;
  border-color: #f56565;
  transform: rotate(90deg);
}

.profile-avatar {
  width: 70px;
  height: 70px;
  margin: 0 auto 12px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #667eea;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
  transition: all 0.3s ease;
  position: relative;
}

.profile-avatar::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  transform: rotate(45deg);
  animation: shine 3s infinite;
}

@keyframes shine {
  0% {
    top: -50%;
    left: -50%;
  }
  100% {
    top: 150%;
    left: 150%;
  }
}

.profile-avatar:hover {
  transform: scale(1.1) rotate(5deg);
  border-color: #764ba2;
}

.profile-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.profile-avatar:hover img {
  transform: scale(1.1);
}

.profile-name {
  font-size: 1.2em;
  font-weight: 600;
  color: var(--text-color, #2c3e50);
  margin-bottom: 15px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.profile-section {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  margin: 8px 0;
  background: var(--bg-color-secondary, #f8f9fa);
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.profile-section:hover {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
  transform: translateX(5px);
}

.section-icon {
  font-size: 1.1em;
  animation: iconPulse 2s ease-in-out infinite;
}

@keyframes iconPulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

.section-title {
  font-size: 0.9em;
  font-weight: 500;
  color: var(--text-color-secondary, #6a737d);
  flex: 1;
  text-align: left;
}

/* 社交链接区域 */
.profile-social {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin: 15px 0;
}

.social-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 12px 16px;
  background: var(--bg-color-secondary, #f8f9fa);
  border-radius: 12px;
  text-decoration: none;
  color: var(--text-color, #2c3e50);
  transition: all 0.3s ease;
  border: 1px solid transparent;
  flex: 1;
  min-width: 0;
}

.social-link:hover {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.2);
}

.social-icon {
  font-size: 1.5em;
  animation: socialIconPulse 2s ease-in-out infinite;
}

@keyframes socialIconPulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.08);
  }
}

.social-text {
  font-size: 0.85em;
  font-weight: 500;
  color: var(--text-color-secondary, #6a737d);
  white-space: nowrap;
}

.social-link:hover .social-text {
  color: var(--text-color, #2c3e50);
}

/* 分隔线 */
.profile-divider {
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    var(--border-color, #eaecef) 20%,
    var(--border-color, #eaecef) 80%,
    transparent
  );
  margin: 15px 0;
}

/* 暗黑模式适配 */
[data-theme="dark"] .profile-trigger {
  border-color: rgba(102, 126, 234, 0.6);
  background: rgba(26, 26, 26, 0.9);
}

[data-theme="dark"] .profile-card {
  background: rgba(26, 26, 26, 0.98);
  border-color: rgba(102, 126, 234, 0.3);
}

[data-theme="dark"] .profile-section {
  background: rgba(255, 255, 255, 0.05);
}

[data-theme="dark"] .social-link {
  background: rgba(255, 255, 255, 0.05);
}

[data-theme="dark"] .social-link:hover {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2));
}

[data-theme="dark"] .profile-divider {
  background: linear-gradient(
    to right,
    transparent,
    rgba(102, 126, 234, 0.3) 20%,
    rgba(102, 126, 234, 0.3) 80%,
    transparent
  );
}

[data-theme="dark"] .close-btn {
  background: rgba(26, 26, 26, 0.95);
  border-color: rgba(102, 126, 234, 0.3);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .profile-widget {
    bottom: 90px;
    right: 20px;
  }
  
  .profile-trigger {
    width: 50px;
    height: 50px;
  }
  
  .profile-card-wrapper {
    bottom: 150px;
    right: 20px;
  }
  
  .profile-card {
    padding: 18px 15px;
    min-width: 200px;
  }
  
  .profile-avatar {
    width: 60px;
    height: 60px;
  }
  
  .profile-name {
    font-size: 1.1em;
  }
  
  .profile-section {
    padding: 8px 10px;
  }
  
  .section-icon {
    font-size: 1em;
  }
  
  .section-title {
    font-size: 0.85em;
  }
  
  .profile-social {
    gap: 8px;
    margin: 12px 0;
  }
  
  .social-link {
    padding: 10px 12px;
  }
  
  .social-icon {
    font-size: 1.3em;
  }
  
  .social-text {
    font-size: 0.75em;
  }
  
  .close-btn {
    width: 24px;
    height: 24px;
    font-size: 14px;
  }
}

/* 打印时隐藏 */
@media print {
  .profile-widget {
    display: none;
  }
}
</style>

<!-- ## 📚 精选内容 -->
<div class="section-header fade-in-up">
  <h2 class="gradient-text">✨ 教程中心</h2>
  <p class="section-subtitle">系统化学习，从入门到精通</p>
</div>

<div class="tutorial-cards">
<div class="magic-card" data-href="tutorials/java/">
<span class="magic-card__bg"></span>
<div class="card-header">
<div class="card-icon">☕</div>
<span class="card-badge badge-hot">热门</span>
</div>
<div class="card-content">
<h3>Java 教程</h3>
<p class="card-desc">从基础到进阶，全面掌握 Java 开发</p>
<div class="card-tags">
<span class="card-tag">后端开发</span>
<span class="card-tag">面向对象</span>
<span class="card-tag">企业级</span>
</div>
<div class="card-footer">
<span class="footer-text">开始学习 →</span>
</div>
</div>
</div>
<div class="magic-card" data-href="tutorials/python/">
<span class="magic-card__bg"></span>
<div class="card-header">
<div class="card-icon">🐍</div>
<span class="card-badge badge-recommend">推荐</span>
</div>
<div class="card-content">
<h3>Python 教程</h3>
<p class="card-desc">简洁优雅的 Python 编程之道</p>
<div class="card-tags">
<span class="card-tag">数据科学</span>
<span class="card-tag">人工智能</span>
<span class="card-tag">自动化</span>
</div>
<div class="card-footer">
<span class="footer-text">开始学习 →</span>
</div>
</div>
</div>
<div class="magic-card" data-href="tutorials/javascript/">
<span class="magic-card__bg"></span>
<div class="card-header">
<div class="card-icon">📜</div>
<span class="card-badge badge-frontend">前端</span>
</div>
<div class="card-content">
<h3>前端教程</h3>
<p class="card-desc">现代前端开发完整指南</p>
<div class="card-tags">
<span class="card-tag">HTML/CSS</span>
<span class="card-tag">JavaScript</span>
<span class="card-tag">Vue/React</span>
</div>
<div class="card-footer">
<span class="footer-text">开始学习 →</span>
</div>
</div>
</div>
<div class="magic-card" data-href="tutorials/database/">
<span class="magic-card__bg"></span>
<div class="card-header">
<div class="card-icon">💾</div>
<span class="card-badge badge-must">必学</span>
</div>
<div class="card-content">
<h3>数据库教程</h3>
<p class="card-desc">SQL 和 NoSQL 数据库实战</p>
<div class="card-tags">
<span class="card-tag">MySQL</span>
<span class="card-tag">MongoDB</span>
<span class="card-tag">Redis</span>
</div>
<div class="card-footer">
<span class="footer-text">开始学习 →</span>
</div>
</div>
</div>
</div>

<div class="tutorial-more-btn-wrapper">
<a href="tutorials/" class="tutorial-more-btn">
<span class="more-btn-icon">📚</span>
<span class="more-btn-text">了解更多教程</span>
<span class="more-btn-arrow">→</span>
</a>
</div>

<style>
/* 渐变文字效果 */
.gradient-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 2.5em;
  font-weight: bold;
  margin: 0;
  animation: gradient-shift 3s ease infinite;
}

@keyframes gradient-shift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

/* 章节头部 */
.section-header {
  text-align: center;
  margin: 60px 0 40px;
}

.section-subtitle {
  color: var(--text-color-secondary, #6a737d);
  font-size: 1.1em;
  margin-top: 10px;
  opacity: 0.8;
}

/* 淡入向上动画 */
.fade-in-up {
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 教程卡片容器 */
.tutorial-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin: 40px 0;
}

/* Magic Card 样式 */
.magic-card {
  position: relative;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 30px 24px 28px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.04);
}

.magic-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 16px;
  padding: 1px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.3), rgba(118, 75, 162, 0.3));
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.magic-card:hover::before {
  opacity: 1;
}

/* Magic Card 背景光效 */
.magic-card__bg {
  position: absolute;
  inset: 0;
  border-radius: 16px;
  opacity: 0;
  transition: opacity 0.3s ease;
  background: radial-gradient(
    600px circle at var(--x, 50%) var(--y, 50%),
    rgba(102, 126, 234, 0.15),
    transparent 40%
  );
  pointer-events: none;
  z-index: 0;
}

.magic-card:hover .magic-card__bg {
  opacity: 0;
}

/* 卡片头部 */
.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  position: relative;
  z-index: 2;
  height: 56px;
}

/* 卡片图标 */
.card-icon {
  font-size: 48px;
  transition: transform 0.3s ease;
  line-height: 1;
}

.magic-card:hover .card-icon {
  transform: scale(1.1) rotate(-5deg);
}

/* 卡片徽章 */
.card-badge {
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.75em;
  font-weight: 600;
  color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.badge-hot {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.badge-recommend {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

.badge-frontend {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
}

.badge-must {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
}

/* 卡片内容 */
.card-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
}

.card-content h3 {
  margin: 0 0 12px 0;
  font-size: 1.5em;
  font-weight: 600;
  color: var(--text-color, #2c3e50);
  transition: all 0.3s ease;
  position: relative;
  z-index: 3;
  border: none !important;
  padding: 0 !important;
  line-height: 1.4;
  height: 42px;
  display: flex;
  align-items: center;
}

.magic-card:hover .card-content h3 {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transform: translateX(4px);
}

.card-desc {
  color: var(--text-color-secondary, #6a737d);
  font-size: 0.95em;
  line-height: 1.6;
  margin: 0 0 12px 0;
  position: relative;
  z-index: 2;
  height: 48px;
  display: flex;
  align-items: center;
}

/* 卡片标签 */
.card-tags {
  display: flex;
  flex-wrap: nowrap;
  gap: 6px;
  margin-bottom: 12px;
  overflow: hidden;
  position: relative;
  z-index: 2;
  height: 56px;
  align-items: flex-start;
}

.card-tag {
  padding: 4px 8px;
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
  border-radius: 8px;
  font-size: 0.7em;
  font-weight: 500;
  transition: all 0.3s ease;
  white-space: nowrap;
  flex-shrink: 0;
}

.magic-card:hover .card-tag {
  background: rgba(102, 126, 234, 0.2);
  transform: translateY(-2px);
}

/* 卡片底部 */
.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding-top: 16px;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  position: relative;
  z-index: 2;
}

.footer-text {
  color: #667eea;
  font-weight: 600;
  font-size: 0.9em;
  transition: all 0.3s ease;
}

.magic-card:hover .footer-text {
  transform: translateX(4px);
}

/* 悬停效果 */
.magic-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(102, 126, 234, 0.2);
}

/* 响应式设计 */
@media (min-width: 1201px) {
  .tutorial-cards {
    grid-template-columns: repeat(4, 1fr) !important;
  }
}

@media (max-width: 1200px) and (min-width: 769px) {
  .tutorial-cards {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .tutorial-cards {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .gradient-text {
    font-size: 2em;
  }
  
  .card-header {
    height: auto;
  }
  
  .card-icon {
    font-size: 40px;
  }
  
  .card-content h3 {
    font-size: 1.3em;
    height: auto;
  }
  
  .card-desc {
    height: auto;
  }
  
  .card-tags {
    flex-wrap: wrap;
    gap: 6px;
    height: auto;
  }
  
  .card-tag {
    font-size: 0.75em;
    padding: 3px 8px;
  }
}

/* 查看更多按钮 */
.tutorial-more-btn-wrapper {
  text-align: center;
  margin: 40px 0 20px;
}

.tutorial-more-btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 16px 40px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white !important;
  text-decoration: none;
  border-radius: 50px;
  font-size: 1.1em;
  font-weight: 600;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
  position: relative;
  overflow: hidden;
}

.tutorial-more-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  transition: left 0.6s ease;
}

.tutorial-more-btn:hover::before {
  left: 100%;
}

.tutorial-more-btn:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 12px 30px rgba(102, 126, 234, 0.4);
  color: white !important;
}

.tutorial-more-btn:active {
  transform: translateY(-1px) scale(1.02);
}

.more-btn-icon {
  font-size: 1.3em;
  animation: icon-wiggle 2s ease-in-out infinite;
}

@keyframes icon-wiggle {
  0%, 100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-10deg);
  }
  75% {
    transform: rotate(10deg);
  }
}

.more-btn-text {
  color: white;
  font-weight: 600;
}

.more-btn-arrow {
  font-size: 1.2em;
  color: white;
  transition: transform 0.3s ease;
}

.tutorial-more-btn:hover .more-btn-arrow {
  transform: translateX(5px);
}

/* 响应式 */
@media (max-width: 768px) {
  .tutorial-more-btn {
    padding: 14px 30px;
    font-size: 1em;
    gap: 10px;
  }
  
  .more-btn-icon {
    font-size: 1.2em;
  }
}

/* 暗黑模式适配 */
[data-theme="dark"] .magic-card {
  background: rgb(28, 28, 30) !important;
  backdrop-filter: none;
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3), 0 2px 8px rgba(0, 0, 0, 0.2);
}

[data-theme="dark"] .magic-card:hover {
  background: rgb(38, 38, 40) !important;
  box-shadow: 0 12px 40px rgba(102, 126, 234, 0.4);
}

[data-theme="dark"] .card-content h3 {
  color: rgba(255, 255, 255, 0.9);
}

[data-theme="dark"] .card-desc {
  color: rgba(255, 255, 255, 0.6);
}

[data-theme="dark"] .card-tag {
  background: rgba(102, 126, 234, 0.2);
  color: #8b9eff;
}

[data-theme="dark"] .card-footer {
  border-top-color: rgba(255, 255, 255, 0.1);
}

[data-theme="dark"] .footer-text {
  color: #8b9eff;
}
</style>

## 🎯 关于本站

<ClientOnly>
<div class="about-section">
<div class="about-card">
<div class="about-header">
<div class="avatar-wrapper">
<div class="avatar-ring"></div>
<div class="avatar-img">👨‍💻</div>
</div>
<h3>欢迎来到我的个人博客！</h3>
<p class="about-intro">这里是我分享技术知识、记录学习心得、记录生活点滴的地方。</p>
</div>
<div class="about-content">
<div class="info-grid">
<div class="info-item">
<div class="info-icon">💻</div>
<div class="info-text">
<strong>技术栈</strong>
<span>Java、Python、JavaScript、数据库等</span>
</div>
</div>
<div class="info-item">
<div class="info-icon">📖</div>
<div class="info-text">
<strong>内容方向</strong>
<span>编程教程、技术文章、资源分享、生活随笔</span>
</div>
</div>
<div class="info-item">
<div class="info-icon">🎓</div>
<div class="info-text">
<strong>写作理念</strong>
<span>用心记录，分享知识，共同成长</span>
</div>
</div>
</div>
</div>
<div class="contact-section">
<h4>📬 联系方式</h4>
<div class="contact-links">
<a href="mailto:byyi.xuan@outlook.com" class="contact-btn">
<span class="btn-icon">📧</span>
<span class="btn-text">发送邮件</span>
</a>
<a href="https://github.com/YIXUAN-oss" target="_blank" class="contact-btn">
<span class="btn-icon">🐙</span>
<span class="btn-text">GitHub</span>
</a>
</div>
</div>
</div>
</div>
</ClientOnly>

<ClientOnly>
<div class="cta-section">
<div class="cta-content">
<div class="cta-icon">✨</div>
<h3>喜欢这个博客？</h3>
<p>如果觉得内容不错，欢迎 Star 支持！有任何疑问，随时通过邮件或 GitHub 交流！</p>
<div class="cta-buttons">
<a href="https://github.com/YIXUAN-oss/YIXUAN-Blog" target="_blank" class="cta-btn primary">⭐ Star 支持</a>
<a href="about/" class="cta-btn secondary">👤 了解更多</a>
</div>
</div>
</div>
</ClientOnly>

<style>
/* 关于部分 */
.about-section {
  margin: 60px 0;
}

.about-card {
  background: linear-gradient(135deg, 
    rgba(102, 126, 234, 0.05) 0%, 
    rgba(118, 75, 162, 0.05) 100%);
  border: 2px solid var(--border-color, #eaecef);
  border-radius: 24px;
  padding: 50px 40px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.about-card::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, 
    rgba(102, 126, 234, 0.1) 0%, 
    transparent 70%);
  animation: rotate 20s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* 头像部分 */
.about-header {
  text-align: center;
  margin-bottom: 40px;
  position: relative;
  z-index: 1;
}

.avatar-wrapper {
  position: relative;
  display: inline-block;
  margin-bottom: 20px;
}

.avatar-img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  position: relative;
  z-index: 2;
  animation: avatar-float 3s ease-in-out infinite;
}

@keyframes avatar-float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.avatar-ring {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border: 3px solid transparent;
  border-top-color: #667eea;
  border-right-color: #764ba2;
  border-radius: 50%;
  animation: ring-spin 3s linear infinite;
  z-index: 1;
}

@keyframes ring-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.about-header h3 {
  font-size: 2em;
  margin: 20px 0 10px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  border: none;
  line-height: 1.4;
  padding: 5px 0;
}

.about-intro {
  font-size: 1.1em;
  color: var(--text-color-secondary, #6a737d);
  margin: 0;
  line-height: 1.6;
}

/* 信息网格 */
.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
  margin: 30px 0;
  position: relative;
  z-index: 1;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  padding: 20px;
  background: #f5f7fa;
  border-radius: 12px;
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.info-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border-color: var(--accent-color, #3eaf7c);
}

.info-icon {
  font-size: 32px;
  flex-shrink: 0;
  animation: icon-bounce 2s ease-in-out infinite;
}

@keyframes icon-bounce {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

.info-text {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.info-text strong {
  color: var(--text-color, #2c3e50);
  font-size: 1.1em;
}

.info-text span {
  color: var(--text-color-secondary, #6a737d);
  font-size: 0.95em;
  line-height: 1.5;
}

/* 联系部分 */
.contact-section {
  text-align: center;
  margin-top: 40px;
  padding-top: 30px;
  border-top: 2px dashed var(--border-color, #eaecef);
  position: relative;
  z-index: 1;
}

.contact-section h4 {
  font-size: 1.5em;
  margin-bottom: 20px;
  color: var(--text-color, #2c3e50);
}

.contact-links {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.contact-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 30px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white !important;
  text-decoration: none;
  border-radius: 50px;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.contact-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
  color: white !important;
}

.btn-icon {
  font-size: 1.2em;
  color: white;
}

.btn-text {
  color: white;
}

/* CTA部分 */
.cta-section {
  margin: 60px 0;
}

.cta-content {
  text-align: center;
  padding: 60px 40px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 24px;
  color: white;
  position: relative;
  overflow: hidden;
}

.cta-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%);
  animation: cta-pulse 4s ease-in-out infinite;
}

@keyframes cta-pulse {
  0%, 100% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
}

.cta-icon {
  font-size: 64px;
  margin-bottom: 20px;
  animation: sparkle 2s ease-in-out infinite;
}

@keyframes sparkle {
  0%, 100% {
    transform: scale(1) rotate(0deg);
  }
  50% {
    transform: scale(1.2) rotate(180deg);
  }
}

.cta-content h3 {
  font-size: 2em;
  margin: 20px 0;
  border: none;
  color: white;
}

.cta-content p {
  font-size: 1.1em;
  margin: 20px 0 30px;
  opacity: 0.95;
  line-height: 1.6;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
}

.cta-btn {
  padding: 15px 35px;
  border-radius: 50px;
  font-weight: bold;
  font-size: 1.1em;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
}

.cta-btn.primary {
  background: white;
  color: #667eea;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.cta-btn.primary:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.cta-btn.secondary {
  background: rgba(255, 255, 255, 0.2);
  color: white !important;
  border: 2px solid white;
  backdrop-filter: blur(10px);
}

.cta-btn.secondary:hover {
  background: rgba(255, 255, 255, 0.3);
  color: white !important;
  transform: translateY(-3px);
}

/* 响应式 */
@media (max-width: 768px) {
  .about-card {
    padding: 40px 25px;
  }
  
  .info-grid {
    grid-template-columns: 1fr;
  }
  
  .contact-links {
    flex-direction: column;
  }
  
  .contact-btn {
    width: 100%;
    justify-content: center;
  }
  
  .cta-content {
    padding: 40px 25px;
  }
  
  .cta-content h3 {
    font-size: 1.5em;
  }
  
  .cta-buttons {
    flex-direction: column;
  }
  
  .cta-btn {
    width: 100%;
    text-align: center;
  }
}

/* 暗黑模式 */
[data-theme="dark"] .info-item {
  background: #2a2a2a;
  border-color: rgba(255, 255, 255, 0.1);
}

[data-theme="dark"] .info-item:hover {
  background: #303030;
  border-color: rgba(139, 92, 246, 0.5);
}

[data-theme="dark"] .about-card {
  border-color: rgba(102, 126, 234, 0.3);
}
</style>

<script>
// 卡片点击跳转功能
export default {
  mounted() {
    this.initCardClick();
  },
  updated() {
    this.initCardClick();
  },
  methods: {
    initCardClick() {
      this.$nextTick(() => {
        const cards = document.querySelectorAll('.tutorial-card[data-href]');
        cards.forEach((card) => {
          // 移除旧的事件监听器（如果存在）
          card.onclick = null;
          // 添加新的点击事件
          card.onclick = (e) => {
            e.preventDefault();
            const href = card.getAttribute('data-href');
            if (href) {
              this.$router.push(href);
            }
          };
        });
      });
    }
  }
}
</script>


