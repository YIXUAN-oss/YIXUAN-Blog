# 个人信息卡片测试页面

点击下方按钮测试：

<button onclick="testProfileCard()">测试卡片功能</button>

<script>
function testProfileCard() {
  console.log('=== 开始测试 ===');
  
  const trigger = document.getElementById('profileTrigger');
  const card = document.getElementById('profileCard');
  
  console.log('Trigger 元素:', trigger);
  console.log('Card 元素:', card);
  
  if (!trigger) {
    alert('❌ 找不到 profileTrigger 元素');
    return;
  }
  
  if (!card) {
    alert('❌ 找不到 profileCard 元素');
    return;
  }
  
  // 手动触发点击
  trigger.click();
  
  setTimeout(() => {
    if (card.classList.contains('active')) {
      alert('✅ 卡片已打开！');
    } else {
      alert('❌ 卡片没有打开，请检查 CSS 样式');
    }
  }, 100);
}
</script>

## 调试信息

打开浏览器控制台（F12）查看：

1. 是否有 "Profile card found, initializing..." 日志
2. 点击头像时是否有 "Toggle card clicked" 日志
3. 是否有任何错误信息

## 手动测试

在控制台中运行：

```javascript
// 检查元素是否存在
console.log('Trigger:', document.getElementById('profileTrigger'));
console.log('Card:', document.getElementById('profileCard'));

// 手动添加 active 类测试样式
document.getElementById('profileCard')?.classList.add('active');
```
