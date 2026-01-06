#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
教程中心图片处理脚本
功能：
1. 给所有图片添加圆角样式（border-radius: 8px）
2. 在相邻图片之间添加分割线（---）
3. 将Markdown格式的图片转换为HTML格式

使用方法：
1. 处理单个文件：python process_tutorial_images.py <文件路径>
2. 处理整个目录：python process_tutorial_images.py <目录路径>
3. 处理tutorials目录下的所有.md文件：python process_tutorial_images.py
"""

import re
import os
import sys
from pathlib import Path


def process_markdown_file(file_path):
    """处理单个Markdown文件，添加图片圆角和分割线"""
    print(f"正在处理: {file_path}")
    
    try:
        # 读取文件
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # 1. 将markdown格式的图片转换为HTML格式并添加圆角
        # 匹配格式：![alt](url)
        pattern_md = r'!\[([^\]]+)\]\(([^)]+)\)'
        def replace_md_img(match):
            alt = match.group(1)
            url = match.group(2)
            return f'<img src="{url}" alt="{alt}" style="border-radius: 8px;" />'
        content = re.sub(pattern_md, replace_md_img, content)
        
        # 2. 给所有HTML图片添加圆角样式（如果还没有）
        # 处理有空格的情况：style="zoom: 50%;"
        content = re.sub(r'style="zoom: ([^;]+);"', r'style="zoom: \1; border-radius: 8px;"', content)
        # 处理没有空格的情况：style="zoom:50%;"
        content = re.sub(r'style="zoom:([^;]+);"', r'style="zoom:\1; border-radius: 8px;"', content)
        
        # 处理没有style属性的img标签
        def add_style_to_img(match):
            img_tag = match.group(0)
            if 'style=' not in img_tag:
                # 在>之前添加style属性
                return img_tag[:-1] + ' style="border-radius: 8px;">'
            elif 'border-radius' not in img_tag:
                # 如果已有style但没有border-radius，添加它
                return re.sub(r'(style="[^"]*)"', r'\1; border-radius: 8px;"', img_tag)
            return img_tag
        content = re.sub(r'<img[^>]+>', add_style_to_img, content)
        
        # 3. 在相邻图片之间添加分割线
        # 匹配模式：图片标签 -> 空白行 -> 图片标签
        pattern = r'(<img[^>]+>)\s*\n\s*(<img[^>]+>)'
        replacement = r'\1\n\n---\n\n\2'
        content = re.sub(pattern, replacement, content)
        
        # 只有当内容发生变化时才写入文件
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"[OK] 已更新: {file_path}")
            return True
        else:
            print(f"  (无需更改: {file_path})")
            return False
    except Exception as e:
        print(f"[ERROR] 处理文件 {file_path} 时出错: {e}")
        return False


def main():
    """主函数"""
    if len(sys.argv) > 1:
        # 如果提供了路径参数
        target_path = Path(sys.argv[1])
        
        if target_path.is_file():
            # 处理单个文件
            if target_path.suffix == '.md':
                process_markdown_file(target_path)
            else:
                print(f"错误: {target_path} 不是Markdown文件(.md)")
        elif target_path.is_dir():
            # 处理目录下的所有.md文件（排除node_modules）
            md_files = []
            for md_file in target_path.rglob('*.md'):
                if 'node_modules' not in str(md_file):
                    md_files.append(md_file)
            
            print(f"找到 {len(md_files)} 个Markdown文件\n")
            
            updated_count = 0
            for md_file in md_files:
                if process_markdown_file(md_file):
                    updated_count += 1
                print()
            
            print(f"处理完成！共更新了 {updated_count} 个文件。")
        else:
            print(f"错误: {target_path} 不存在")
    else:
        # 如果没有提供参数，默认处理tutorials目录下的所有.md文件（排除node_modules）
        tutorials_dir = Path('docs/tutorials')
        if not tutorials_dir.exists():
            print("未找到docs/tutorials目录")
            print("\n使用方法：")
            print("  处理单个文件: python process_tutorial_images.py <文件路径>")
            print("  处理整个目录: python process_tutorial_images.py <目录路径>")
            return
        
        md_files = []
        for md_file in tutorials_dir.rglob('*.md'):
            # 排除node_modules目录
            if 'node_modules' not in str(md_file):
                md_files.append(md_file)
        
        if not md_files:
            print("tutorials目录下没有找到Markdown文件")
            print("\n使用方法：")
            print("  处理单个文件: python process_tutorial_images.py <文件路径>")
            print("  处理整个目录: python process_tutorial_images.py <目录路径>")
            return
        
        print(f"找到 {len(md_files)} 个Markdown文件\n")
        
        updated_count = 0
        for md_file in md_files:
            if process_markdown_file(md_file):
                updated_count += 1
        
        print(f"\n处理完成！共更新了 {updated_count} 个文件。")


if __name__ == '__main__':
    main()


























