---
home: true
lang: en-US
modules:
  - BannerBrand
  - Blog
  - MdContent
  - Footer
bannerBrand:
  bgImage: ''
  bgImageStyle:
    background: 'transparent'
  title: YiXuan's Blog
  description: Share technology, record life
  tagline: Code changes the world, words record life
  buttons:
    - { text: Start Reading, link: '/posts.html' }
    - { text: Tutorials, link: '/en/tutorials/java/', type: 'plain' }
  socialLinks:
    - { icon: 'BrandGithub', link: 'https://github.com/YIXUAN-oss' }
    - { icon: 'Mail', link: 'mailto:byyi.xuan@outlook.com' }
blog:
  socialLinks:
    - { icon: 'BrandGithub', link: 'https://github.com/YIXUAN-oss' }
    - { icon: 'Mail', link: 'mailto:byyi.xuan@outlook.com' }
features:
  - title: 🎨 Beautiful Theme
    details: Card layout, smooth animations, perfect responsive design
  - title: 🌐 Multi-language Support
    details: Support Chinese and English switching, expandable to more languages
  - title: 🔍 Global Search
    details: Built-in powerful search function with keyword highlighting
  - title: 🌙 Dark Mode
    details: Automatically follows system theme, supports manual switching
  - title: 📱 Mobile Friendly
    details: Perfect adaptation to various devices, smooth mobile experience
  - title: 📈 SEO Optimization
    details: Automatically generate sitemap, meta tags to improve search engine ranking
  - title: 🖼️ Image Lazy Loading
    details: Smart image loading, greatly improves page loading speed
  - title: 📊 Analytics
    details: Optional integration of analytics tools like Umami
  - title: 🧩 Rich Plugins
    details: Code copy, reading progress, smooth scrolling and other practical functions
footer:
  record: MIT License
  recordLink: 'https://github.com/YIXUAN-oss/YIXUAN-Blog'
  startYear: 2025
---

<!-- Geometric background decoration - Only displayed in the top Banner area -->
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

<!-- Personal info card - Click to pop up -->
<div class="profile-widget">
<!-- Bottom right trigger button -->
<div class="profile-trigger" id="profileTrigger">
<img src="/avatar.png" alt="YiXuan" />
<div class="pulse-ring"></div>
</div>

<!-- Personal info card -->
<div class="profile-card-wrapper" id="profileCard">
<div class="profile-card">
<div class="profile-header">
<div class="profile-avatar">
<img src="/avatar.png" alt="YiXuan" />
</div>
<div class="profile-name">YiXuan</div>
<button class="close-btn" id="closeBtn">✕</button>
</div>

<!-- Social links -->
<div class="profile-social">
<a href="mailto:byyi.xuan@outlook.com" class="social-link" title="Send Email">
<span class="social-icon">📧</span>
<span class="social-text">Email</span>
</a>
<a href="https://github.com/YIXUAN-oss" target="_blank" class="social-link" title="Visit GitHub">
<span class="social-icon">🐙</span>
<span class="social-text">GitHub</span>
</a>
</div>
</div>
</div>
</div>

<script setup>
import { onMounted } from 'vue';

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
    
    // Click avatar
    trigger.onclick = toggleCard;
    
    // Click close button
    if (closeBtn) {
      closeBtn.onclick = toggleCard;
    }
    
    // Click outside to close
    const handleClickOutside = (e) => {
      if (card.classList.contains('active') &&
          !card.contains(e.target) &&
          !trigger.contains(e.target)) {
        card.classList.remove('active');
        trigger.classList.remove('active');
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    
    // Prevent card internal click bubbling
    card.onclick = (e) => {
      if (e.target.tagName === 'A' || e.target.closest('a')) return;
      e.stopPropagation();
    };
  };
  
  setTimeout(initProfile, 500);
});
</script>

<style>
/* Geometric background wrapper - only displayed in top Banner area */
.geometric-background-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1000px; /* Limit height, only cover Banner area */
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}

/* Geometric background decoration style */
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

/* Circle */
.shape-circle {
  border-radius: 50%;
  animation: float 20s ease-in-out infinite;
}

/* Triangle */
.shape-triangle {
  width: 0;
  height: 0;
  border-left: 100px solid transparent;
  border-right: 100px solid transparent;
  border-bottom: 173px solid;
  animation: float 25s ease-in-out infinite, rotate 30s linear infinite;
}

/* Rounded rectangle */
.shape-rounded {
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  animation: float 22s ease-in-out infinite, morph 15s ease-in-out infinite;
}

