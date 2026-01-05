const fs = require('fs');
const path = require('path');

// 递归查找所有 .md 文件
function findMarkdownFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // 跳过 node_modules 和 .vuepress 目录
      if (file !== 'node_modules' && file !== '.vuepress' && !file.startsWith('.')) {
        findMarkdownFiles(filePath, fileList);
      }
    } else if (file.endsWith('.md')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// 替换图片链接为 jsDelivr CDN
function replaceImageLinks(content) {
  let replaced = false;
  let newContent = content;
  
  // 替换 GitCode CDN 链接为 jsDelivr CDN
  newContent = newContent.replace(
    /https:\/\/gitcode\.net\/YIXUAN-oss\/yixuan-blog-image-hosting\/-\/raw\/master\/([^")\s]+)/g,
    (match, imagePath) => {
      replaced = true;
      // jsDelivr CDN 格式: https://cdn.jsdelivr.net/gh/用户名/仓库名@分支/路径
      return `https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/${imagePath}`;
    }
  );
  
  // 同时处理可能残留的 Gitee 链接
  newContent = newContent.replace(
    /https:\/\/gitee\.com\/YIXUAN-oss\/yixuan-blog-image-hosting\/raw\/master\/([^")\s]+)/g,
    (match, imagePath) => {
      replaced = true;
      // jsDelivr CDN 格式
      return `https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/${imagePath}`;
    }
  );
  
  return { content: newContent, replaced };
}

// 主函数
function main() {
  const docsDir = path.join(__dirname, 'docs');
  
  if (!fs.existsSync(docsDir)) {
    console.error('错误: docs 目录不存在！');
    process.exit(1);
  }
  
  console.log('正在查找 Markdown 文件...');
  const markdownFiles = findMarkdownFiles(docsDir);
  console.log(`找到 ${markdownFiles.length} 个 Markdown 文件\n`);
  
  let totalReplaced = 0;
  let filesModified = 0;
  
  console.log('使用 jsDelivr CDN 替换图片链接\n');
  console.log('注意: jsDelivr 需要图片仓库在 GitHub');
  console.log('GitHub 仓库地址: https://github.com/YIXUAN-oss/yixuan-blog-image-hosting\n');
  
  markdownFiles.forEach(file => {
    try {
      const content = fs.readFileSync(file, 'utf8');
      const { content: newContent, replaced } = replaceImageLinks(content);
      
      if (replaced) {
        fs.writeFileSync(file, newContent, 'utf8');
        filesModified++;
        
        // 统计替换数量（GitCode 和 Gitee 链接）
        const gitcodeMatches = content.match(/https:\/\/gitcode\.net\/YIXUAN-oss\/yixuan-blog-image-hosting\/-\/raw\/master\/[^")\s]+/g);
        const giteeMatches = content.match(/https:\/\/gitee\.com\/YIXUAN-oss\/yixuan-blog-image-hosting\/raw\/master\/[^")\s]+/g);
        const count = (gitcodeMatches ? gitcodeMatches.length : 0) + (giteeMatches ? giteeMatches.length : 0);
        totalReplaced += count;
        
        console.log(`✓ 已处理: ${path.relative(__dirname, file)} (替换 ${count} 个链接)`);
      }
    } catch (error) {
      console.error(`✗ 处理失败: ${file}`, error.message);
    }
  });
  
  console.log(`\n完成！共处理 ${filesModified} 个文件，替换 ${totalReplaced} 个图片链接`);
  console.log('\n✓ 已使用 jsDelivr CDN 替换所有图片链接');
  console.log('\n重要提示:');
  console.log('1. jsDelivr 只支持 GitHub 仓库，请确保仓库已同步到 GitHub');
  console.log('2. GitHub 仓库地址: https://github.com/YIXUAN-oss/yixuan-blog-image-hosting');
  console.log('3. 仓库必须是公开的（Public）');
  console.log('4. 如果图片无法加载，请检查 GitHub 仓库是否存在且为公开状态');
}

main();

