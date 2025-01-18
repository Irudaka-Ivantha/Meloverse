import React from "react";
import "../assets/css/global.css"; // Import the Tailwind CSS file
import Music from "../assets/images/music.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Logo and Title */}
      <div className="flex items-center space-x-3 mb-6">
        <img src={Music} alt="Music Logo" className="w-8 h-8" />
        <p className="text-xl font-bold">Melo Verse</p>
      </div>

      {/* Navigation */}
      <ul className="space-y-4">
        {[ 
          { name: "Home", icon: "🏠" }, 
          { name: "Albums", icon: "📀" }, 
          { name: "Songs", icon: "🎵" },
          { name: "Artists", icon: "🎤" },
          { name: "Liked", icon: "❤️" }, 
          { name: "Downloads", icon: "⬇️" }, 
          { name: "Store", icon: "🛒" },
          { name: "Setting", icon: "⚙️" },
          { name: "Help", icon: "❓" }
        ].map((item) => (
          <li key={item.name} className="flex items-center space-x-2 hover:text-purple-300">
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
