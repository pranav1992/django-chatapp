import React from 'react'
import { useSelector } from 'react-redux'

const ChatHeader = () => {

  const chatroom = useSelector((state)=> state.chatroom)
  return (
    <div className="chat-header">
    <img
        src="chat-pic-url"
        alt="Chat Profile"
        className="chat-pic"
    />
    <div className="chat-info">
        <h4 className="chat-name">{chatroom.chatroom.name}</h4>
        <p className="status">Online</p>
    </div>
</div>
  )
}

export default ChatHeader