/* Square */
.shape-square {
  border-radius: 20px;
  animation: float 18s ease-in-out infinite, rotate 25s linear infinite;
}

/* Color styles */
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

/* Float animation */
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

/* Rotate animation */
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Morph animation */
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

/* Responsive - Mobile adjustment */
@media (max-width: 768px) {
  /* Wrapper height adjustment */
  .geometric-background-wrapper {
    height: 500px;
  }
  
  /* Hide some shapes */
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

/* Dark mode adaptation */
[data-theme="dark"] .geometric-background {
  opacity: 0.3;
}

[data-theme="dark"] .shape {
  opacity: 0.4;
}

/* ============================================ */
/* Page background and content area styles */
/* ============================================ */

/* Home container positioning */
.home-blog,
.page {
  position: relative;
}

/* Content area - solid background, starting from tutorial center */
.section-header,
.tutorial-cards,
.tutorial-more-btn-wrapper,
.about-section,
.cta-section {
  position: relative;
  z-index: 1;
}

/* Add background mask before tutorial center */
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

/* Dark mode content background */
[data-theme="dark"] .section-header:first-of-type::before {
  background: #1a1a1a;
}

/* Personal info component style */
.profile-widget {
  position: fixed;
  bottom: 150px;
  right: 10px;
  z-index: 1000;
}

/* Bottom right trigger button */
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

/* Pulse ring effect */
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

/* Personal info card wrapper */
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

/* Personal info card */
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

/* Card header */
.profile-header {
  position: relative;
  margin-bottom: 15px;
}

/* Close button */
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

/* Social links area */
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

/* Dark mode adaptation */
[data-theme="dark"] .profile-trigger {
  border-color: rgba(102, 126, 234, 0.6);
  background: rgba(26, 26, 26, 0.9);
}

[data-theme="dark"] .profile-card {
  background: rgba(26, 26, 26, 0.98);
  border-color: rgba(102, 126, 234, 0.3);
}

[data-theme="dark"] .social-link {
  background: rgba(255, 255, 255, 0.05);
}

[data-theme="dark"] .social-link:hover {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2));
}

[data-theme="dark"] .close-btn {
  background: rgba(26, 26, 26, 0.95);
  border-color: rgba(102, 126, 234, 0.3);
}

/* Responsive design */
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

/* Print - hide */
@media print {
  .profile-widget {
    display: none;
  }
}
</style>

<div class="section-header fade-in-up">
  <h2 class="gradient-text">✨ Tutorial Center</h2>
  <p class="section-subtitle">Systematic learning, from beginner to expert</p>
</div>

<div class="tutorial-cards">
<div class="magic-card" data-href="/en/tutorials/java/">
<span class="magic-card__bg"></span>
<div class="card-header">
<div class="card-icon">☕</div>
<span class="card-badge badge-hot">Hot</span>
</div>
<div class="card-content">
<h3>Java Tutorial</h3>
<p class="card-desc">From basics to advanced, master Java development</p>
<div class="card-tags">
<span class="card-tag">Backend</span>
<span class="card-tag">OOP</span>
<span class="card-tag">Enterprise</span>
</div>
<div class="card-footer">
<span class="footer-text">Start Learning →</span>
</div>
</div>
</div>
<div class="magic-card" data-href="/en/tutorials/python/">
<span class="magic-card__bg"></span>
<div class="card-header">
<div class="card-icon">🐍</div>
<span class="card-badge badge-recommend">Recommend</span>
</div>
<div class="card-content">
<h3>Python Tutorial</h3>
<p class="card-desc">The elegant way of Python programming</p>
<div class="card-tags">
<span class="card-tag">Data Science</span>
<span class="card-tag">AI</span>
<span class="card-tag">Automation</span>
</div>
<div class="card-footer">
<span class="footer-text">Start Learning →</span>
</div>
</div>
</div>
<div class="magic-card" data-href="/en/tutorials/javascript/">
<span class="magic-card__bg"></span>
<div class="card-header">
<div class="card-icon">📜</div>
<span class="card-badge badge-frontend">Frontend</span>
</div>
<div class="card-content">
<h3>Frontend Tutorial</h3>
<p class="card-desc">Modern frontend development guide</p>
<div class="card-tags">
<span class="card-tag">HTML/CSS</span>
<span class="card-tag">JavaScript</span>
<span class="card-tag">Vue/React</span>
</div>
<div class="card-footer">
<span class="footer-text">Start Learning →</span>
</div>
</div>
</div>
<div class="magic-card" data-href="/en/tutorials/database/">
<span class="magic-card__bg"></span>
<div class="card-header">
<div class="card-icon">💾</div>
<span class="card-badge badge-essential">Essential</span>
</div>
<div class="card-content">
<h3>Database Tutorial</h3>
<p class="card-desc">SQL and NoSQL database practice</p>
<div class="card-tags">
<span class="card-tag">MySQL</span>
<span class="card-tag">MongoDB</span>
<span class="card-tag">Redis</span>
</div>
<div class="card-footer">
<span class="footer-text">Start Learning →</span>
</div>
</div>
</div>
<div class="magic-card" data-href="/en/tutorials/network/">
<span class="magic-card__bg"></span>
<div class="card-header">
<div class="card-icon">🌐</div>
<span class="card-badge badge-essential">Essential</span>
</div>
<div class="card-content">
<h3>Computer Network</h3>
<p class="card-desc">Deep understanding of network protocols</p>
<div class="card-tags">
<span class="card-tag">TCP/IP</span>
<span class="card-tag">HTTP/HTTPS</span>
<span class="card-tag">Security</span>
</div>
<div class="card-footer">
<span class="footer-text">Start Learning →</span>
</div>
</div>
</div>
<div class="magic-card" data-href="/en/tutorials/data-structures/">
<span class="magic-card__bg"></span>
<div class="card-header">
<div class="card-icon">📊</div>
<span class="card-badge badge-hot">Hot</span>
</div>
<div class="card-content">
<h3>Data Structures & Algorithms</h3>
<p class="card-desc">Algorithm thinking and programming skills</p>
<div class="card-tags">
<span class="card-tag">Data Structure</span>
<span class="card-tag">Algorithm</span>
<span class="card-tag">LeetCode</span>
</div>
<div class="card-footer">
<span class="footer-text">Start Learning →</span>
</div>
</div>
</div>
</div>

