import React from "react";
import "../assets/css/global.css"; // Import the Tailwind CSS file
import Music from "../assets/images/music.svg";
import Home from "../assets/images/home.svg";
import Album from "../assets/images/album.svg";
import Song from "../assets/images/songs.svg";
import Artist from "../assets/images/artist.svg";
import Like from "../assets/images/liked.svg";
import Download from "../assets/images/downloads.svg";
import Store from "../assets/images/store.svg";
import Setting from "../assets/images/Settings.svg";
import Help from "../assets/images/Help.svg";

const Sidebar = () => {
  const navItems = [
    { name: "Home", icon: Home },
    { name: "Albums", icon: Album },
    { name: "Songs", icon: Song },
    { name: "Artists", icon: Artist },
    { name: "Liked", icon: Like },
    { name: "Downloads", icon: Download },
    { name: "Store", icon: Store },
    { name: "Setting", icon: Setting }, // No image provided for Setting
    { name: "Help", icon: Help }, // No image provided for Help
  ];
  return (
    <div className="sidebar">
      {/* Logo and Title */}
      <div className="flex items-center space-x-2">
        <img src={Music} alt="Music Logo" className="w-8 h-8" />
        <p className="font-bold text-[28px]">Melo Verse</p>
      </div>

      {/* Navigation */}
      <ul className="space-y-8 mt-6 navBar">
        {navItems.map((item) => (
          <li
            key={item.name}
            className="flex items-center space-x-2 hover:text-red cursor-pointer ml-12 hover:font-bold hover:text-purple-400"
          >
            {item.icon && (
              <img src={item.icon} alt={item.name} className="w-6 h-6" />
            )}
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
