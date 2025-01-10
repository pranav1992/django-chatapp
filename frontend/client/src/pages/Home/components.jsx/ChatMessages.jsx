import React from 'react'

const ChatMessages = ({messages, userId}) => {
  console.log(messages)
  return (
  <div className="chat-messages position: relative top-0">
    {
      messages?.map((e, i)=>
        userId === messages.sender ?
        <div key={i} className="message sent text-black">{e.content}</div>  :
        <div key={i} className="message received text-black">{e.content}</div>
      )
    }

    {/* Repeat messages for chat history */}
    </div>
  )
}

export default ChatMessages
