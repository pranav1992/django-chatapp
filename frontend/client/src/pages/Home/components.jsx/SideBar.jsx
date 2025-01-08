import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { FaUserPlus } from "react-icons/fa";
import { setSearchUser } from "../../../redux/slices/userSlice";
import { fetchUsersChatroom } from "../../../api";
import { fetchToken } from "../../../api";
import { setUsers } from "../../../redux/slices/userSlice";
import { setChatroom } from "../../../redux/slices/chatroomSlice";
import { setAuth } from "../../../redux/slices/authSlice";

const SideBar = () => {
  const user = useSelector((state) => state.user);
  const useAuth = useSelector((state)=> state.auth)
  const chatroom = useSelector((state)=> state.chatroom)
  const dispatch = useDispatch();
  let dummy = [...user.user];

  const fetchUsers = async () => {
    try{
      const response = await fetchUsersChatroom("8de124ba-cd13-42cd-a380-29ae0661e924");
      console.log(response.status)
      if (response.status === 200) {
        dispatch(setUsers(response.data));
      }
    }catch{
      console.log("something happened wrong")
    }
  };

  useEffect(()=>{
    fetchUsers();
  },[])

  return (
    <div className="sidebar">
      <div className="grid grid-cols-[48px,1fr] h-full">
        {/* side panel options*/}
        <div className="bg-slate-200 h-screen rounded-tr-lg rounded-br-lg py-5 px-2 pt-8 flex flex-col justify-between">
          <IoChatbubbleEllipsesSharp size={30} color="black" />
          <div
            onClick={() => {
              userDispatch(setSearchUser());
            }}
          >
            <FaUserPlus size={30} color="black" />
          </div>
        </div>

        {/* sidebar */}
        <div>
          <div className="profile-section">
            <span>Chats</span>
            <button className="settings-button">⚙</button>
          </div>
          <div className="search-section">
            <input
              type="text"
              placeholder="Search or start new chat"
              className="search-bar"
            />
          </div>
          <div className="chat-list-container h-screen">
            <div className="chat-list">
              {dummy.map((e, i) => {
                return (
                  <div key={i} className="chat-item" onClick={(val)=>{
            
                    dispatch(setChatroom(e.chat))
                    console.log("chatroom ==> ")
                    console.log(chatroom)
                    }}>
                    <img
                      src="chat-pic-url"
                      alt="Chat Profile"
                      className="chat-pic"
                    />
                    <div className="chat-details">
                      <h4 className="chat-name">{e.chat.name}</h4>
                      <p className="last-message">Hey, how are you?</p>
                    </div>
                    <span className="chat-time">10:30 AM</span>
                  </div>
                );
              })}

              {/* Repeat chat-item for other chats */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
