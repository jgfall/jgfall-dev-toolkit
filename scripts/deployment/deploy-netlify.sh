#!/bin/bash

# Netlify Deployment Script
# @description Deploy any project to Netlify with automatic configuration
# @author Jackson Fall

set -e

echo "🚀 Netlify Deployment Script"
echo "============================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if netlify-cli is installed
if ! command -v netlify &> /dev/null; then
    echo -e "${RED}Error: Netlify CLI not found${NC}"
    echo "Install with: npm install -g netlify-cli"
    exit 1
fi

# Get project details
echo -e "${YELLOW}Project Configuration${NC}"
read -p "Build directory (default: dist): " BUILD_DIR
BUILD_DIR=${BUILD_DIR:-dist}

read -p "Build command (default: npm run build): " BUILD_CMD
BUILD_CMD=${BUILD_CMD:-"npm run build"}

# Check if site is already linked
if [ -f ".netlify/state.json" ]; then
    echo -e "${GREEN}Site already linked to Netlify${NC}"
else
    echo -e "${YELLOW}Linking to Netlify...${NC}"
    netlify link
fi

# Build the project
echo ""
echo -e "${YELLOW}Building project...${NC}"
eval $BUILD_CMD

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ Build successful${NC}"
else
    echo -e "${RED}✗ Build failed${NC}"
    exit 1
fi

# Deploy
echo ""
echo -e "${YELLOW}Deploying to Netlify...${NC}"

read -p "Deploy to production? (y/n): " DEPLOY_PROD

if [ "$DEPLOY_PROD" = "y" ]; then
    netlify deploy --prod --dir=$BUILD_DIR
    echo -e "${GREEN}✓ Deployed to production!${NC}"
else
    netlify deploy --dir=$BUILD_DIR
    echo -e "${GREEN}✓ Deployed to preview!${NC}"
fi

echo ""
echo -e "${GREEN}🎉 Deployment complete!${NC}"
