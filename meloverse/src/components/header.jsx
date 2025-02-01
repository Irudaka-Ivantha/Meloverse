import React from "react";
import Search from "../assets/images/Search.svg";
import Profile from "../assets/images/profile.svg";

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-[#9A4A92] p-4 text-white">
      <div className="relative w-1/5">
        <input
          type="text"
          placeholder="Songs, Artists, Albums"
          className="w-full p-3 pl-4 pr-12 rounded bg-[linear-gradient(90deg,_#BF49A1_0%,_#946187_56.72%,_#737373_100%)] text-white placeholder-white font-bold rounded-[25px] focus:outline-none focus:ring-4 focus:ring-pink-500 focus:ring-opacity-50 transition-all duration-200"
        />
        <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
          <img src={Search} alt="Search Icon" className="w-5 h-5" />
        </span>
      </div>

      <div className="flex items-center space-x-2 p-2 rounded bg-[linear-gradient(90deg,_#BF49A1_0%,_#946187_56.72%,_#737373_100%)] rounded-[25px] w-50">
        <img src={Profile} alt="Profile" className="w-10 h-10 rounded-full" />
        <div>
          <p className="font-semibold text-white">Devid Fernando</p>
          <p className="text-sm text-gray-300">david@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
