import { useEffect, useState } from 'react'

function UsersList({ users, currentUsername, selectedUser, onSelectUser, onLogout, isConnected }) {
  const [filteredUsers, setFilteredUsers] = useState([])
  const [unreadCount, setUnreadCount] = useState({})

  useEffect(() => {
    const sorted = [...users].sort((a, b) => {
      // Current user first
      if (a.username === currentUsername) return -1
      if (b.username === currentUsername) return 1
      // Then alphabetically
      return a.username.localeCompare(b.username)
    })
    setFilteredUsers(sorted)
  }, [users, currentUsername])

  return (
    <aside className="sidebar">
      <div className="user-info">
        <h3>You</h3>
        <p>{currentUsername}</p>
        <div className="connection-status">
          <div className={`status-dot ${isConnected ? 'connected' : 'disconnected'}`}></div>
          <span>{isConnected ? 'Online' : 'Offline'}</span>
        </div>
      </div>

      <div className="users-list-header">
        Online Users ({filteredUsers.length})
      </div>

      <div className="users-list">
        {filteredUsers.length === 0 ? (
          <div style={{ color: '#999', fontSize: '12px', textAlign: 'center', padding: '20px' }}>
            No other users online
          </div>
        ) : (
          filteredUsers.map((user) => {
            const isCurrentUser = user.username === currentUsername
            return (
              <div
                key={user.id}
                className={`user-item ${isCurrentUser ? 'offline' : 'online'} ${
                  selectedUser?.id === user.id ? 'selected' : ''
                }`}
                onClick={() => {
                  if (!isCurrentUser) {
                    onSelectUser(user)
                  }
                }}
                title={user.username}
              >
                <span className="user-item-name">
                  {isCurrentUser ? `${user.username} (You)` : user.username}
                </span>
                {unreadCount[user.id] > 0 && (
                  <span
                    style={{
                      background: '#f44336',
                      color: 'white',
                      borderRadius: '12px',
                      padding: '2px 6px',
                      fontSize: '11px',
                      fontWeight: 'bold',
                      minWidth: '20px',
                      textAlign: 'center',
                    }}
                  >
                    {unreadCount[user.id]}
                  </span>
                )}
              </div>
            )
          })
        )}
      </div>

      <button className="logout-btn" onClick={onLogout}>
        Leave Chat
      </button>
    </aside>
  )
}

export default UsersList
