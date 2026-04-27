#!/bin/bash
# One-Click Deployment Script for Sahjony Capital Lobsterboard UI
# Deploys to www.sahjonycapital.com

echo "🚀 SAHJONY CAPITAL LOBSTERBOARD UI DEPLOYMENT"
echo "============================================"

# Check prerequisites
if ! command -v npm &> /dev/null; then
    echo "❌ Node.js/npm not found. Please install Node.js first."
    exit 1
fi

if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
fi

echo "🔐 Please authenticate with Vercel..."
echo "You will be redirected to browser for authentication."
vercel login

echo "🏗️ Building project..."
npm run build

echo "🌐 Deploying to Vercel..."
vercel --prod --confirm

echo "🔗 Getting project URL..."
PROJECT_URL=$(vercel --prod --confirm --name sahjony-capital-lobsterboard | grep -o 'https://[^ ]*' | head -1)

echo "🌍 Configuring domain www.sahjonycapital.com..."
vercel alias set $PROJECT_URL www.sahjonycapital.com

echo ""
echo "✅ DEPLOYMENT COMPLETE!"
echo "============================================"
echo "🌐 Lobsterboard UI URL: https://www.sahjonycapital.com"
echo "🔗 Vercel URL: $PROJECT_URL"
echo ""
echo "📋 Verification Steps:"
echo "1. Visit https://www.sahjonycapital.com"
echo "2. Skip onboarding (click 'Skip setup')"
echo "3. Click 'Real Estate' to access Lobsterboard"
echo "4. Verify portfolio metrics and AI agents"
echo ""
echo "🎉 Your Lobsterboard UI is now live!"