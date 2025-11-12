# 🚀 Quick Start Guide

## One-Time Setup

### 1️⃣ Install Server Dependencies
```bash
cd server
npm install
```

### 2️⃣ Install Client Dependencies
```bash
cd ../client
npm install
```

## Running the Application

### Start Server (Terminal 1)
```bash
cd server
npm run dev
```

**Expected Output:**
```
[nodemon] starting `node server.js`
[dotenv@17.2.3] injecting env (3) from .env
Server running on port 5000
```

### Start Client (Terminal 2)
```bash
cd client
npm run dev
```

**Expected Output:**
```
VITE v5.4.21 ready in 2984 ms
➜  Local:   http://localhost:5173/
```

## Access Application

Open your browser and go to: **http://localhost:5173**

## First-Time User Flow

1. **Login Screen**: Enter a username (2-20 characters)
2. **Click "Join Chat"** button
3. **Chat Interface** loads with:
   - Empty message area
   - Online users list (showing you)
   - Message input box at bottom

## Test Multi-User Chat

### Method 1: Multiple Tabs
1. Open http://localhost:5173 in Tab 1
2. Enter username "User1" and join
3. Open http://localhost:5173 in Tab 2
4. Enter username "User2" and join
5. Tab 1 now shows "User2" in the online users list
6. Send messages between tabs - they appear in real-time!

### Method 2: Incognito Window
1. Chrome: Press `Ctrl+Shift+N` (Windows) or `Cmd+Shift+N` (Mac)
2. Go to http://localhost:5173
3. Enter different username
4. Chat with the original window

## Features to Try

✅ **Send Messages**: Type in the input and press Enter or click Send

✅ **Typing Indicator**: Start typing in one tab - see "typing..." in another

✅ **Message Reactions**: Hover over a message and click emoji (👍 ❤️ 😂 😮)

✅ **User Presence**: Watch the user list update when someone joins/leaves

✅ **Connection Status**: Check the green dot indicator in the top-right

✅ **System Messages**: See when users join or disconnect

## Troubleshooting

### "Cannot connect to server"
- ✅ Is the server running? (Check Terminal 1)
- ✅ Is it on port 5000?
- ✅ Check browser console for errors (F12)

### "Port already in use"
```bash
# Kill process on port 5000
npx kill-port 5000

# Or change ports in .env files
# Server: SERVER/.env
# Client: CLIENT/.env
```

### "Module not found" errors
```bash
# Delete node_modules and reinstall
cd server && rm -rf node_modules && npm install
cd ../client && rm -rf node_modules && npm install
```

## Build for Production

### Build Client
```bash
cd client
npm run build
# Creates dist/ folder
```

### Deploy
- Upload `dist/` to Vercel/Netlify
- Upload server to Render/Railway/Heroku
- Update VITE_SOCKET_URL in .env

## Stop Servers

Press `Ctrl+C` in each terminal running the servers.

## Useful Commands

```bash
# Clear all node_modules and reinstall
npm run clean  # (if available)

# Run server in production
cd server && npm start

# Check if port is in use
netstat -ano | findstr :5000  # Windows
lsof -i :5000                 # Mac/Linux
```

## Next Steps

1. ✅ Test messaging and reactions
2. ✅ Try multi-user scenarios
3. ✅ Check the responsive design (resize browser)
4. ✅ Review code in `client/src` and `server/server.js`
5. ✅ Read `README.md` for full documentation

---

**Enjoy your real-time chat application!** 🎉
