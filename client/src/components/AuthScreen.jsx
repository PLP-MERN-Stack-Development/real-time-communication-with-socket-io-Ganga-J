import { useState } from 'react'

function AuthScreen({ onLogin }) {
  const [username, setUsername] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!username.trim()) {
      setError('Username cannot be empty')
      return
    }

    if (username.trim().length < 2) {
      setError('Username must be at least 2 characters')
      return
    }

    if (username.trim().length > 20) {
      setError('Username cannot exceed 20 characters')
      return
    }

    onLogin(username.trim())
  }

  return (
    <div className="auth-container">
      <div className="login-card">
        <h1>💬 Chat App</h1>
        <p>Welcome to Real-Time Chat with Socket.io</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Enter your username:</label>
            <input
              type="text"
              id="username"
              placeholder="e.g., John, Sarah, etc."
              value={username}
              onChange={(e) => {
                setUsername(e.target.value)
                setError('')
              }}
              autoFocus
            />
          </div>

          {error && <div style={{ color: '#f44336', fontSize: '14px', marginBottom: '20px' }}>{error}</div>}

          <button type="submit" className="submit-btn">
            Join Chat
          </button>
        </form>

        <p style={{ marginTop: '30px', fontSize: '12px', color: '#999', textAlign: 'center' }}>
          This is a real-time chat application powered by Socket.io. 
          Multiple users can join and chat instantly!
        </p>
      </div>
    </div>
  )
}

export default AuthScreen
