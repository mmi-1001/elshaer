# 🚀 Project Setup Guide for Friend

## ⚠️ IMPORTANT: This project has specific dependencies that need to be installed correctly

### Step 1: Clone the Repository
```bash
git clone [YOUR_GITHUB_REPO_URL]
cd [PROJECT_FOLDER]
```

### Step 2: Clear any existing node_modules and package-lock.json
```bash
# Remove existing node_modules and lock file
rm -rf node_modules
rm package-lock.json
```

### Step 3: Install Dependencies with Specific Versions
```bash
# Install the exact versions that work
npm install

# If there are still issues, install these specific versions:
npm install caniuse-lite@1.0.30001724
npm install postcss-preset-env@10.2.3
```

### Step 4: Fix Missing Dependencies
The project requires these additional dependencies that might not be installed:

```bash
# Install missing dependencies
npm install autoprefixer@10.4.21 --save-dev
npm install postcss-preset-env@10.2.3 --save-dev
npm install caniuse-lite@1.0.30001724
```

### Step 5: Update package.json (if needed)
Make sure your package.json has these exact versions:

```json
{
  "dependencies": {
    "@emotion/react": "^11.14.0",
    "@emotion/styled": "^11.14.0",
    "@mui/icons-material": "^7.1.1",
    "@mui/material": "^7.1.1",
    "cra-template-pwa": "2.0.0",
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "react-router-dom": "^7.6.2",
    "react-scripts": "5.0.1",
    "recharts": "^2.15.3",
    "web-vitals": "^5.0.3"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.21",
    "postcss-preset-env": "^10.2.3",
    "caniuse-lite": "^1.0.30001724"
  }
}
```

### Step 6: Start the Project
```bash
npm start
```

## 🔧 Troubleshooting

### If you get PostCSS errors:
```bash
npm install caniuse-lite@latest
npx update-browserslist-db@latest
```

### If you get React version conflicts:
```bash
npm install react@19.1.0 react-dom@19.1.0 --force
```

### If you get Material-UI errors:
```bash
npm install @mui/material@7.1.1 @mui/icons-material@7.1.1 @emotion/react@11.14.0 @emotion/styled@11.14.0
```

### If you get build errors:
```bash
# Clear cache and reinstall
npm cache clean --force
rm -rf node_modules
npm install
```

## 📋 Required Files Check
Make sure these files exist in your project:
- ✅ `package.json`
- ✅ `package-lock.json` (will be generated)
- ✅ `src/` folder with all React components
- ✅ `public/` folder with index.html
- ✅ `node_modules/` (after npm install)

## 🎯 Expected Result
After following these steps, you should see:
- ✅ No npm errors
- ✅ React development server starts on http://localhost:3000
- ✅ Dashboard loads with Material-UI components
- ✅ All pages (Dashboard, Tasks, MyLeaves, Profile) work

## 📞 If Still Not Working
Contact me with the exact error message you're getting! 