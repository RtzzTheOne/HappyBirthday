# Happy Birthday Website 🎉

A beautiful, romantic birthday website built with React for a special celebration.

## Features

- 🎂 Interactive birthday cake with animated candles
- 💌 Openable birthday card with personal message
- 🎁 Surprise section with GIF
- 🏮 Wish lanterns that float up when clicked
- 💋 Interactive kiss buttons with animations
- 🎵 Background music controls
- ✨ Floating animations and sparkles
- 💖 Romantic themes and animations

## Technologies Used

- React 18
- CSS3 Animations
- HTML5 Audio
- Responsive Design

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## Deployment to GitHub Pages

This project is configured for GitHub Pages deployment:

### Step 1: Create GitHub Repository
1. Go to [github.com](https://github.com) and create a new repository
2. Name it `happybirthday` (or any name you prefer)
3. Make it public (required for free GitHub Pages)

### Step 2: Connect Local Repository to GitHub
```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: Birthday website ready for deployment"

# Add your GitHub repository as origin
git remote add origin https://github.com/YOURUSERNAME/happybirthday.git

# Push to GitHub
git push -u origin main
```

### Step 3: Update Homepage URL
In `package.json`, replace `yourusername` with your actual GitHub username:
```json
"homepage": "https://YOURUSERNAME.github.io/happybirthday"
```

### Step 4: Deploy to GitHub Pages
```bash
# Deploy to GitHub Pages
npm run deploy
```

### Step 5: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Select "gh-pages" branch
6. Click "Save"

Your website will be live at: `https://YOURUSERNAME.github.io/happybirthday`

### Updating Your Site
Whenever you make changes:
```bash
git add .
git commit -m "Update website"
git push origin main
npm run deploy
```

## Alternative Deployment Options

### Vercel (Also Available)
This project is also optimized for Vercel deployment:

1. **Push to GitHub**: Make sure your code is in a GitHub repository
2. **Connect to Vercel**: 
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
3. **Deploy**: Vercel will automatically detect React and deploy your app

## Project Structure

```
src/
├── App.jsx          # Main component
├── App.css          # Styles
├── index.js         # Entry point
└── background.png   # Background image

public/
├── index.html       # HTML template
├── hbdsong.mp3     # Background music
└── test.gif        # Surprise GIF
```

## Live Demo

Once deployed, your website will be available at your GitHub Pages URL.

---

Made with 💖 for a special birthday celebration