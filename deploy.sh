#!/bin/bash

echo "🚀 Starting deployment..."

# 1. 의존성 설치
echo "📦 Installing dependencies..."
npm ci

# 2. 프로덕션 빌드
echo "🔨 Building for production..."
npm run build

# 3. PM2로 재시작 (PM2가 설치되어 있어야 함)
echo "🔄 Restarting with PM2..."
pm2 restart ecosystem.config.js --update-env

echo "✅ Deployment complete!"
echo "🌐 Application running on http://localhost:3000"
