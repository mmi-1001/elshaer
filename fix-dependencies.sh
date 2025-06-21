#!/bin/bash

echo "🔧 Fixing Project Dependencies..."

# Step 1: Remove existing node_modules and lock file
echo "📁 Removing existing node_modules and package-lock.json..."
rm -rf node_modules
rm -f package-lock.json

# Step 2: Clear npm cache
echo "🧹 Clearing npm cache..."
npm cache clean --force

# Step 3: Install dependencies
echo "📦 Installing dependencies..."
npm install

# Step 4: Fix specific version issues
echo "🔧 Fixing version conflicts..."
npm install caniuse-lite@1.0.30001724 --save
npm install postcss-preset-env@10.2.3 --save-dev
npm install autoprefixer@10.4.21 --save-dev

# Step 5: Update browserslist database
echo "🔄 Updating browserslist database..."
npx update-browserslist-db@latest

# Step 6: Start the project
echo "🚀 Starting the project..."
echo "✅ Dependencies fixed! Starting development server..."
npm start 