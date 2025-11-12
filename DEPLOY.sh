#!/bin/bash
# Deploy to Vercel - Copy & Paste This File

# ============================================================================
# STEP 1: Install Vercel CLI
# ============================================================================
npm install -g vercel

# ============================================================================
# STEP 2: Authenticate with Vercel
# ============================================================================
vercel login

# ============================================================================
# STEP 3: Navigate to Project (if not already there)
# ============================================================================
cd "f:\MERN\WK-5\WK-5 upload\real-time-communication-with-socket-io-Ganga-J"

# ============================================================================
# STEP 4: Deploy to Production
# ============================================================================
vercel --prod

# ============================================================================
# STEP 5: After deployment completes, set environment variables
# ============================================================================
# Go to Vercel Dashboard and add:
# - VITE_SOCKET_URL = https://your-app-name.vercel.app
# - CLIENT_URL = https://your-app-name.vercel.app
# - NODE_ENV = production

# ============================================================================
# STEP 6: Redeploy with variables
# ============================================================================
vercel --prod

# ============================================================================
# DONE! Your chat app is now live!
# ============================================================================

# Optional: View logs
# vercel logs --tail

# Optional: Rollback
# vercel rollback

# Optional: Check status
# vercel list
