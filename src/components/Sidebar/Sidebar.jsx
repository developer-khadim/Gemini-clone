import React, { useState } from "react";
import { assets } from "../../assets/assets";

const Sidebar = () => {
    const [extended, setExtended] = useState(false)
  return (
    <div className={`sidebar min-h-[100vh] inline-flex flex-col justify-between px-[15px] bg-[#f0f4f9] py-[25px] ${extended ? 'items-start' : 'items-center'} ${extended ? 'w-[230px]' : 'w-[60px] sm:w-[80px]'}`}>
      <div>
        <img
          className="w-[20px] block ml-[10px] cursor-pointer "
          src={assets.menu_icon}
          alt="Menu"
          onClick={() => setExtended(!extended)}
        />
        <div className="mt-[50px] inline-flex items-center gap-2 py-[10px] px-[15px] bg-[#e6eaf1] rounded-[50px] text-[14px] text-gray-700 cursor-pointer">
          <img className="w-[20px]" src={assets.plus_icon} alt="plus" />
           {extended ? <p>New Chat</p> : null} 
        </div>
        {extended ? (
          <div className="flex flex-col">
            <p className="mt-[30px] mb-[20px] text-gray-700">Recent</p>
            <div className="flex items-center gap-2 p-[10px] pr-[40px] rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
              <img
                className="w-[20px]"
                src={assets.message_icon}
                alt="Message Icon"
              />
              <p>What is react ...</p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="flex flex-col ">
        <div className="flex items-center gap-2 p-[10px] rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
          <img className="w-[20px]" src={assets.question_icon} alt="?" />
           {extended ? <p>Help</p> : null} 
        </div>
        <div className="flex items-center gap-2 p-[10px] rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
          <img className="w-[20px]" src={assets.history_icon} alt="?" />
           {extended ? <p>Activity</p> : null} 
        </div>
        <div className="flex items-center gap-2 p-[10px] rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
          <img className="w-[20px]" src={assets.setting_icon} alt="?" />
           {extended ? <p>Settings</p> : null} 
        </div>
      </div>
    </div>
  );
};

export default Sidebar;