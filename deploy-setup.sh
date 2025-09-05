#!/bin/bash

# QK Synergy Website - Git部署設置腳本
# 此腳本將初始化Git倉庫並準備部署

echo "🚀 QK Synergy Website - Git部署設置"
echo "=================================="

# 檢查是否已經是Git倉庫
if [ ! -d ".git" ]; then
    echo "📁 初始化Git倉庫..."
    git init
    echo "✅ Git倉庫初始化完成"
else
    echo "📁 Git倉庫已存在"
fi

# 創建.gitignore文件
echo "📝 創建.gitignore文件..."
cat > .gitignore << EOF
# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Production build (保留dist用於部署)
# dist/

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

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Coverage directory used by tools like istanbul
coverage/

# Dependency directories
jspm_packages/

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# Microbundle cache
.rpt2_cache/
.rts2_cache_cjs/
.rts2_cache_es/
.rts2_cache_umd/

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity
EOF

# 添加所有文件到Git
echo "📦 添加文件到Git..."
git add .

# 檢查是否有提交
if git rev-parse --verify HEAD >/dev/null 2>&1; then
    echo "📝 創建新的提交..."
    git commit -m "Update: QK Synergy website with enhanced design and images"
else
    echo "📝 創建初始提交..."
    git commit -m "Initial commit: QK Synergy professional website"
fi

echo ""
echo "✅ Git設置完成！"
echo ""
echo "🔗 下一步："
echo "1. 創建GitHub倉庫: https://github.com/new"
echo "2. 運行以下命令連接遠程倉庫:"
echo "   git remote add origin https://github.com/YOUR_USERNAME/qk-synergy-website.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "3. 或者運行特定平台的部署腳本:"
echo "   ./deploy-netlify.sh    # 部署到Netlify"
echo "   ./deploy-vercel.sh     # 部署到Vercel"
echo "   ./deploy-github-pages.sh # 部署到GitHub Pages"

