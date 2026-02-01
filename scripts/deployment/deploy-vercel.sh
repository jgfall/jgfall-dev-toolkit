#!/bin/bash

# Vercel Deployment Script
# @description Deploy any project to Vercel
# @author Jackson Fall

set -e

echo "🚀 Vercel Deployment Script"
echo "============================"
echo ""

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Check if vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo -e "${RED}Error: Vercel CLI not found${NC}"
    echo "Install with: npm install -g vercel"
    exit 1
fi

# Build the project (if build command exists)
if [ -f "package.json" ]; then
    if grep -q '"build"' package.json; then
        echo -e "${YELLOW}Building project...${NC}"
        npm run build
        echo -e "${GREEN}✓ Build successful${NC}"
    fi
fi

# Deploy
echo ""
echo -e "${YELLOW}Deploying to Vercel...${NC}"

read -p "Deploy to production? (y/n): " DEPLOY_PROD

if [ "$DEPLOY_PROD" = "y" ]; then
    vercel --prod
    echo -e "${GREEN}✓ Deployed to production!${NC}"
else
    vercel
    echo -e "${GREEN}✓ Deployed to preview!${NC}"
fi

echo ""
echo -e "${GREEN}🎉 Deployment complete!${NC}"
