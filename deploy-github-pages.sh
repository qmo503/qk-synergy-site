#!/bin/bash

# QK Synergy Website - GitHub Pages部署腳本
# 此腳本將網站部署到GitHub Pages

echo "🐙 部署到GitHub Pages"
echo "===================="

# 檢查是否已經設置了遠程倉庫
if ! git remote get-url origin &> /dev/null; then
    echo "❌ 錯誤: 請先設置GitHub遠程倉庫"
    echo "運行: git remote add origin https://github.com/YOUR_USERNAME/qk-synergy-website.git"
    exit 1
fi

# 確保已構建最新版本
echo "🔨 構建最新版本..."
npm run build

# 檢查dist目錄是否存在
if [ ! -d "dist" ]; then
    echo "❌ 錯誤: dist目錄不存在，請先運行 npm run build"
    exit 1
fi

echo "📝 提交當前更改..."
git add .
git commit -m "Update: Prepare for GitHub Pages deployment" || echo "沒有新的更改需要提交"

echo "🚀 推送到main分支..."
git push origin main

echo "📁 準備gh-pages分支..."

# 檢查是否存在gh-pages分支
if git show-ref --verify --quiet refs/heads/gh-pages; then
    echo "切換到gh-pages分支..."
    git checkout gh-pages
else
    echo "創建gh-pages分支..."
    git checkout --orphan gh-pages
fi

# 清理gh-pages分支
echo "🧹 清理gh-pages分支..."
git rm -rf . 2>/dev/null || true

# 從main分支複製dist內容
echo "📋 複製構建文件..."
git checkout main -- dist/
mv dist/* .
rm -rf dist/

# 創建CNAME文件 (如果有自定義域名)
read -p "是否有自定義域名？(y/n): " has_domain
if [ "$has_domain" = "y" ] || [ "$has_domain" = "Y" ]; then
    read -p "請輸入您的域名 (例如: www.qksynergy.com): " domain
    echo "$domain" > CNAME
    echo "✅ 已創建CNAME文件: $domain"
fi

# 提交到gh-pages分支
echo "📝 提交到gh-pages分支..."
git add .
git commit -m "Deploy: QK Synergy website to GitHub Pages"

echo "🚀 推送gh-pages分支..."
git push origin gh-pages --force

echo "🔄 切換回main分支..."
git checkout main

echo ""
echo "✅ GitHub Pages部署完成！"
echo ""
echo "📝 下一步:"
echo "1. 前往您的GitHub倉庫設置頁面"
echo "2. 滾動到 'Pages' 部分"
echo "3. 在 'Source' 下選擇 'Deploy from a branch'"
echo "4. 選擇 'gh-pages' 分支和 '/ (root)' 文件夾"
echo "5. 點擊 'Save'"
echo ""
echo "🌐 您的網站將在以下網址可用:"
echo "https://YOUR_USERNAME.github.io/qk-synergy-website"
echo ""
echo "⏰ 部署可能需要幾分鐘時間才能生效"

