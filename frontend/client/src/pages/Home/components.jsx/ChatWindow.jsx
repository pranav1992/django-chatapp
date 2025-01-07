import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ChatHeader from "./ChatHeader"
import ChatMessages from "./ChatMessages"
import SeachUser from "./SearchUsers";
import ChatMessageInput from "./ChatMessageInput"
import { setUsers } from "../../../redux/slices/userSlice";
import { fetchUser } from "../../../api";

const Chatwindow = () => {
    const user = useSelector((state) => state.user);

    const dispatch = useDispatch();

    const fetchUsers = async () => {
      try{
        const response = await fetchUser();
        if (response.status === 200) {
          // dispatch(setUsers(response.data["user"]));
        }
      }catch{
        console.log("something happened wrong")
      }
    };
  
    useEffect(() => {
      fetchUsers();
    }, []);

  return (
    <div className="chat-window">
      <ChatHeader />
      <div className="flex h-full">
        <ChatMessages />
        {user.searchUserOpen && <SeachUser />}
      </div>
      <ChatMessageInput />
    </div>
  );
};

export default Chatwindow;
