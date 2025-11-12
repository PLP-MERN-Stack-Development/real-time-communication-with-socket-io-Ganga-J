# 🔄 Real-Time Chat Application with Socket.io# Real-Time Chat Application with Socket.io



A fully functional real-time chat application built with Node.js, Express, Socket.io, React, and Vite. This application demonstrates bidirectional communication between clients and servers with advanced features like typing indicators, message reactions, and real-time notifications.This assignment focuses on building a real-time chat application using Socket.io, implementing bidirectional communication between clients and server.



## ✨ Features Implemented## Assignment Overview



### Task 1: Project Setup ✅You will build a chat application with the following features:

- [x] Node.js server with Express1. Real-time messaging using Socket.io

- [x] Socket.io configured on server side2. User authentication and presence

- [x] React front-end with Vite3. Multiple chat rooms or private messaging

- [x] Socket.io client in React app4. Real-time notifications

- [x] Basic client-server connection5. Advanced features like typing indicators and read receipts



### Task 2: Core Chat Functionality ✅## Project Structure

- [x] Simple username-based authentication

- [x] Global chat room for all users```

- [x] Messages display with sender name and timestampsocketio-chat/

- [x] Typing indicators when composing messages├── client/                 # React front-end

- [x] Online/offline status for users│   ├── public/             # Static files

- [x] User join/leave notifications│   ├── src/                # React source code

- [x] Real-time user list│   │   ├── components/     # UI components

│   │   ├── context/        # React context providers

### Task 3: Advanced Chat Features ✅│   │   ├── hooks/          # Custom React hooks

- [x] Message reactions (👍, ❤️, 😂, 😮)│   │   ├── pages/          # Page components

- [x] User is typing indicator│   │   ├── socket/         # Socket.io client setup

- [x] Online user presence tracking│   │   └── App.jsx         # Main application component

- [x] Unread message count display│   └── package.json        # Client dependencies

- [x] System messages for user actions├── server/                 # Node.js back-end

- [x] Message timestamps│   ├── config/             # Configuration files

│   ├── controllers/        # Socket event handlers

### Task 4: Real-Time Notifications ✅│   ├── models/             # Data models

- [x] Notifications when users join/leave│   ├── socket/             # Socket.io server setup

- [x] New message alerts│   ├── utils/              # Utility functions

- [x] Typing status notifications│   ├── server.js           # Main server file

- [x] User list updates in real-time│   └── package.json        # Server dependencies

- [x] Browser-ready for Web Notifications API└── README.md               # Project documentation

```

### Task 5: Performance & UX Optimization ✅

- [x] Message history stored and sent to new users## Getting Started

- [x] Reconnection logic with automatic retries

- [x] Optimized Socket.io with proper event handlers1. Accept the GitHub Classroom assignment invitation

- [x] Responsive design for desktop and mobile2. Clone your personal repository that was created by GitHub Classroom

- [x] Auto-scroll to latest messages3. Follow the setup instructions in the `Week5-Assignment.md` file

- [x] Loading states and connection indicators4. Complete the tasks outlined in the assignment

- [x] Error handling and user feedback

## Files Included

## 📂 Project Structure

- `Week5-Assignment.md`: Detailed assignment instructions

```- Starter code for both client and server:

real-time-communication-with-socket-io-Ganga-J/  - Basic project structure

├── client/                          # React front-end (Vite)  - Socket.io configuration templates

│   ├── public/  - Sample components for the chat interface

│   │   └── index.html              # Main HTML file

│   ├── src/## Requirements

│   │   ├── components/

│   │   │   ├── AuthScreen.jsx      # Login/authentication UI- Node.js (v18 or higher)

│   │   │   ├── ChatContainer.jsx   # Main chat container- npm or yarn

│   │   │   ├── MessageDisplay.jsx  # Message rendering with reactions- Modern web browser

│   │   │   ├── MessageInput.jsx    # Message input form- Basic understanding of React and Express

│   │   │   └── UsersList.jsx       # Online users sidebar

│   │   ├── socket/## Submission

│   │   │   └── socket.js           # Socket.io client setup

│   │   ├── App.jsx                 # Main app componentYour work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

│   │   ├── main.jsx                # React entry point

│   │   └── index.css               # Styling1. Complete both the client and server portions of the application

│   ├── .env                        # Environment variables2. Implement the core chat functionality

│   ├── package.json3. Add at least 3 advanced features

│   └── vite.config.js4. Document your setup process and features in the README.md

├── server/                         # Node.js back-end5. Include screenshots or GIFs of your working application

│   ├── config/6. Optional: Deploy your application and add the URLs to your README.md

│   │   └── db.js                  # Database configuration

│   ├── models/## Resources

│   │   ├── doctors.js             # Doctor model (optional)

│   │   └── patients.js            # Patient model (optional)- [Socket.io Documentation](https://socket.io/docs/v4/)

│   ├── routes/- [React Documentation](https://react.dev/)

│   │   ├── doctorsRoutes.jsx      # Doctor routes (optional)- [Express.js Documentation](https://expressjs.com/)

│   │   └── patientRoutes.jsx      # Patient routes (optional)- [Building a Chat Application with Socket.io](https://socket.io/get-started/chat) 
│   ├── .env                       # Environment variables
│   ├── package.json
│   └── server.js                  # Main server file
├── .gitignore
├── README.md                      # This file
└── Week5-Assignment.md            # Assignment instructions
```

## 🚀 Getting Started

