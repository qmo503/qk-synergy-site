#!/bin/bash

# QK Synergy Website - 打包下載腳本
# 此腳本將創建完整的網站打包文件

echo "📦 QK Synergy Website - 打包下載"
echo "================================"

# 設置打包目錄和文件名
PACKAGE_DIR="qk-synergy-website-package"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
PACKAGE_NAME="qk-synergy-website_${TIMESTAMP}"

echo "🔨 準備打包..."

# 確保構建最新版本
echo "📋 構建最新版本..."
npm run build

# 創建打包目錄
echo "📁 創建打包目錄..."
rm -rf "$PACKAGE_DIR"
mkdir -p "$PACKAGE_DIR"

# 複製源代碼
echo "📄 複製源代碼..."
cp -r src/ "$PACKAGE_DIR/"
cp -r public/ "$PACKAGE_DIR/"

# 複製構建文件 (生產版本)
echo "🏗️ 複製構建文件..."
cp -r dist/ "$PACKAGE_DIR/"

# 複製配置文件
echo "⚙️ 複製配置文件..."
cp package.json "$PACKAGE_DIR/"
cp package-lock.json "$PACKAGE_DIR/" 2>/dev/null || true
cp vite.config.js "$PACKAGE_DIR/" 2>/dev/null || true
cp tailwind.config.js "$PACKAGE_DIR/" 2>/dev/null || true
cp postcss.config.js "$PACKAGE_DIR/" 2>/dev/null || true
cp jsconfig.json "$PACKAGE_DIR/" 2>/dev/null || true
cp components.json "$PACKAGE_DIR/" 2>/dev/null || true
cp index.html "$PACKAGE_DIR/" 2>/dev/null || true

# 複製部署相關文件
echo "🚀 複製部署文件..."
cp *.sh "$PACKAGE_DIR/" 2>/dev/null || true
cp netlify.toml "$PACKAGE_DIR/" 2>/dev/null || true
cp vercel.json "$PACKAGE_DIR/" 2>/dev/null || true
cp -r .github/ "$PACKAGE_DIR/" 2>/dev/null || true

# 複製文檔
echo "📚 複製文檔..."
cp README.md "$PACKAGE_DIR/" 2>/dev/null || true
cp DEPLOYMENT.md "$PACKAGE_DIR/" 2>/dev/null || true

# 創建安裝說明
echo "📝 創建安裝說明..."
cat > "$PACKAGE_DIR/INSTALL.md" << 'EOF'
# QK Synergy Website - 安裝說明

## 📦 包含內容

- `src/` - 源代碼文件
- `dist/` - 構建好的生產文件 (可直接部署)
- `public/` - 靜態資源
- 配置文件 (package.json, vite.config.js 等)
- 部署腳本 (deploy-*.sh)
- 文檔 (README.md, DEPLOYMENT.md)

## 🚀 快速部署 (使用構建文件)

### 方法1: 直接上傳到主機
1. 將 `dist/` 目錄中的所有文件上傳到您的網站根目錄
2. 確保 `index.html` 在根目錄
3. 完成！網站即可訪問

### 方法2: 使用cPanel
1. 登錄cPanel
2. 進入文件管理器
3. 將 `dist/` 中的文件上傳到 `public_html/` 目錄

### 方法3: 使用FTP
1. 使用FileZilla等FTP工具
2. 連接到您的主機
3. 上傳 `dist/` 中的所有文件到網站根目錄

## 🛠️ 本地開發 (使用源代碼)

### 安裝依賴
```bash
npm install
```

### 本地開發
```bash
npm run dev
```

### 構建生產版本
```bash
npm run build
```

## 🌐 雲端部署

使用提供的部署腳本：
- `./deploy-netlify.sh` - 部署到Netlify
- `./deploy-vercel.sh` - 部署到Vercel
- `./deploy-github-pages.sh` - 部署到GitHub Pages

詳細說明請查看 `DEPLOYMENT.md`

## 📞 技術支援

如有問題，請參考：
- README.md - 項目說明
- DEPLOYMENT.md - 部署指南
EOF

# 創建.gitignore (如果不存在)
if [ ! -f "$PACKAGE_DIR/.gitignore" ]; then
    echo "📝 創建.gitignore..."
    cat > "$PACKAGE_DIR/.gitignore" << 'EOF'
# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Logs
logs
*.log
EOF
fi

# 給腳本添加執行權限
echo "🔧 設置腳本權限..."
chmod +x "$PACKAGE_DIR"/*.sh 2>/dev/null || true

# 創建壓縮包
echo "🗜️ 創建壓縮包..."
if command -v zip &> /dev/null; then
    zip -r "${PACKAGE_NAME}.zip" "$PACKAGE_DIR"
    echo "✅ 已創建ZIP文件: ${PACKAGE_NAME}.zip"
fi

if command -v tar &> /dev/null; then
    tar -czf "${PACKAGE_NAME}.tar.gz" "$PACKAGE_DIR"
    echo "✅ 已創建TAR.GZ文件: ${PACKAGE_NAME}.tar.gz"
fi

# 顯示文件信息
echo ""
echo "📊 打包完成！"
echo "================================"
echo "📁 打包目錄: $PACKAGE_DIR"
if [ -f "${PACKAGE_NAME}.zip" ]; then
    echo "📦 ZIP文件: ${PACKAGE_NAME}.zip ($(du -h "${PACKAGE_NAME}.zip" | cut -f1))"
fi
if [ -f "${PACKAGE_NAME}.tar.gz" ]; then
    echo "📦 TAR.GZ文件: ${PACKAGE_NAME}.tar.gz ($(du -h "${PACKAGE_NAME}.tar.gz" | cut -f1))"
fi
echo ""
echo "📋 包含內容:"
echo "- 完整源代碼"
echo "- 構建好的生產文件 (dist/)"
echo "- 所有配置文件"
echo "- 部署腳本"
echo "- 安裝和部署說明"
echo ""
echo "🚀 您可以："
echo "1. 直接上傳 dist/ 文件夾到您的主機"
echo "2. 下載壓縮包到本地進行開發"
echo "3. 使用部署腳本部署到雲端平台"
EOF

