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
