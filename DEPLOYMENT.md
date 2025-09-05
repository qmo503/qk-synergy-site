# QK Synergy Website - 部署指南

本指南將幫助您將QK Synergy官網部署到各種平台。

## 🚀 快速開始

### 1. 準備工作
```bash
# 給腳本執行權限
chmod +x *.sh

# 初始化Git並準備部署
./deploy-setup.sh
```

## 🌐 部署平台選擇

### 📱 Netlify (推薦 - 最簡單)
**優點**: 免費、自動HTTPS、表單處理、CDN
**適合**: 靜態網站、快速部署

```bash
# 自動部署腳本
./deploy-netlify.sh

# 或手動部署
npm run build
netlify deploy --dir=dist --prod
```

**配置文件**: `netlify.toml`

### ⚡ Vercel (推薦 - 最快)
**優點**: 極快的CDN、自動優化、無服務器函數
**適合**: React應用、全球訪問

```bash
# 自動部署腳本
./deploy-vercel.sh

# 或手動部署
npm run build
cd dist && vercel --prod
```

**配置文件**: `vercel.json`

### 🐙 GitHub Pages (免費)
**優點**: 完全免費、與GitHub集成
**適合**: 開源項目、個人網站

```bash
# 自動部署腳本
./deploy-github-pages.sh
```

**自動部署**: 推送到main分支時自動部署 (使用GitHub Actions)

## 📋 詳細部署步驟

### Netlify部署

#### 方法1: 拖拽部署
1. 運行 `npm run build`
2. 將 `dist` 文件夾拖拽到 https://app.netlify.com/drop

#### 方法2: Git連接 (推薦)
1. 推送代碼到GitHub
2. 在Netlify中連接GitHub倉庫
3. 設置構建命令: `npm run build`
4. 設置發布目錄: `dist`

### Vercel部署

#### 方法1: CLI部署
```bash
npm install -g vercel
npm run build
cd dist
vercel --prod
```

#### 方法2: Git連接
1. 推送代碼到GitHub
2. 在Vercel中導入GitHub倉庫
3. Vercel會自動檢測設置

### GitHub Pages部署

#### 方法1: 手動部署
運行 `./deploy-github-pages.sh` 腳本

#### 方法2: 自動部署 (推薦)
1. 推送代碼到GitHub (包含 `.github/workflows/deploy.yml`)
2. 在倉庫設置中啟用GitHub Pages
3. 選擇GitHub Actions作為源
4. 每次推送到main分支時自動部署

## 🔧 自定義域名設置

### Netlify
1. 在Netlify控制台中點擊 "Domain settings"
2. 點擊 "Add custom domain"
3. 按照指示設置DNS記錄

### Vercel
1. 在Vercel控制台中點擊項目
2. 進入 "Settings" > "Domains"
3. 添加您的域名並設置DNS

### GitHub Pages
1. 在倉庫根目錄創建 `CNAME` 文件
2. 文件內容為您的域名 (例如: `www.qksynergy.com`)
3. 在域名提供商處設置CNAME記錄指向 `username.github.io`

## 🛠️ 故障排除

### 構建失敗
```bash
# 清理並重新安裝依賴
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 圖片不顯示
確保所有圖片文件都在 `src/assets/` 目錄中，並且正確導入。

### 路由問題
確保部署平台配置了SPA重定向規則 (已在配置文件中設置)。

## 📞 支持

如果遇到部署問題，請檢查：
1. Node.js版本 (推薦18+)
2. 網絡連接
3. 平台服務狀態
4. 配置文件語法

## 🔄 更新網站

### 本地更新後重新部署
```bash
# 1. 修改代碼
# 2. 構建新版本
npm run build

# 3. 提交更改
git add .
git commit -m "Update: 描述您的更改"
git push origin main

# 4. 重新部署 (如果使用手動部署)
./deploy-netlify.sh    # 或其他平台腳本
```

### 自動部署
如果設置了Git連接，推送到main分支後會自動部署。

---

**🎉 恭喜！您的QK Synergy官網現在已經可以在全世界訪問了！**

