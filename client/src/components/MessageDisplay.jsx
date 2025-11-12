import { useEffect, useState } from 'react'

function MessageDisplay({ messages, currentUsername, typingUsers, messagesEndRef }) {
  const [localReactions, setLocalReactions] = useState({})

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    })
  }

  const addReaction = (messageId, emoji) => {
    setLocalReactions((prev) => ({
      ...prev,
      [messageId]: {
        ...prev[messageId],
        [emoji]: (prev[messageId]?.[emoji] || 0) + 1,
      },
    }))
  }

  return (
    <div className="messages-container">
      {messages.length === 0 ? (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            color: '#999',
            textAlign: 'center',
          }}
        >
          <div>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>👋</div>
            <p>No messages yet. Start a conversation!</p>
          </div>
        </div>
      ) : (
        messages.map((msg) => (
          <div key={msg.id}>
            {msg.system ? (
              <div className="system-message">{msg.message}</div>
            ) : (
              <div className={`message ${msg.senderId === currentUsername ? 'own' : 'other'}`}>
                <div>
                  <div className="message-sender">
                    {msg.senderId === currentUsername ? 'You' : msg.sender}
                  </div>
                  <div className="message-bubble">
                    {msg.message}
                    <div className="message-time">{formatTime(msg.timestamp)}</div>

                    {localReactions[msg.id] && (
                      <div className="message-reactions">
                        {Object.entries(localReactions[msg.id]).map(([emoji, count]) => (
                          <div
                            key={emoji}
                            className="reaction"
                            onClick={() => addReaction(msg.id, emoji)}
                          >
                            <span className="reaction-emoji">{emoji}</span>
                            <span className="reaction-count">{count}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      gap: '8px',
                      marginTop: '6px',
                    }}
                  >
                    {['👍', '❤️', '😂', '😮'].map((emoji) => (
                      <button
                        key={emoji}
                        className="add-reaction-btn"
                        onClick={() => addReaction(msg.id, emoji)}
                        title={`React with ${emoji}`}
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))
      )}

      {typingUsers.length > 0 && (
        <div className="message other">
          <div className="typing-indicator">
            <div className="typing-dot"></div>
            <div className="typing-dot"></div>
            <div className="typing-dot"></div>
            <span className="typing-label">
              {typingUsers.length === 1
                ? `${typingUsers[0]} is typing`
                : `${typingUsers.length} users are typing`}
            </span>
          </div>
        </div>
      )}

      <div ref={messagesEndRef} />
    </div>
  )
}

export default MessageDisplay
