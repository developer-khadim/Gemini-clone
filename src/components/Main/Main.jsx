import React from "react";
import { assets } from "../../assets/assets";

const Main = () => {
  return (
    <main className="flex-1  min-h-[100vh] pb-[15vh] relative  ">
      {/* Nav */}
      <div className="flex items-center justify-between text-[22px] p-5 text-[#585858] w-full sm:w-[80vw] overflow-x-hidden">
        <p>Gemini</p>
        <img
          className="w-[40px] sm:w-[50px] rounded-full fixed top-5 right-5"
          src={assets.khadim_user}
          alt="user"
        />
      </div>
      {/* Hero */}
      <div className="max-w-[900px] m-auto px-5 my-20 sm:px-0">
        <div className="text-[36px] sm:text-[56px] text-[#c4c7c5] font-medium p-5">
          <p>
            <span className="gradient-text">Hello, Khadim.</span>
          </p>
          <p  >How can I help you today?</p>
        </div>
        <div className="grid card gap-4 p-5 my-10 ">
          <div className="h-[200px] p-4 bg-[#f0f4f9] rounded-xl relative cursor-pointer">
            <p className="text-[18px] text-[#585858]" >Suggest beautiful places to see on an upcoming road trip</p>
            <img src={assets.compass_icon} alt="compass" />
          </div>
          <div className="h-[200px] p-4 bg-[#f0f4f9] rounded-xl relative cursor-pointer">
            <p className="text-[18px] text-[#585858]" >Briefly summarize this concept: urban planning</p>
            <img src={assets.bulb_icon} alt="bulb" />
          </div>
          <div className="h-[200px] p-4 bg-[#f0f4f9] rounded-xl relative cursor-pointer">
            <p className="text-[18px] text-[#585858]" >Brainstorm team bonding activities for our work retreat</p>
            <img src={assets.message_icon} alt="message" />
          </div>
          <div className="h-[200px] p-4 bg-[#f0f4f9] rounded-xl relative cursor-pointer">
            <p className="text-[18px] text-[#585858]" >Improve the readability of the following code</p>
            <img src={assets.code_icon} alt="code" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
