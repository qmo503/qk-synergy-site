#!/bin/bash

# QK Synergy Website - Vercel部署腳本
# 此腳本將網站部署到Vercel

echo "⚡ 部署到Vercel"
echo "==============="

# 檢查是否安裝了Vercel CLI
if ! command -v vercel &> /dev/null; then
    echo "📦 安裝Vercel CLI..."
    npm install -g vercel
fi

# 確保已構建最新版本
echo "🔨 構建最新版本..."
npm run build

# 檢查dist目錄是否存在
if [ ! -d "dist" ]; then
    echo "❌ 錯誤: dist目錄不存在，請先運行 npm run build"
    exit 1
fi

echo "🚀 開始部署到Vercel..."
echo ""

# 登錄Vercel (如果尚未登錄)
echo "🔐 檢查Vercel登錄狀態..."
if ! vercel whoami &> /dev/null; then
    echo "請先登錄Vercel:"
    vercel login
fi

echo ""
echo "選擇部署方式:"
echo "1. 快速部署 (使用默認設置)"
echo "2. 配置部署 (自定義設置)"
echo ""

read -p "請選擇 (1 或 2): " choice

case $choice in
    1)
        echo "🚀 快速部署中..."
        cd dist
        vercel --prod
        cd ..
        ;;
    2)
        echo "⚙️  配置部署..."
        echo "請回答以下問題來配置您的項目:"
        vercel
        echo ""
        echo "配置完成後，運行以下命令進行生產部署:"
        echo "vercel --prod"
        ;;
    *)
        echo "❌ 無效選擇"
        exit 1
        ;;
esac

echo ""
echo "✅ Vercel部署完成！"
echo ""
echo "📝 有用的Vercel命令:"
echo "vercel --prod          # 生產部署"
echo "vercel                 # 預覽部署"
echo "vercel ls              # 列出部署"
echo "vercel domains         # 管理域名"
echo "vercel env             # 管理環境變量"
echo ""
echo "🌐 您的網站將在幾分鐘內在Vercel提供的網址上線"
echo "🔧 您可以在Vercel控制台中設置自定義域名"

