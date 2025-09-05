#!/bin/bash

# QK Synergy Website - Netlify部署腳本
# 此腳本將網站部署到Netlify

echo "🌐 部署到Netlify"
echo "================"

# 檢查是否安裝了Netlify CLI
if ! command -v netlify &> /dev/null; then
    echo "📦 安裝Netlify CLI..."
    npm install -g netlify-cli
fi

# 確保已構建最新版本
echo "🔨 構建最新版本..."
npm run build

# 檢查dist目錄是否存在
if [ ! -d "dist" ]; then
    echo "❌ 錯誤: dist目錄不存在，請先運行 npm run build"
    exit 1
fi

echo "🚀 部署到Netlify..."
echo ""
echo "選擇部署方式:"
echo "1. 拖拽部署 (手動上傳)"
echo "2. Git連接部署 (推薦)"
echo ""

read -p "請選擇 (1 或 2): " choice

case $choice in
    1)
        echo "📁 準備手動部署..."
        echo "請執行以下命令:"
        echo "netlify deploy --dir=dist --prod"
        echo ""
        echo "或者直接拖拽 dist 目錄到 https://app.netlify.com/drop"
        ;;
    2)
        echo "🔗 Git連接部署設置..."
        echo ""
        echo "請按照以下步驟操作:"
        echo "1. 推送代碼到GitHub:"
        echo "   git remote add origin https://github.com/YOUR_USERNAME/qk-synergy-website.git"
        echo "   git push -u origin main"
        echo ""
        echo "2. 在Netlify控制台 (https://app.netlify.com) 中:"
        echo "   - 點擊 'New site from Git'"
        echo "   - 選擇GitHub並授權"
        echo "   - 選擇您的倉庫"
        echo "   - 構建設置:"
        echo "     Build command: npm run build"
        echo "     Publish directory: dist"
        echo ""
        echo "3. Netlify將自動部署並提供網址"
        ;;
    *)
        echo "❌ 無效選擇"
        exit 1
        ;;
esac

echo ""
echo "✅ Netlify部署腳本執行完成！"
echo "📝 部署後您將獲得一個 .netlify.app 網址"
echo "🔧 您可以在Netlify控制台中設置自定義域名"

