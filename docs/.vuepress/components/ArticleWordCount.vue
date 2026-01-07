<template>
    <div class="article-word-count" v-if="wordCount > 0">
      <div class="word-count-content">
        <span class="word-count-icon">📊</span>
        <span class="word-count-text">
          <span class="word-count-number">{{ formatNumber(wordCount) }}</span>
          <span class="word-count-label">字</span>
        </span>
        <span class="word-count-divider">·</span>
        <span class="word-count-text">
          <span class="word-count-number">{{ formatNumber(chineseCount) }}</span>
          <span class="word-count-label">中文</span>
        </span>
        <span class="word-count-divider">·</span>
        <span class="word-count-text">
          <span class="word-count-number">{{ formatNumber(englishCount) }}</span>
          <span class="word-count-label">英文</span>
        </span>
        <span class="word-count-divider">·</span>
        <span class="word-count-text">
          <span class="word-count-number">{{ formatNumber(codeLines) }}</span>
          <span class="word-count-label">代码行</span>
        </span>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount } from 'vue'
  
  const wordCount = ref(0)
  const chineseCount = ref(0)
  const englishCount = ref(0)
  const codeLines = ref(0)
  
  // 格式化数字，添加千位分隔符
  const formatNumber = (num: number): string => {
    return num.toLocaleString('zh-CN')
  }
  
  // 统计中文字符数
  const countChinese = (text: string): number => {
    // 匹配中文字符（包括中文标点）
    const chineseRegex = /[\u4e00-\u9fa5\u3000-\u303f\uff00-\uffef]/g
    const matches = text.match(chineseRegex)
    return matches ? matches.length : 0
  }
  
  // 统计英文单词数
  const countEnglish = (text: string): number => {
    // 匹配英文单词（字母、数字、下划线组合）
    const englishRegex = /[a-zA-Z0-9_]+/g
    const matches = text.match(englishRegex)
    return matches ? matches.length : 0
  }
  
  // 统计代码行数
  const countCodeLines = (): number => {
    if (typeof document === 'undefined') return 0
    
    // 查找所有代码块
    const codeBlocks = document.querySelectorAll('pre code, .code-block, .highlight pre')
    let totalLines = 0
    
    codeBlocks.forEach((block) => {
      const text = block.textContent || ''
      // 计算代码块中的行数（按换行符分割）
      const lines = text.split('\n').filter(line => line.trim().length > 0)
      totalLines += lines.length
    })
    
    return totalLines
  }
  
  // 统计文章字数
  const countWords = () => {
    if (typeof document === 'undefined') return
    
    // 查找文章内容区域（尝试多种选择器）
    const contentSelectors = [
      '.page .content__default',
      '.theme-reco-content',
      '.content__default',
      '.page-content',
      'article',
      '.markdown-body',
      '.page'
    ]
    
    let contentElement: HTMLElement | null = null
    
    for (const selector of contentSelectors) {
      const element = document.querySelector(selector) as HTMLElement | null
      if (element) {
        contentElement = element
        break
      }
    }
    
    if (!contentElement) return
    
    // 克隆元素以避免修改原始 DOM
    const clone = contentElement.cloneNode(true) as HTMLElement
    
    // 移除不需要统计的元素
    const excludeSelectors = [
      'nav',
      '.navbar',
      '.sidebar',
      '.toc',
      '.catalog',
      '.page-toc',
      '.page-catalog',
      'header',
      'footer',
      '.article-word-count',
      '.waline-wrapper',
      '#waline',
      '.comment',
      'pre',
      'code',
      '.code-block',
      '.highlight',
      'script',
      'style',
      '.ad',
      '.advertisement'
    ]
    
    excludeSelectors.forEach(selector => {
      const elements = clone.querySelectorAll(selector)
      elements.forEach(el => el.remove())
    })
    
    // 获取纯文本内容
    const text = clone.textContent || clone.innerText || ''
    
    // 移除多余的空白字符
    const cleanText = text.replace(/\s+/g, ' ').trim()
    
    // 统计总字数（包括所有字符）
    wordCount.value = cleanText.length
    
    // 统计中文字符数
    chineseCount.value = countChinese(cleanText)
    
    // 统计英文单词数
    englishCount.value = countEnglish(cleanText)
    
    // 统计代码行数
    codeLines.value = countCodeLines()
  }
  
  // 防抖函数
  const debounce = (func: Function, wait: number) => {
    let timeout: ReturnType<typeof setTimeout> | null = null
    return function executedFunction(...args: any[]) {
      const later = () => {
        timeout = null
        func(...args)
      }
      if (timeout) clearTimeout(timeout)
      timeout = setTimeout(later, wait)
    }
  }
  
  const debouncedCountWords = debounce(countWords, 300)
  
  onMounted(() => {
    // 延迟执行，确保 DOM 已加载
    setTimeout(() => {
      countWords()
    }, 500)
    
    // 监听 DOM 变化（文章内容可能动态加载）
    if (typeof MutationObserver !== 'undefined') {
      const observer = new MutationObserver(() => {
        debouncedCountWords()
      })
      
      observer.observe(document.body, {
        childList: true,
        subtree: true
      })
      
      // 保存 observer 以便清理
      ;(window as any).__wordCountObserver = observer
    }
    
    // 路由变化时重新统计
    if (typeof window !== 'undefined' && (window as any).__VUEPRESS_ROUTER__) {
      const router = (window as any).__VUEPRESS_ROUTER__
      router.afterEach(() => {
        setTimeout(() => {
          countWords()
        }, 500)
      })
    }
  })
  
  onBeforeUnmount(() => {
    // 清理 observer
    if (typeof window !== 'undefined' && (window as any).__wordCountObserver) {
      const observer = (window as any).__wordCountObserver
      observer.disconnect()
      delete (window as any).__wordCountObserver
    }
  })
  </script>
  
  <style scoped>
  .article-word-count {
    margin: 16px 0 24px;
    padding: 12px 16px;
    border-radius: 8px;
    background: linear-gradient(120deg, rgba(91, 143, 249, 0.08), rgba(165, 105, 255, 0.06));
    border: 1px solid rgba(148, 163, 184, 0.2);
    backdrop-filter: blur(8px);
    transition: all 0.3s ease;
  }
  
  .article-word-count:hover {
    border-color: rgba(129, 140, 248, 0.4);
    box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08);
  }
  
  .word-count-content {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
    font-size: 13px;
    color: var(--reco-text-color, #1f2937);
  }
  
  .word-count-icon {
    font-size: 16px;
    line-height: 1;
  }
  
  .word-count-text {
    display: inline-flex;
    align-items: baseline;
    gap: 4px;
  }
  
  .word-count-number {
    font-weight: 600;
    color: var(--reco-text-color, #1f2937);
    font-size: 14px;
  }
  
  .word-count-label {
    font-size: 12px;
    opacity: 0.7;
    color: var(--reco-text-color-secondary, #6b7280);
  }
  
  .word-count-divider {
    opacity: 0.4;
    color: var(--reco-text-color-secondary, #9ca3af);
    font-weight: 300;
  }
  
  /* 暗色模式 */
  [data-theme="dark"] .article-word-count {
    background: linear-gradient(120deg, rgba(91, 143, 249, 0.12), rgba(165, 105, 255, 0.1));
    border-color: rgba(148, 163, 184, 0.3);
  }
  
  [data-theme="dark"] .article-word-count:hover {
    border-color: rgba(129, 140, 248, 0.5);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
  
  [data-theme="dark"] .word-count-content {
    color: var(--reco-text-color, #e5e7eb);
  }
  
  [data-theme="dark"] .word-count-number {
    color: var(--reco-text-color, #e5e7eb);
  }
  
  [data-theme="dark"] .word-count-label {
    color: var(--reco-text-color-secondary, #9ca3af);
  }

  /* 移动端适配 */
  @media (max-width: 768px) {
    .article-word-count {
      margin: 12px 0 20px;
      padding: 10px 12px;
    }

    .word-count-content {
      font-size: 12px;
      gap: 8px;
    }

    .word-count-number {
      font-size: 13px;
    }

    .word-count-label {
      font-size: 11px;
    }

    .word-count-divider {
      margin: 0 2px;
    }
  }
</style>
   