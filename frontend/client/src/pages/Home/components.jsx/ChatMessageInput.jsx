import React from 'react'
import { useSelector, useDispatch } from "react-redux";

const ChatMessageInput = () => {
 const user = useSelector((state) => state.user)
  return (
    <div className="message-input-section">
    <input
        type="text"
        placeholder="Type a message"
        className="message-input"
    />
    <button className="send-button" onClick={()=>console.log(user.user)}>➤</button>
    </div>
  )
}

export default ChatMessageInput
