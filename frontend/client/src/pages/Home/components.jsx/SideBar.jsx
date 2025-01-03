import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { FaUserPlus } from "react-icons/fa";
import { setSearchUser } from "../../../redux/slices/userSlice";
import { fetchUsersChatroom } from "../../../api";
import { setUsers } from "../../../redux/slices/userSlice";

const SideBar = () => {
  const user = useSelector((state) => state.user);
  const userDispatch = useDispatch();
  let dummy = [...user.user];

  const fetchUsers = async () => {
    try{
      const response = await fetchUsersChatroom("8de124ba-cd13-42cd-a380-29ae0661e924");
      
      if (response.status === 200) {
        console.log("test 1")
        console.log(response.data)
        dispatch(setUsers(response.data));
       
        console.log("test")
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
                  <div key={i} className="chat-item">
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
