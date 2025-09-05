# QK Synergy Ltd. - Official Website

> 專業的跨境貿易解決方案官方網站

![QK Synergy](src/assets/qk-synergy-logo.png)

## 🌟 項目特色

- **🎨 現代化設計** - 專業的藍白配色方案，營造信賴感
- **📱 響應式佈局** - 完美支援桌面和移動設備
- **🚀 高性能** - 使用React + Vite構建，載入速度極快
- **🎯 專業內容** - 完整的公司介紹、服務項目和聯絡方式
- **📊 數據視覺化** - 整合專業的商業圖表和信息圖

## 🛠️ 技術棧

- **前端框架**: React 18
- **構建工具**: Vite
- **樣式框架**: Tailwind CSS
- **UI組件**: shadcn/ui
- **圖標**: Lucide React
- **部署**: 支援多平台部署

## 📁 項目結構

```
qk-synergy-website/
├── src/
│   ├── assets/          # 圖片資源
│   ├── components/      # UI組件
│   ├── App.jsx         # 主應用組件
│   └── main.jsx        # 入口文件
├── public/             # 靜態資源
├── dist/              # 構建輸出
├── deploy-*.sh        # 部署腳本
├── netlify.toml       # Netlify配置
├── vercel.json        # Vercel配置
└── .github/workflows/ # GitHub Actions
```

## 🚀 快速開始

### 本地開發

```bash
# 安裝依賴
npm install

# 啟動開發服務器
npm run dev

# 構建生產版本
npm run build

# 預覽生產版本
npm run preview
```

### 部署到生產環境

#### 1. 初始化Git (首次部署)
```bash
./deploy-setup.sh
```

#### 2. 選擇部署平台

**Netlify (推薦)**
```bash
./deploy-netlify.sh
```

**Vercel**
```bash
./deploy-vercel.sh
```

**GitHub Pages**
```bash
./deploy-github-pages.sh
```

## 📋 網站內容

### 🏠 首頁 (Hero Section)
- 引人注目的標題和描述
- 全球電商增長數據圖表
- 明確的行動呼籲按鈕

### ℹ️ 關於我們
- **使命**: 讓跨境貿易更簡單、更有影響力
- **願景**: 成為品牌與全球市場之間的可信橋樑
- **核心價值**: 專業卓越、客戶至上、全球視野、持續創新

### 🛠️ 服務項目
1. **跨境貿易解決方案** - 10,000+零售渠道，50+線上平台
2. **營銷與品牌推廣** - 社交媒體、電商策略、SEO/SEM
3. **企業合作與諮詢** - 戰略諮詢，長期合作夥伴

### 📞 聯絡我們
- 聯絡表單 (含成功訊息)
- 常見問題解答
- 營業時間和聯絡資訊

## 🎨 設計特色

### 視覺元素
- **配色方案**: 專業藍色 (#2563eb) + 白色背景
- **字體**: 現代化無襯線字體
- **圖片**: 高質量的商業和貿易相關圖片
- **動效**: 平滑的滾動和hover效果

### 用戶體驗
- **導航**: 固定頂部導航，平滑滾動
- **響應式**: 移動端優化的佈局
- **載入速度**: 優化的圖片和代碼分割
- **無障礙**: 符合WCAG標準

## 🔧 自定義配置

### 修改內容
編輯 `src/App.jsx` 文件來修改網站內容。

### 更換圖片
將新圖片放入 `src/assets/` 目錄並更新導入語句。

### 修改樣式
使用Tailwind CSS類名或編輯 `src/App.css`。

### 添加新頁面
在 `src/` 目錄中創建新組件並在 `App.jsx` 中引用。

## 📊 性能優化

- **圖片優化**: 使用WebP格式和適當尺寸
- **代碼分割**: Vite自動處理
- **CDN**: 部署平台提供全球CDN
- **緩存策略**: 配置文件中設置適當的緩存頭

## 🔒 安全性

- **HTTPS**: 所有部署平台默認提供
- **安全頭部**: 配置XSS保護、內容類型檢測等
- **表單保護**: 客戶端驗證和安全提交

## 📈 SEO優化

- **語義化HTML**: 使用適當的標籤結構
- **Meta標籤**: 設置標題、描述和關鍵詞
- **結構化數據**: 商業信息標記
- **網站地圖**: 自動生成

## 🤝 貢獻指南

1. Fork本項目
2. 創建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 開啟Pull Request

## 📄 許可證

本項目使用MIT許可證 - 查看 [LICENSE](LICENSE) 文件了解詳情。

## 📞 支援

如需技術支援或有任何問題，請：

1. 查看 [DEPLOYMENT.md](DEPLOYMENT.md) 部署指南
2. 檢查 [Issues](../../issues) 頁面
3. 聯絡開發團隊

---

**🎉 感謝使用QK Synergy官網！讓我們一起連接全球市場！**

