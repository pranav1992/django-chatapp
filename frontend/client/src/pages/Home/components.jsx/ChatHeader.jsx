import React from 'react'

const ChatHeader = () => {
  return (
    <div className="chat-header">
    <img
        src="chat-pic-url"
        alt="Chat Profile"
        className="chat-pic"
    />
    <div className="chat-info">
        <h4 className="chat-name">John Doe</h4>
        <p className="status">Online</p>
    </div>
</div>
  )
}

export default ChatHeader