### Prerequisites
- Node.js v18+ installed
- npm or yarn package manager
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repository-url>
   cd real-time-communication-with-socket-io-Ganga-J
   ```

2. **Install server dependencies:**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies:**
   ```bash
   cd ../client
   npm install
   ```

### Running the Application

**Terminal 1 - Start the server:**
```bash
cd server
npm run dev
# Server will run on http://localhost:5000
```

**Terminal 2 - Start the client:**
```bash
cd client
npm run dev
# Client will run on http://localhost:5173
```

Open your browser and navigate to `http://localhost:5173`

## 💻 Usage

1. **Enter a Username:** On the login screen, enter a unique username (2-20 characters)
2. **Join Chat:** Click "Join Chat" to enter the global chat room
3. **Send Messages:** Type a message and press Enter or click Send
4. **See Typing Indicators:** When other users type, you'll see a typing indicator
5. **React to Messages:** Click emoji buttons (👍, ❤️, 😂, 😮) to add reactions
6. **View Online Users:** See all connected users in the left sidebar
7. **Get Status Updates:** Receive notifications when users join or leave

## 🏗️ Architecture

### Server-Side (Node.js + Express + Socket.io)

**Socket Events:**
- `user_join` - User joins the chat
- `send_message` - Send a message to all users
- `private_message` - Send a private message
- `typing` - Notify when typing
- `disconnect` - User disconnects

**Features:**
- Real-time bidirectional communication
- User presence tracking
- Message history (last 100 messages)
- Typing status management
- Automatic cleanup on disconnect

### Client-Side (React + Vite + Socket.io)

**Components:**
- `AuthScreen` - User authentication
- `ChatContainer` - Main chat interface
- `MessageDisplay` - Display messages with reactions
- `MessageInput` - Message composition
- `UsersList` - Online users sidebar

**Features:**
- Custom `useSocket` hook for Socket.io integration
- Real-time state updates
- Auto-reconnection logic
- Local storage for username persistence
- Responsive design with CSS Grid

## 🔧 Configuration

### Server (.env)
```
PORT=5000
CLIENT_URL=http://localhost:5173
NODE_ENV=development
```

### Client (.env)
```
VITE_SOCKET_URL=http://localhost:5000
```

## 📦 Dependencies

### Server
- `express` - Web framework
- `socket.io` - Real-time communication
- `cors` - Cross-origin resource sharing
- `dotenv` - Environment variables
- `mongoose` - MongoDB ODM
- `nodemon` - Development server restart

### Client
- `react` - UI library
- `react-dom` - React DOM rendering
- `socket.io-client` - Socket.io client
- `vite` - Build tool and dev server

## 🎨 UI/UX Features

- **Modern Design:** Gradient backgrounds and smooth animations
- **Responsive Layout:** Works seamlessly on desktop and mobile
- **Real-time Feedback:** Typing indicators, connection status, notifications
- **Message Reactions:** Users can react with emojis
- **Auto-scroll:** Automatically scrolls to latest messages
- **User Presence:** Visual indicators for online/offline users
- **Input Validation:** Username validation with helpful error messages
- **Connection Status:** Visual indicator of connection state

## 🚀 Deployment

### Deploy Server to Render/Railway/Heroku
1. Create account on Render/Railway/Heroku
2. Connect GitHub repository
3. Set environment variables
4. Deploy

### Deploy Client to Vercel/Netlify
1. Build the client: `npm run build`
2. Deploy the `dist` folder to Vercel or Netlify
3. Update VITE_SOCKET_URL to production server URL

## 📝 API Reference

### Socket.io Events

**Client → Server:**
```javascript
socket.emit('user_join', username)
socket.emit('send_message', { message })
socket.emit('typing', true/false)
```

**Server → Client:**
```javascript
socket.on('user_list', users)
socket.on('receive_message', message)
socket.on('typing_users', typingUsers)
socket.on('user_joined', user)
socket.on('user_left', user)
```

## 🐛 Troubleshooting

### Connection Issues
- Ensure both server and client are running
- Check that ports 5000 (server) and 5173 (client) are available
- Verify CORS is properly configured
- Check browser console for error messages

### Message Not Sending
- Ensure you're connected (check status indicator)
- Verify Socket.io connection in browser DevTools
- Check server logs for errors

### Performance Issues
- Clear browser cache
- Restart server and client
- Check network tab in DevTools for slow requests

## 📚 Learning Resources

- [Socket.io Documentation](https://socket.io/docs/)
- [React Documentation](https://react.dev)
- [Express.js Guide](https://expressjs.com)
- [Vite Documentation](https://vitejs.dev)

## 🎯 Future Enhancements

- [ ] Private messaging between users
- [ ] Multiple chat rooms/channels
- [ ] Message persistence with MongoDB
- [ ] File/image sharing
- [ ] Read receipts for messages
- [ ] User profiles and avatars
- [ ] Message search functionality
- [ ] Sound notifications
- [ ] Voice/video chat
- [ ] Admin features for moderation

## ✅ Assignment Completion Checklist

- [x] Task 1: Project Setup
- [x] Task 2: Core Chat Functionality
- [x] Task 3: Advanced Chat Features (Message Reactions, Typing Indicators, Presence)
- [x] Task 4: Real-Time Notifications
- [x] Task 5: Performance and UX Optimization
- [x] Responsive design implemented
- [x] Error handling implemented
- [x] Code is well-commented
- [x] README with setup instructions

## 👨‍💻 Developer Notes

This project demonstrates:
- Real-time bidirectional communication with Socket.io
- React hooks for state management
- Responsive web design
- Event-driven architecture
- Error handling and user feedback
- Best practices for scalable applications

## 📄 License

This project is part of the PLP MERN Stack Development program.

## 🤝 Support

For issues or questions, please refer to the Week5-Assignment.md file or contact your instructor.