<div class="tutorial-more-btn-wrapper">
<a href="/en/tutorials/" class="tutorial-more-btn">
<span class="more-btn-icon">📚</span>
<span class="more-btn-text">View More Tutorials</span>
<span class="more-btn-arrow">→</span>
</a>
</div>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  // Magic Card initialization
  const initMagicCards = () => {
    const magicCards = document.querySelectorAll('.magic-card');
    
    magicCards.forEach(card => {
      const bg = card.querySelector('.magic-card__bg');
      
      // Mouse move tracking for light effect
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        
        if (bg) {
          bg.style.setProperty('--x', `${x}%`);
          bg.style.setProperty('--y', `${y}%`);
        }
      });
      
      // Click to navigate
      card.addEventListener('click', (e) => {
        const href = card.getAttribute('data-href');
        if (href) {
          window.location.href = href;
        }
      });
      
      // Add hover style
      card.style.cursor = 'pointer';
    });
  };
  
  setTimeout(initMagicCards, 600);
});
</script>

<style>
/* Gradient text effect */
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

/* Section header */
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

/* Fade in up animation */
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

/* Tutorial cards container */
.tutorial-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin: 40px 0;
}

/* Magic Card style */
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

/* Magic Card background light effect */
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

/* Card header */
.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  position: relative;
  z-index: 2;
  height: 56px;
}

/* Card icon */
.card-icon {
  font-size: 48px;
  transition: transform 0.3s ease;
  line-height: 1;
}

.magic-card:hover .card-icon {
  transform: scale(1.1) rotate(-5deg);
}

/* Card badge */
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

.badge-essential {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
}

/* Card content */
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

/* Card tags */
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

/* Card footer */
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

/* Hover effect */
.magic-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(102, 126, 234, 0.2);
}

/* Responsive design */
@media (min-width: 1201px) {
  .tutorial-cards {
    grid-template-columns: repeat(3, 1fr) !important;
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

/* View more button */
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

/* Responsive */
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

/* Dark mode adaptation */
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

## 🎯 About This Site

Welcome to my personal blog! This is where I share technical knowledge, record learning experiences, and document life moments.

- 💻 **Tech Stack**: Java, Python, JavaScript, Database, etc.
- 📖 **Content**: Programming tutorials, technical articles, resource sharing, life essays
- 🎓 **Writing Philosophy**: Record with heart, share knowledge, grow together

### Contact

- 📧 Email: [byyi.xuan@outlook.com](mailto:byyi.xuan@outlook.com)
- 🐙 GitHub: [@YIXUAN-oss](https://github.com/YIXUAN-oss)

---

<div style="text-align: center; margin-top: 40px; color: var(--text-color-secondary, #6a737d);">
  <p>⭐ If you find the content helpful, welcome to Star!</p>
  <p>💬 If you have any questions, feel free to contact me via email or GitHub!</p>
</div>


