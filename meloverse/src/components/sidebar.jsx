import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-gradient-to-b from-purple-800 to-purple-900 text-white w-64 h-screen p-4">
      <h1 className="text-2xl font-bold mb-6">Melo Verse</h1>
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
          { name: "Help", icon: "❓" },
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
