import { useState, useEffect } from 'react'
import { useSocket } from './socket/socket'
import ChatContainer from './components/ChatContainer'
import AuthScreen from './components/AuthScreen'

function App() {
  const [username, setUsername] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const socket = useSocket()

  // Check if user is already authenticated
  useEffect(() => {
    const savedUsername = localStorage.getItem('chatUsername')
    if (savedUsername) {
      setUsername(savedUsername)
      setIsAuthenticated(true)
      socket.connect(savedUsername)
    }
  }, [])

  const handleLogin = (name) => {
    setUsername(name)
    setIsAuthenticated(true)
    localStorage.setItem('chatUsername', name)
    socket.connect(name)
  }

  const handleLogout = () => {
    localStorage.removeItem('chatUsername')
    socket.disconnect()
    setUsername(null)
    setIsAuthenticated(false)
  }

  if (!isAuthenticated) {
    return <AuthScreen onLogin={handleLogin} />
  }

  return (
    <ChatContainer username={username} onLogout={handleLogout} />
  )
}

export default App
