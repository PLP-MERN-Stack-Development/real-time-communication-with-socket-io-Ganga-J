# Quick Command Reference

## 📥 One-Time Setup

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel (opens browser)
vercel login

# Navigate to project
cd path/to/real-time-communication-with-socket-io-Ganga-J
```

---

## 🚀 Deploy Commands

### Quick Deploy (Production)
```bash
vercel --prod
```

### Preview Deploy (Test)
```bash
vercel preview
```

### Check Logs
```bash
vercel logs --tail
```

### Rollback Last Deploy
```bash
vercel rollback
```

---

## 📋 Git Workflow Before Deploy

```bash
# 1. Commit all changes
git add .
git commit -m "Ready for production deployment"

# 2. Push to GitHub
git push origin main

# 3. Deploy to Vercel
vercel --prod
```

---

## 🔧 Local Development

```bash
# Start both server and client
npm run dev

# Build for production
npm run build

# Start server only
npm run server:dev

# Start client only
npm run client:dev
```

---

## 🌐 Environment Variables Setup

After deploying with `vercel --prod`, set these:

```bash
# Using Vercel CLI
vercel env add VITE_SOCKET_URL
# Enter: https://your-app-name.vercel.app

vercel env add CLIENT_URL
# Enter: https://your-app-name.vercel.app

vercel env add NODE_ENV
# Enter: production
```

Or in Vercel Dashboard:
1. Go to Settings → Environment Variables
2. Add each variable manually

---

## 🔄 Redeploy After Env Changes

```bash
vercel --prod
```

---

## 🧪 Testing Your Deployment

1. Open your Vercel URL
2. Create a user account
3. Send messages
4. Check WebSocket connection (DevTools → Network → WS)
5. Verify typing indicators work
6. Test private messaging

---

## 📊 Monitor Your App

```bash
# Real-time logs
vercel logs --tail

# Analytics
# Visit: https://vercel.com/dashboard → Your Project → Analytics

# Performance
# Check: Lighthouse score at your app URL
```

---

## 💾 Useful Links

- **Your Vercel Dashboard:** https://vercel.com/dashboard
- **Project Settings:** https://vercel.com/dashboard/your-project
- **Project URL:** https://your-project-name.vercel.app

---

## ⚡ Pro Tips

1. **Keep .env out of git:**
   ```bash
   # Verify .env is in .gitignore
   cat .gitignore | grep .env
   ```

2. **Test locally first:**
   ```bash
   npm run build
   npm run preview
   ```

3. **Use preview deploys for testing:**
   ```bash
   vercel preview
   ```

4. **Automate with GitHub:**
   - Every push to main = auto deploy
   - Set up via Vercel Dashboard

---

**Ready?** Run: `vercel --prod` 🚀
