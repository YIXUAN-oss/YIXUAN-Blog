---
title: 留言板
date: 2026-01-01 08:30:48
sidebar: false
article: false
toc: false
---

# 留言板

<div class="guestbook-info">
  <div class="info-box">
    <div class="info-icon-circle">
      <svg class="info-icon" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
      </svg>
    </div>
    <span class="info-title">信息</span>
  </div>
  <p>欢迎大家在此留下你的建议和意见，或者在 <a href="https://github.com/YIXUAN-oss/YIXUAN-Blog/issues" target="_blank" rel="noopener noreferrer">GitHub Issue<svg class="external-link-icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a> 提交你的问题，或来 <a href="https://github.com/YIXUAN-oss/YIXUAN-Blog/discussions" target="_blank" rel="noopener noreferrer">GitHub Discussions<svg class="external-link-icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a> 进行讨论。</p>
</div>

<div class="guestbook-actions">
  <span class="last-update">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 4px;">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </svg>
    最后更新时间 2026/01/05 11:18:26
  </span>
</div>

## 💬 评论区

<style scoped>
/* 确保留言板页面内容正常显示 */
.guestbook-info {
  background: #f7f7fe;
  border-left: 4px solid #5f69e8;
  border-radius: 8px;
  padding: 30px;
  margin: 30px 0;
  display: block !important;
  visibility: visible !important;
  opacity: 1 !important;
}

.info-box {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  gap: 8px;
}

.info-icon-circle {
  width: 20px;
  height: 20px;
  background: #5d67e8;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.info-icon {
  width: 12px;
  height: 12px;
  fill: white;
}

.info-title {
  font-weight: 600;
  color: #5d67e8;
  font-size: 1em;
}

