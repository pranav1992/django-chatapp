import React from "react";
import "./HomePage.css";
import SideBar from "../components.jsx/SideBar";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setUsers } from "../../../redux/slices/userSlice";
import Chatwindow from "../components.jsx/Chatwindow";

const HomePage = () => {
  return (
    <div>
      <div className="whatsapp-home position: fixed top-0 w-full">
        <SideBar />
        <Chatwindow />
      </div>
    </div>
  );
};
export default HomePage;
