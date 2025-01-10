import React, { useEffect } from "react";
import "./HomePage.css";
import Chatwindow from "../components.jsx/ChatWindow";

const HomePage = () => {
  return (
    <div>
      <div className="whatsapp-home position: fixed left-1/4 top-0 w-3/4">
        {/* <SideBar /> */}
        <Chatwindow />
      </div>
    </div>
  );
};
export default HomePage;