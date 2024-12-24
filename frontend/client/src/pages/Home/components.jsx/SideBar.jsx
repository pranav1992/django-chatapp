import React from "react";
import { useSelector } from "react-redux";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { FaUserPlus } from "react-icons/fa";

const SideBar = () => {
  const user = useSelector((state) => state.user);
  let dummy = [...user.user];
  console.log(dummy);
  return (
    <div className="sidebar">
      <div className="grid grid-cols-[48px,1fr] h-full">

        {/* side panel options*/}
        <div className="bg-slate-200 h-full rounded-tr-lg rounded-br-lg py-5 px-2 pt-8 flex flex-col justify-between">
        <IoChatbubbleEllipsesSharp size={30} color="black"/>
        <FaUserPlus size={30} color="black"/>
        </div>

        <div>
          <div className="profile-section">
            <span >Chats</span>
            <button className="settings-button">⚙</button>
          </div>
          <div className="search-section">
            <input
              type="text"
              placeholder="Search or start new chat"
              className="search-bar"
            />
          </div>
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
                    <h4 className="chat-name">{e.username}</h4>
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
  );
};

export default SideBar;