.guestbook-info p {
  margin: 0;
  line-height: 1.8;
  color: var(--text-color, #2c3e50);
}

.guestbook-info a {
  color: #5d67e8;
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  transition: opacity 0.3s;
}

.guestbook-info a:hover {
  opacity: 0.8;
}

.external-link-icon {
  width: 14px;
  height: 14px;
  vertical-align: middle;
  margin-left: 2px;
  opacity: 0.7;
}

.guestbook-actions {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 20px 0;
  padding: 15px 0;
  border-bottom: 1px solid var(--border-color, #eaecef);
}

.edit-link {
  display: inline-flex;
  align-items: center;
  color: var(--text-color-secondary, #6a737d);
  text-decoration: none;
  font-size: 0.9em;
  transition: color 0.3s;
}

.edit-link:hover {
  color: var(--accent-color, #3eaf7c);
}

.last-update {
  display: inline-flex;
  align-items: center;
  color: var(--text-color-secondary, #6a737d);
  font-size: 0.9em;
}

@media (max-width: 768px) {
  .guestbook-actions {
    justify-content: flex-start;
  }
}

/* 隐藏留言板页面的目录 */
.page-toc-wrapper,
.page-catalog-container,
.catalog-wrapper,
.reco-toc,
.page-catalog,
.catalog-container,
.right-sidebar:not(.guestbook-info):not(.guestbook-actions),
.page-right-sidebar:not(.guestbook-info):not(.guestbook-actions),
.toc-container,
.table-of-contents,
#toc,
.toc,
[class*="toc"],
[class*="catalog"],
[class*="TOC"],
[class*="Catalog"] {
  display: none !important;
  visibility: hidden !important;
  opacity: 0 !important;
}
</style>

<style>
/* 全局样式：隐藏留言板页面的目录（不使用 scoped） */
body:has(.guestbook-info) .page-toc-wrapper,
body:has(.guestbook-info) .page-catalog-container,
body:has(.guestbook-info) .catalog-wrapper,
body:has(.guestbook-info) .reco-toc,
body:has(.guestbook-info) .page-catalog,
body:has(.guestbook-info) .catalog-container,
body:has(.guestbook-info) .right-sidebar,
body:has(.guestbook-info) .page-right-sidebar,
body:has(.guestbook-info) .toc-container,
body:has(.guestbook-info) .table-of-contents,
body:has(.guestbook-info) #toc,
body:has(.guestbook-info) .toc {
  display: none !important;
  visibility: hidden !important;
  opacity: 0 !important;
  height: 0 !important;
  width: 0 !important;
  overflow: hidden !important;
}

/* 留言板页面 Waline 宽度与信息栏对齐 - 强制覆盖所有样式 */
body:has(.guestbook-info) .content__default .waline-wrapper,
body:has(.guestbook-info) .content__default #waline,
body:has(.guestbook-info) .content__default .waline-container,
body:has(.guestbook-info) .theme-reco-content .waline-wrapper,
body:has(.guestbook-info) .theme-reco-content #waline,
body:has(.guestbook-info) .theme-reco-content .waline-container,
body:has(.guestbook-info) .page .waline-wrapper,
body:has(.guestbook-info) .page #waline,
body:has(.guestbook-info) .page .waline-container {
  /* 移除所有负边距和扩展宽度 */
  margin-left: 0 !important;
  margin-right: 0 !important;
  padding-left: 0 !important;
  padding-right: 0 !important;
  /* 继承父容器宽度，与信息栏对齐 */
  max-width: 100% !important;
  width: 100% !important;
  box-sizing: border-box !important;
}

/* 确保 Waline 内部容器也使用正确宽度 */
body:has(.guestbook-info) .waline-wrapper > div,
body:has(.guestbook-info) .waline-wrapper .waline,
body:has(.guestbook-info) #waline > div,
body:has(.guestbook-info) .waline-container > div {
  max-width: 100% !important;
  width: 100% !important;
}

/* 使用最高优先级的选择器，确保覆盖所有其他样式 */
body:has(.guestbook-info) .page .content__default .waline-wrapper,
body:has(.guestbook-info) .page .content__default #waline,
body:has(.guestbook-info) .page .content__default .waline-container,
body:has(.guestbook-info) .page .theme-reco-content .waline-wrapper,
body:has(.guestbook-info) .page .theme-reco-content #waline,
body:has(.guestbook-info) .page .theme-reco-content .waline-container {
  margin-left: 0 !important;
  margin-right: 0 !important;
  padding-left: 0 !important;
  padding-right: 0 !important;
  max-width: 100% !important;
  width: 100% !important;
  box-sizing: border-box !important;
}

/* 直接针对所有可能的 Waline 容器，使用通配符选择器确保覆盖 */
body:has(.guestbook-info) [class*="waline"],
body:has(.guestbook-info) [id*="waline"] {
  margin-left: 0 !important;
  margin-right: 0 !important;
  padding-left: 0 !important;
  padding-right: 0 !important;
  max-width: 100% !important;
  width: 100% !important;
}
</style>

<script>
// 强制设置样式，确保在 Waline 加载后也能生效
// 只在客户端执行，避免 SSR 错误
(function() {
  // 检查是否在浏览器环境
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }
  
  // 等待 DOM 加载完成
  function init() {
    if (typeof document === 'undefined') return;
    
    function forceGuestbookWidth() {
    const isGuestbook = window.location.pathname.includes('/guestbook/') || 
                       window.location.pathname === '/guestbook' ||
                       window.location.pathname.endsWith('/guestbook');
    
    if (!isGuestbook) return;
    
    const selectors = [
      '.page .content__default .waline-wrapper',
      '.page .content__default #waline',
      '.page .content__default .waline-container',
      '.page .theme-reco-content .waline-wrapper',
      '.page .theme-reco-content #waline',
      '.page .theme-reco-content .waline-container',
      '.content__default .waline-wrapper',
      '.content__default #waline',
      '.content__default .waline-container',
      '.waline-wrapper',
      '#waline',
      '.waline-container'
    ];
    
    selectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        const element = el;
        if (element && element.style) {
          element.style.setProperty('margin-left', '0', 'important');
          element.style.setProperty('margin-right', '0', 'important');
          element.style.setProperty('padding-left', '0', 'important');
          element.style.setProperty('padding-right', '0', 'important');
          element.style.setProperty('max-width', '100%', 'important');
          element.style.setProperty('width', '100%', 'important');
        }
      });
    });
    
    // 也查找所有包含 waline 的类名和 ID
    document.querySelectorAll('[class*="waline"], [id*="waline"]').forEach(el => {
      const element = el;
      if (element && element.style) {
        element.style.setProperty('margin-left', '0', 'important');
        element.style.setProperty('margin-right', '0', 'important');
        element.style.setProperty('padding-left', '0', 'important');
        element.style.setProperty('padding-right', '0', 'important');
        element.style.setProperty('max-width', '100%', 'important');
        element.style.setProperty('width', '100%', 'important');
      }
    });
  }
  
    // 立即执行
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', forceGuestbookWidth);
    } else {
      forceGuestbookWidth();
    }
    
    // 定期检查（Waline 可能是异步加载的）
    let count = 0;
    const interval = setInterval(() => {
      forceGuestbookWidth();
      count++;
      if (count >= 20) clearInterval(interval); // 最多检查 4 秒
    }, 200);
    
    // 路由变化时也执行
    if (window.location.pathname.includes('/guestbook')) {
      setTimeout(forceGuestbookWidth, 100);
      setTimeout(forceGuestbookWidth, 500);
      setTimeout(forceGuestbookWidth, 1000);
      setTimeout(forceGuestbookWidth, 2000);
    }
    
    // 获取信息栏的实际宽度，并应用到 Waline 容器
    function syncWidthWithInfoBox() {
      const isGuestbook = window.location.pathname.includes('/guestbook/') || 
                         window.location.pathname === '/guestbook' ||
                         window.location.pathname.endsWith('/guestbook');
      
      if (!isGuestbook) return;
      
      const infoBox = document.querySelector('.guestbook-info');
      if (!infoBox) return;
      
      const infoBoxRect = infoBox.getBoundingClientRect();
      const infoBoxWidth = infoBoxRect.width;
      
      // 获取信息栏的父容器（content__default）
      const contentDefault = document.querySelector('.content__default');
      if (contentDefault) {
        const contentRect = contentDefault.getBoundingClientRect();
        const contentWidth = contentRect.width;
        
        // 将所有 Waline 容器的宽度设置为与内容区域相同
        document.querySelectorAll('.waline-wrapper, #waline, .waline-container').forEach(el => {
          const element = el;
          if (element && element.style) {
            element.style.setProperty('margin-left', '0', 'important');
            element.style.setProperty('margin-right', '0', 'important');
            element.style.setProperty('padding-left', '0', 'important');
            element.style.setProperty('padding-right', '0', 'important');
            element.style.setProperty('max-width', contentWidth + 'px', 'important');
            element.style.setProperty('width', '100%', 'important');
            element.style.setProperty('box-sizing', 'border-box', 'important');
          }
        });
      }
    }
    
    // 执行同步宽度
    setTimeout(syncWidthWithInfoBox, 500);
    setTimeout(syncWidthWithInfoBox, 1000);
    setTimeout(syncWidthWithInfoBox, 2000);
    setTimeout(syncWidthWithInfoBox, 3000);
    
    // 监听窗口大小变化
    window.addEventListener('resize', syncWidthWithInfoBox);
  }
  
  // 只在客户端执行
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init();
    }
  }
})();
</script>

