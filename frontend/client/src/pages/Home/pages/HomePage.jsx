import React from 'react';
import './HomePage.css'
import SideBar from '../components.jsx/SideBar';
import ChatHeader from '../components.jsx/ChatHeader';
import ChatMessages from '../components.jsx/ChatMessages';
import ChatMessageInput from '../components.jsx/ChatMessageInput';
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';
import { setUsers } from '../../../redux/slices/userSlice';


const HomePage = () => {
  const user = useSelector((state) => state.user)

  const dispatch = useDispatch()

  const fetchUsers = async () =>{
    const url = "http://127.0.0.1:8000/user/"
    try {
      const response = await axios({
        method: "get",
        url: url,
      });
      if (response.status === 200){
        dispatch(setUsers(response.data['user']))
      }
    } catch (error) {
      
    }
  }

  useEffect(()=>{
    fetchUsers()
  }, [])
  return (
      <div className="whatsapp-home">
        <SideBar />
        <div className="chat-window">
          <ChatHeader />
          <ChatMessages />
          <ChatMessageInput/>
        </div>
    </div>
    )
}
export default HomePage







