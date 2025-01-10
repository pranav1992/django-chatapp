import React from 'react'
import { useState } from 'react';

const ChatMessageInput = () => {
  const [message, setMessage] = useState('');
  const handleSend = () => {
    console.log(message); // Logs the input value
    setMessage(''); // Clears the input after sending (optional)
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend(); // Trigger sending when Enter is pressed
    }
  };
  return (
    <div className="message-input-section">
    <input
        type="text"
        placeholder="Type a message"
        className="message-input"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
    />
    <button className="send-button" onClick={handleSend}>➤</button>
    </div>
  )
}

export default ChatMessageInput
