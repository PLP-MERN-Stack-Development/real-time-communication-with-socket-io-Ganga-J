# Deployment Guide - Vercel

This guide will help you deploy your Socket.io Chat App to Vercel.

## Prerequisites
- GitHub account with your repository pushed
- Vercel account (sign up at https://vercel.com)
- Node.js v18+ installed locally

## Option 1: Deploy via Vercel Dashboard (Recommended)

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

### Step 2: Import Project to Vercel
1. Go to https://vercel.com/new
2. Select "Import Git Repository"
3. Paste your GitHub repository URL
4. Click "Import"

### Step 3: Configure Environment Variables
In the Vercel dashboard:
1. Go to **Settings** → **Environment Variables**
2. Add the following variables:
   - **VITE_SOCKET_URL**: Your Vercel deployment URL (e.g., `https://your-app.vercel.app`)
   - **CLIENT_URL**: Your Vercel deployment URL
   - **MONGODB_URI**: Your MongoDB connection string (if using database)
   - **NODE_ENV**: `production`

### Step 4: Deploy
1. Click "Deploy"
2. Wait for the build to complete
3. Your app will be live at the provided URL!

---

## Option 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Authenticate
```bash
vercel login
```

### Step 3: Configure Project
In your project root, create `vercel.json` (already included)

### Step 4: Set Environment Variables
```bash
vercel env add VITE_SOCKET_URL
vercel env add CLIENT_URL
vercel env add MONGODB_URI
vercel env add NODE_ENV production
```

### Step 5: Deploy
```bash
vercel --prod
```

---

## Important Configuration Notes

### VITE_SOCKET_URL
- **Local Development**: `http://localhost:5000`
- **Vercel Deployment**: Use your Vercel app URL (e.g., `https://my-chat-app.vercel.app`)

Update this in:
1. Vercel Dashboard Environment Variables
2. `.env` file locally before building

### Socket.io WebSocket Support
Vercel supports WebSocket connections, so Socket.io will work on the deployed app.

### Database Connection
If using MongoDB:
1. Create a MongoDB Atlas account at https://www.mongodb.com/cloud/atlas
2. Create a cluster and get your connection string
3. Set `MONGODB_URI` as an environment variable in Vercel

---

## Troubleshooting

### "Port already in use" during local testing
```bash
# Kill the process using port 5000
# On Windows:
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# On Mac/Linux:
lsof -i :5000
kill -9 <PID>
```

### Socket connection fails after deployment
1. Check that `VITE_SOCKET_URL` is correctly set to your Vercel URL
2. Verify CORS is configured properly
3. Check Vercel logs: `vercel logs --tail`

### Build fails
1. Ensure all dependencies are installed: `npm install`
2. Check `package.json` scripts are correct
3. Verify no files reference old doctor/patient imports

### View Deployment Logs
```bash
vercel logs --tail
```

---

## Project Structure for Deployment

```
root/
├── api/
│   └── index.js           # Serverless function endpoint
├── client/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
├── server/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
├── vercel.json            # Vercel configuration
├── .env.example           # Environment template
└── .env                   # Your actual environment (don't commit!)
```

---

## Next Steps

1. ✅ Push code to GitHub
2. ✅ Connect GitHub to Vercel
3. ✅ Set environment variables
4. ✅ Deploy!
5. ✅ Monitor logs and test the app

Your chat app is ready for production! 🚀
