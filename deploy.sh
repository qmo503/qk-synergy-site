#!/bin/bash

# QK Synergy Website - 一鍵部署腳本
# 此腳本提供交互式部署選項

clear
echo "🚀 QK Synergy Website - 一鍵部署"
echo "================================="
echo ""
echo "歡迎使用QK Synergy官網部署工具！"
echo ""

# 檢查是否在正確的目錄
if [ ! -f "package.json" ]; then
    echo "❌ 錯誤: 請在項目根目錄中運行此腳本"
    exit 1
fi

# 檢查Node.js和npm
if ! command -v node &> /dev/null; then
    echo "❌ 錯誤: 請先安裝Node.js"
    exit 1
fi

if ! command -v npm &> /dev/null; then
    echo "❌ 錯誤: 請先安裝npm"
    exit 1
fi

echo "✅ 環境檢查通過"
echo ""

# 顯示部署選項
echo "請選擇部署平台:"
echo ""
echo "1. 🌐 Netlify     - 最簡單，支援表單處理"
echo "2. ⚡ Vercel      - 最快速，全球CDN"
echo "3. 🐙 GitHub Pages - 免費，與GitHub集成"
echo "4. 🔧 初始化Git   - 準備Git倉庫"
echo "5. 📖 查看指南    - 打開部署指南"
echo "6. ❌ 退出"
echo ""

read -p "請輸入選項 (1-6): " choice

case $choice in
    1)
        echo ""
        echo "🌐 準備部署到Netlify..."
        ./deploy-netlify.sh
        ;;
    2)
        echo ""
        echo "⚡ 準備部署到Vercel..."
        ./deploy-vercel.sh
        ;;
    3)
        echo ""
        echo "🐙 準備部署到GitHub Pages..."
        ./deploy-github-pages.sh
        ;;
    4)
        echo ""
        echo "🔧 初始化Git倉庫..."
        ./deploy-setup.sh
        ;;
    5)
        echo ""
        echo "📖 打開部署指南..."
        if command -v code &> /dev/null; then
            code DEPLOYMENT.md
        elif command -v nano &> /dev/null; then
            nano DEPLOYMENT.md
        else
            cat DEPLOYMENT.md
        fi
        ;;
    6)
        echo ""
        echo "👋 再見！"
        exit 0
        ;;
    *)
        echo ""
        echo "❌ 無效選項，請重新運行腳本"
        exit 1
        ;;
esac

echo ""
echo "🎉 部署流程完成！"
echo ""
echo "📝 有用的命令:"
echo "npm run dev      # 本地開發"
echo "npm run build    # 構建生產版本"
echo "./deploy.sh      # 重新運行此腳本"
echo ""
echo "📚 更多信息請查看:"
echo "- README.md      # 項目說明"
echo "- DEPLOYMENT.md  # 詳細部署指南"

