import { useState } from 'react'

function MessageInput({ onSendMessage, onTyping, isConnected }) {
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    setMessage(e.target.value)
    onTyping()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (message.trim() && isConnected) {
      onSendMessage(message)
      setMessage('')
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  return (
    <div className="input-area">
      <form onSubmit={handleSubmit} className="input-wrapper" style={{ width: '100%' }}>
        <textarea
          className="message-input"
          placeholder={isConnected ? 'Type a message...' : 'Disconnected. Reconnecting...'}
          value={message}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          disabled={!isConnected}
          rows="1"
        />
        <button
          type="submit"
          className="send-btn"
          disabled={!message.trim() || !isConnected}
        >
          Send
        </button>
      </form>
    </div>
  )
}

export default MessageInput
