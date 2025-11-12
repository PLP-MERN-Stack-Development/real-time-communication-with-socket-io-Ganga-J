# Quick Deployment to Vercel

This script automates the deployment process.

## Step 1: Prepare Your Code

```bash
# Commit all changes
git add .
git commit -m "Ready for Vercel deployment"
git push origin main
```

## Step 2: Deploy to Vercel

### Using Vercel CLI (Recommended)

```bash
# 1. Install Vercel CLI (if not already installed)
npm install -g vercel

# 2. Authenticate with Vercel
vercel login

# 3. Deploy to production
vercel --prod
```

### Using Vercel Dashboard

1. Visit https://vercel.com/new
2. Import your GitHub repository
3. Set environment variables (see DEPLOYMENT.md)
4. Click Deploy!

## Step 3: Set Environment Variables

After deployment, configure in Vercel Dashboard:

**Settings → Environment Variables**

```
VITE_SOCKET_URL = https://your-app-name.vercel.app
CLIENT_URL = https://your-app-name.vercel.app
NODE_ENV = production
```

## Step 4: Redeploy with Variables

```bash
# After setting env variables
vercel --prod
```

## Testing

1. Visit `https://your-app-name.vercel.app`
2. Try creating users and joining the chat
3. Check browser console (F12) for any errors
4. Check Vercel logs: `vercel logs --tail`

## Troubleshooting

### Socket connection issues?
- Verify VITE_SOCKET_URL matches your deployment URL
- Clear browser cache (Ctrl+Shift+Delete)
- Restart the client app

### Build errors?
```bash
# Check local build
npm run build

# View Vercel logs
vercel logs --tail
```

### Need to rollback?
```bash
vercel rollback
```

---

✅ Your chat app is now live on Vercel! 🚀
