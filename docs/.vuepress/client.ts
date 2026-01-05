import { defineClientConfig } from '@vuepress/client'
import IconHome from './components/IconHome.vue'
import IconBook from './components/IconBook.vue'
import IconArticle from './components/IconArticle.vue'
import IconGift from './components/IconGift.vue'
import IconPen from './components/IconPen.vue'
import IconMessageBoard from './components/IconMessageBoard.vue'
import IconUser from './components/IconUser.vue'
import FriendshipLinks from './components/FriendshipLinks.vue'

export default defineClientConfig({
    enhance({ app, router, siteData }) {
        // 注册图标组件
        app.component('IconHome', IconHome)
        app.component('IconBook', IconBook)
        app.component('IconArticle', IconArticle)
        app.component('IconGift', IconGift)
        app.component('IconPen', IconPen)
        app.component('IconMessageBoard', IconMessageBoard)
        app.component('IconUser', IconUser)
        // 注册友情链接组件
        app.component('FriendshipLinks', FriendshipLinks)
        // 添加搜索框快捷键提示
        if (typeof window !== 'undefined') {
            const addSearchShortcut = () => {
                const searchBox = document.querySelector('.navbar-search input, .search-box input, input[type="search"]');
                if (searchBox && !document.querySelector('.search-shortcut-hint')) {
                    const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
                    const shortcutKey = isMac ? '⌘ K' : 'Ctrl K';
                    
                    const hint = document.createElement('div');
                    hint.className = 'search-shortcut-hint';
                    hint.textContent = shortcutKey;
                    hint.style.cssText = `
                        position: absolute;
                        right: 10px;
                        top: 50%;
                        transform: translateY(-50%);
                        background: rgba(0, 0, 0, 0.05);
                        color: #666;
                        padding: 2px 6px;
                        border-radius: 3px;
                        font-size: 11px;
                        font-weight: 600;
                        border: 1px solid rgba(0, 0, 0, 0.1);
                        pointer-events: none;
                        font-family: 'Segoe UI', system-ui, sans-serif;
                        z-index: 10;
                        line-height: 1.3;
                        display: inline-flex;
                        align-items: center;
                        height: 20px;
                    `;
                    
                    const searchContainer = searchBox.parentElement;
                    if (searchContainer) {
                        searchContainer.style.position = 'relative';
                        searchContainer.appendChild(hint);
                        
                        // 调整输入框padding
                        (searchBox as HTMLInputElement).style.paddingRight = '65px';
                        
                        // 暗黑模式适配
                        const updateTheme = () => {
                            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
                            if (isDark) {
                                hint.style.background = 'rgba(255, 255, 255, 0.1)';
                                hint.style.color = 'rgba(255, 255, 255, 0.6)';
                                hint.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                            } else {
                                hint.style.background = 'rgba(0, 0, 0, 0.05)';
                                hint.style.color = '#666';
                                hint.style.borderColor = 'rgba(0, 0, 0, 0.1)';
                            }
                        };
                        
                        updateTheme();
                        
                        // 监听主题变化
                        const observer = new MutationObserver(updateTheme);
                        observer.observe(document.documentElement, {
                            attributes: true,
                            attributeFilter: ['data-theme']
                        });
                    }
                }
            };
            
            // 延迟执行，确保DOM加载完成
            setTimeout(addSearchShortcut, 1000);
            setTimeout(addSearchShortcut, 2000);
            
            // 添加搜索快捷键功能
            document.addEventListener('keydown', (e) => {
                if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                    e.preventDefault();
                    const searchInput = document.querySelector<HTMLInputElement>('.navbar-search input, .search-box input, input[type="search"]');
                    if (searchInput) {
                        searchInput.focus();
                    }
                }
            });
        }
        
        // 优化图片懒加载
        if (typeof window !== 'undefined') {
            const initImageLazyLoad = () => {
                // 为所有图片添加 loading="lazy" 属性（如果还没有）
                const allImages = document.querySelectorAll('img:not([loading])');
                allImages.forEach((img) => {
                    const imageElement = img as HTMLImageElement;
                    // 只对非关键图片启用懒加载（保留关键图片如 logo、avatar 立即加载）
                    if (!imageElement.src.includes('logo') && !imageElement.src.includes('avatar') && !imageElement.src.includes('favicon')) {
                        imageElement.loading = 'lazy';
                        // 保存原始 src 到 data-src
                        if (!imageElement.dataset.src) {
                            imageElement.dataset.src = imageElement.src;
                        }
                    }
                });

                // 使用 IntersectionObserver 实现懒加载
                if ('IntersectionObserver' in window) {
                    const imageObserver = new IntersectionObserver(
                        (entries) => {
                            entries.forEach((entry) => {
                                if (entry.isIntersecting) {
                                    const img = entry.target as HTMLImageElement;
                                    const dataSrc = img.dataset.src;
                                    
                                    // 如果图片有 data-src，说明需要懒加载
                                    if (dataSrc && img.src !== dataSrc) {
                                        // 创建新的 Image 对象预加载
                                        const imageLoader = new Image();
                                        imageLoader.onload = () => {
                                            img.src = dataSrc;
                                            img.classList.add('loaded');
                                        };
                                        imageLoader.onerror = () => {
                                            // 加载失败时也显示原图
                                            img.src = dataSrc;
                                            img.classList.add('loaded');
                                        };
                                        imageLoader.src = dataSrc;
                                    } else {
                                        // 没有 data-src，直接标记为已加载
                                        img.classList.add('loaded');
                                    }
                                    
                                    imageObserver.unobserve(img);
                                }
                            });
                        },
                        {
                            rootMargin: '50px', // 提前 50px 开始加载
                            threshold: 0.01
                        }
                    );

                    // 观察所有懒加载图片
                    document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
                        imageObserver.observe(img);
                    });
                } else {
                    // 不支持 IntersectionObserver 的浏览器，直接加载所有图片
                    document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
                        const imageElement = img as HTMLImageElement;
                        if (imageElement.dataset.src) {
                            imageElement.src = imageElement.dataset.src;
                        }
                        imageElement.classList.add('loaded');
                    });
                }
            };

            // DOMContentLoaded 时立即初始化
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', initImageLazyLoad);
            } else {
                initImageLazyLoad();
            }

            // 路由变化后重新初始化
            router.afterEach(() => {
                setTimeout(initImageLazyLoad, 100);
            });
            
            // 页面可见性变化时重新检查（用户切换标签页回来时）
            document.addEventListener('visibilitychange', () => {
                if (!document.hidden) {
                    setTimeout(initImageLazyLoad, 100);
                }
            });
            
            // 控制评论显示：只在留言板页面显示评论
            const toggleComments = () => {
                const currentPath = window.location.pathname;
                // 判断是否为留言板页面：路径包含 /guestbook/
                const isGuestbook = currentPath.includes('/guestbook/') || 
                                   currentPath === '/guestbook' ||
                                   currentPath.endsWith('/guestbook');
                
                // 查找评论容器（包括所有可能的 Waline 容器）
                const commentContainers = document.querySelectorAll(
                    '#waline, .waline-wrapper, .waline-container, [id*="waline"], [class*="waline-wrapper"], [class*="waline-container"]'
                );
                
                commentContainers.forEach((container) => {
                    const element = container as HTMLElement;
                    if (isGuestbook) {
                        element.style.display = '';
                        element.style.visibility = 'visible';
                    } else {
                        element.style.display = 'none';
                        element.style.visibility = 'hidden';
                    }
                });
                
                // 也检查父容器
                const pageContainers = document.querySelectorAll('.page, .theme-reco-content, .content__default');
                pageContainers.forEach((container) => {
                    const walineInContainer = container.querySelectorAll(
                        '#waline, .waline-wrapper, .waline-container'
                    );
                    walineInContainer.forEach((waline) => {
                        const element = waline as HTMLElement;
                        if (isGuestbook) {
                            element.style.display = '';
                            element.style.visibility = 'visible';
                        } else {
                            element.style.display = 'none';
                            element.style.visibility = 'hidden';
                        }
                    });
                });
            };
            
            // 隐藏留言板页面的目录
            const hideToc = () => {
                try {
                    const currentPath = window.location.pathname;
                    // 判断是否为留言板页面：路径包含 /guestbook/
                    const isGuestbook = currentPath.includes('/guestbook/') || 
                                       currentPath === '/guestbook' ||
                                       currentPath.endsWith('/guestbook');
                    
                    if (isGuestbook) {
                        // 查找所有可能的目录容器（使用更精确的选择器）
                        const tocSelectors = [
                            '.page-toc-wrapper',
                            '.page-catalog-container',
                            '.catalog-wrapper',
                            '.reco-toc',
                            '.page-catalog',
                            '.catalog-container',
                            '.right-sidebar',
                            '.page-right-sidebar',
                            '.toc-container',
                            '.table-of-contents',
                            '#toc'
                        ];
                        
                        tocSelectors.forEach(selector => {
                            try {
                                const elements = document.querySelectorAll(selector);
                                elements.forEach((element) => {
                                    if (element && element.parentElement) {
                                        const el = element as HTMLElement;
                                        el.style.display = 'none';
                                        el.style.visibility = 'hidden';
                                    }
                                });
                            } catch (e) {
                                // 忽略选择器错误
                            }
                        });
                    }
                } catch (e) {
                    // 忽略错误，避免影响页面渲染
                    console.warn('hideToc error:', e);
                }
            };

            // 调整留言板页面评论区域宽度，使其与信息栏对齐
            const adjustGuestbookWidth = () => {
                try {
                    const currentPath = window.location.pathname;
                    const isGuestbook = currentPath.includes('/guestbook/') || 
                                       currentPath === '/guestbook' ||
                                       currentPath.endsWith('/guestbook');
                    
                    if (isGuestbook) {
                        // 查找所有 Waline 容器及其父容器
                        const walineSelectors = [
                            '.waline-wrapper',
                            '#waline',
                            '.waline-container',
                            '.page .waline-wrapper',
                            '.content__default .waline-wrapper',
                            '.theme-reco-content .waline-wrapper'
                        ];
                        
                        walineSelectors.forEach(selector => {
                            try {
                                const elements = document.querySelectorAll(selector);
                                elements.forEach((element) => {
                                    const el = element as HTMLElement;
                                    // 使用 !important 通过 setProperty 设置
                                    el.style.setProperty('margin-left', '0', 'important');
                                    el.style.setProperty('margin-right', '0', 'important');
                                    el.style.setProperty('padding-left', '0', 'important');
                                    el.style.setProperty('padding-right', '0', 'important');
                                    el.style.setProperty('max-width', '100%', 'important');
                                    el.style.setProperty('width', '100%', 'important');
                                    el.style.setProperty('box-sizing', 'border-box', 'important');
                                    
                                    // 也处理内部容器
                                    const innerContainers = el.querySelectorAll('.waline, .waline-wrapper > div, .waline-container > div');
                                    innerContainers.forEach((innerEl) => {
                                        const inner = innerEl as HTMLElement;
                                        inner.style.setProperty('max-width', '100%', 'important');
                                        inner.style.setProperty('width', '100%', 'important');
                                    });
                                });
                            } catch (e) {
                                // 忽略选择器错误
                            }
                        });
                    }
                } catch (e) {
                    console.warn('adjustGuestbookWidth error:', e);
                }
            };
            
            // 初始执行（延迟以确保 DOM 加载完成）
            setTimeout(toggleComments, 500);
            setTimeout(toggleComments, 1000);
            setTimeout(toggleComments, 2000);
            setTimeout(hideToc, 500);
            setTimeout(adjustGuestbookWidth, 500);
            setTimeout(adjustGuestbookWidth, 1000);
            setTimeout(adjustGuestbookWidth, 2000);
            
            // 路由变化后重新执行
            router.afterEach(() => {
                setTimeout(toggleComments, 100);
                setTimeout(toggleComments, 500);
                setTimeout(hideToc, 500);
                setTimeout(adjustGuestbookWidth, 500);
                setTimeout(adjustGuestbookWidth, 1000);
            });

            // 监听 DOM 变化，确保动态加载的内容也能应用样式
            if (typeof MutationObserver !== 'undefined') {
                const observer = new MutationObserver(() => {
                    const currentPath = window.location.pathname;
                    const isGuestbook = currentPath.includes('/guestbook/') || 
                                       currentPath === '/guestbook' ||
                                       currentPath.endsWith('/guestbook');
                    if (isGuestbook) {
                        adjustGuestbookWidth();
                    }
                });
                
                observer.observe(document.body, {
                    childList: true,
                    subtree: true
                });
            }

            // 定期检查并应用样式（确保 Waline 加载后也能应用）
            const checkAndAdjust = () => {
                const currentPath = window.location.pathname;
                const isGuestbook = currentPath.includes('/guestbook/') || 
                                   currentPath === '/guestbook' ||
                                   currentPath.endsWith('/guestbook');
                if (isGuestbook) {
                    const hasWaline = document.querySelector('.waline-wrapper, #waline, .waline-container');
                    if (hasWaline) {
                        adjustGuestbookWidth();
                        return true; // 找到了 Waline，返回 true
                    }
                }
                return false; // 没找到或不是留言板页面
            };

            // 每 200ms 检查一次，最多检查 30 次（6秒），确保 Waline 完全加载后也能应用
            let checkCount = 0;
            const checkInterval = setInterval(() => {
                const found = checkAndAdjust();
                checkCount++;
                // 如果找到了 Waline 且已经应用了样式，继续检查几次确保稳定
                if (found && checkCount > 5) {
                    // 再检查几次确保样式稳定应用
                    if (checkCount >= 15) {
                        clearInterval(checkInterval);
                    }
                } else if (checkCount >= 30) {
                    clearInterval(checkInterval);
                }
            }, 200);
            
        }
    },

    setup() {
        // 添加阅读进度条
        if (typeof window !== 'undefined') {
            const progressBar = document.createElement('div');
            progressBar.className = 'reading-progress';
            progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(to right, #a78bfa, #7c3aed, #6d28d9);
        z-index: 9999;
        transition: width 0.2s ease;
        box-shadow: 0 0 10px rgba(124, 58, 237, 0.5);
      `;
            document.body.appendChild(progressBar);

            const updateProgress = () => {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                const progress = (scrollTop / scrollHeight) * 100;
                progressBar.style.width = progress + '%';
            };

            window.addEventListener('scroll', updateProgress);
            updateProgress();

            // 个人信息卡片交互
            const initProfileCard = () => {
                const trigger = document.getElementById('profileTrigger');
                const card = document.getElementById('profileCard');
                const closeBtn = document.getElementById('closeBtn');

                if (!trigger || !card) {
                    // 如果元素还没有加载，稍后再试
                    return;
                }

                console.log('Profile card found, initializing...');

                // 移除可能存在的旧事件监听器（通过克隆节点）
                const newTrigger = trigger.cloneNode(true) as HTMLElement;
                trigger.parentNode?.replaceChild(newTrigger, trigger);

                // 切换卡片显示状态
                const toggleCard = (e: Event) => {
                    e.stopPropagation();
                    console.log('Toggle card clicked');

                    if (card.classList.contains('active')) {
                        card.classList.remove('active');
                        newTrigger.classList.remove('active');
                    } else {
                        card.classList.add('active');
                        newTrigger.classList.add('active');
                    }
                };

                // 点击触发按钮
                newTrigger.addEventListener('click', toggleCard);

                // 点击关闭按钮
                if (closeBtn) {
                    closeBtn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        card.classList.remove('active');
                        newTrigger.classList.remove('active');
                    });
                }

                // 点击卡片外部关闭
                const closeOnClickOutside = (e: MouseEvent) => {
                    if (card.classList.contains('active') &&
                        !card.contains(e.target as Node) &&
                        !newTrigger.contains(e.target as Node)) {
                        card.classList.remove('active');
                        newTrigger.classList.remove('active');
                    }
                };
                document.addEventListener('click', closeOnClickOutside);

                // 阻止卡片内部点击事件冒泡（但不阻止链接点击）
                card.addEventListener('click', (e) => {
                    // 允许链接正常工作
                    if ((e.target as HTMLElement).tagName === 'A' ||
                        (e.target as HTMLElement).closest('a')) {
                        return;
                    }
                    e.stopPropagation();
                });
            };

            // 多次尝试初始化以确保成功
            setTimeout(initProfileCard, 500);
            setTimeout(initProfileCard, 1000);
            setTimeout(initProfileCard, 2000);
            
            // 监听路由变化（通过 VuePress 路由）
            if (typeof window !== 'undefined' && (window as any).__VUEPRESS_ROUTER__) {
                (window as any).__VUEPRESS_ROUTER__.afterEach(() => {
                    setTimeout(initProfileCard, 1000);
                    
                    // 路由变化后重新添加搜索快捷键
                    setTimeout(() => {
                        const addSearchShortcut = () => {
                            const searchBox = document.querySelector('.navbar-search input, .search-box input, input[type="search"]');
                            if (searchBox && !document.querySelector('.search-shortcut-hint')) {
                                const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
                                const shortcutKey = isMac ? '⌘ K' : 'Ctrl K';
                                
                                const hint = document.createElement('div');
                                hint.className = 'search-shortcut-hint';
                                hint.textContent = shortcutKey;
                                hint.style.cssText = `
                                    position: absolute;
                                    right: 10px;
                                    top: 50%;
                                    transform: translateY(-50%);
                                    background: rgba(0, 0, 0, 0.05);
                                    color: #666;
                                    padding: 2px 6px;
                                    border-radius: 3px;
                                    font-size: 11px;
                                    font-weight: 600;
                                    border: 1px solid rgba(0, 0, 0, 0.1);
                                    pointer-events: none;
                                    font-family: 'Segoe UI', system-ui, sans-serif;
                                    z-index: 10;
                                    line-height: 1.3;
                                    display: inline-flex;
                                    align-items: center;
                                    height: 20px;
                                `;
                                
                                const searchContainer = searchBox.parentElement;
                                if (searchContainer) {
                                    searchContainer.style.position = 'relative';
                                    searchContainer.appendChild(hint);
                                    (searchBox as HTMLInputElement).style.paddingRight = '65px';
                                    
                                    const updateTheme = () => {
                                        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
                                        if (isDark) {
                                            hint.style.background = 'rgba(255, 255, 255, 0.1)';
                                            hint.style.color = 'rgba(255, 255, 255, 0.6)';
                                            hint.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                                        } else {
                                            hint.style.background = 'rgba(0, 0, 0, 0.05)';
                                            hint.style.color = '#666';
                                            hint.style.borderColor = 'rgba(0, 0, 0, 0.1)';
                                        }
                                    };
                                    
                                    updateTheme();
                                }
                            }
                        };
                        addSearchShortcut();
                    }, 500);
                });
            }
        }
    },

    rootComponents: [],
})


