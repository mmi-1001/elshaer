@echo off
echo 🔧 Fixing Project Dependencies...

REM Step 1: Remove existing node_modules and lock file
echo 📁 Removing existing node_modules and package-lock.json...
if exist node_modules rmdir /s /q node_modules
if exist package-lock.json del package-lock.json

REM Step 2: Clear npm cache
echo 🧹 Clearing npm cache...
npm cache clean --force

REM Step 3: Install dependencies
echo 📦 Installing dependencies...
npm install

REM Step 4: Fix specific version issues
echo 🔧 Fixing version conflicts...
npm install caniuse-lite@1.0.30001724 --save
npm install postcss-preset-env@10.2.3 --save-dev
npm install autoprefixer@10.4.21 --save-dev

REM Step 5: Update browserslist database
echo 🔄 Updating browserslist database...
npx update-browserslist-db@latest

REM Step 6: Start the project
echo 🚀 Starting the project...
echo ✅ Dependencies fixed! Starting development server...
npm start 