#!/bin/bash
# Sahjony Capital Lobsterboard UI Deployment Script
# Deploys to www.sahjonycapital.com

echo "🚀 Deploying Sahjony Capital Lobsterboard UI to www.sahjonycapital.com"

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "Installing Vercel CLI..."
    npm install -g vercel
fi

# Login to Vercel (you'll need to authenticate)
echo "Please authenticate with Vercel..."
vercel login

# Deploy with domain configuration
echo "Deploying to Vercel with domain configuration..."
vercel --prod --confirm --name sahjony-capital-lobsterboard

# Add domain to the project
echo "Adding domain www.sahjonycapital.com..."
vercel domains add www.sahjonycapital.com

# Set up domain alias
echo "Configuring domain alias..."
vercel alias set sahjony-capital-lobsterboard.vercel.app www.sahjonycapital.com

echo "✅ Deployment complete!"
echo "🌐 Lobsterboard UI will be available at: https://www.sahjonycapital.com"
echo "🔗 Direct Vercel URL: https://sahjony-capital-lobsterboard.vercel.app"