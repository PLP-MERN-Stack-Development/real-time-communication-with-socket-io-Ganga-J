import { useState, useEffect, useRef } from 'react'
import { useSocket } from '../socket/socket'
import MessageDisplay from './MessageDisplay'
import UsersList from './UsersList'
import MessageInput from './MessageInput'

function ChatContainer({ username, onLogout }) {
  const {
    socket,
    isConnected,
    messages,
    users,
    typingUsers,
    sendMessage,
    setTyping,
  } = useSocket()

  const [selectedUser, setSelectedUser] = useState(null)
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)
  const typingTimeoutRef = useRef(null)

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSendMessage = (message) => {
    if (message.trim()) {
      sendMessage(message)
    }
  }

  const handleTyping = () => {
    if (!isTyping) {
      setIsTyping(true)
      setTyping(true)
    }

    // Clear existing timeout
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current)
    }

    // Set new timeout to stop typing indicator after 2 seconds of inactivity
    typingTimeoutRef.current = setTimeout(() => {
      setIsTyping(false)
      setTyping(false)
    }, 2000)
  }

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current)
      }
    }
  }, [])

  return (
    <div className="chat-app">
      <UsersList
        users={users}
        currentUsername={username}
        selectedUser={selectedUser}
        onSelectUser={setSelectedUser}
        onLogout={onLogout}
        isConnected={isConnected}
      />

      <div className="chat-main">
        <div className="chat-header">
          <div>
            <h2>Global Chat</h2>
            <div className="room-info">Everyone can see these messages</div>
          </div>
          <div className="connection-status">
            <div className={`status-dot ${isConnected ? 'connected' : 'disconnected'}`}></div>
            <span>{isConnected ? 'Connected' : 'Disconnected'}</span>
          </div>
        </div>

        <MessageDisplay
          messages={messages}
          currentUsername={username}
          typingUsers={typingUsers}
          messagesEndRef={messagesEndRef}
        />

        <MessageInput
          onSendMessage={handleSendMessage}
          onTyping={handleTyping}
          isConnected={isConnected}
        />
      </div>
    </div>
  )
}

export default ChatContainer
