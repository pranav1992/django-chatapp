import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import ChatHeader from "./ChatHeader"
import ChatMessages from "./ChatMessages"
import SeachUser from "./SearchUsers";
import ChatMessageInput from "./ChatMessageInput"
import { useParams } from "react-router-dom";


const Chatwindow = () => {
    const user = useSelector((state) => state.user);
    const auth = useSelector((state)=> state.auth)
    const useMessages = useSelector((state) => state.messages)
    const { chatroom } = useParams();
    const [messages, setMessage] = useState([])
    useEffect(() => {
      setMessage(useMessages.chatMessages[chatroom])
    }, [useMessages.chatMessages[chatroom]]);

  return (
    <div className="chat-window">
      <ChatHeader />
      <div className="flex h-full">
        <ChatMessages messages={messages} userId={auth.profile.id}/>
        {user.searchUserOpen && <SeachUser />}
      </div>
      <ChatMessageInput />
    </div>
  );
};
export default Chatwindow;
