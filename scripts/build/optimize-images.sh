#!/bin/bash

# Image Optimization Script
# @description Optimize images for web deployment
# @author Jackson Fall

set -e

echo "🖼️  Image Optimization Script"
echo "============================="
echo ""

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Get source and destination directories
read -p "Source directory (default: images): " SOURCE_DIR
SOURCE_DIR=${SOURCE_DIR:-images}

read -p "Output directory (default: images-optimized): " OUTPUT_DIR
OUTPUT_DIR=${OUTPUT_DIR:-images-optimized}

if [ ! -d "$SOURCE_DIR" ]; then
    echo "Error: Source directory '$SOURCE_DIR' not found"
    exit 1
fi

mkdir -p "$OUTPUT_DIR"

# Count files
TOTAL_FILES=$(find "$SOURCE_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | wc -l)
echo -e "${YELLOW}Found $TOTAL_FILES images to optimize${NC}"
echo ""

COUNT=0

# Optimize JPG/JPEG files
find "$SOURCE_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" \) | while read file; do
    COUNT=$((COUNT + 1))
    filename=$(basename "$file")
    
    echo -e "${YELLOW}[$COUNT/$TOTAL_FILES]${NC} Optimizing $filename..."
    
    if command -v jpegoptim &> /dev/null; then
        jpegoptim --max=85 --strip-all --dest="$OUTPUT_DIR" "$file"
    elif command -v convert &> /dev/null; then
        convert "$file" -quality 85 -strip "$OUTPUT_DIR/$filename"
    else
        cp "$file" "$OUTPUT_DIR/$filename"
        echo "  ⚠️  jpegoptim not found, copied without optimization"
    fi
done

# Optimize PNG files
find "$SOURCE_DIR" -type f -iname "*.png" | while read file; do
    COUNT=$((COUNT + 1))
    filename=$(basename "$file")
    
    echo -e "${YELLOW}[$COUNT/$TOTAL_FILES]${NC} Optimizing $filename..."
    
    if command -v optipng &> /dev/null; then
        cp "$file" "$OUTPUT_DIR/$filename"
        optipng -o5 "$OUTPUT_DIR/$filename"
    elif command -v convert &> /dev/null; then
        convert "$file" -strip "$OUTPUT_DIR/$filename"
    else
        cp "$file" "$OUTPUT_DIR/$filename"
        echo "  ⚠️  optipng not found, copied without optimization"
    fi
done

echo ""
echo -e "${GREEN}✅ Image optimization complete!${NC}"
echo "Optimized images saved to: $OUTPUT_DIR"
