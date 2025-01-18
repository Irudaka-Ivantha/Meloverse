import React from "react";

const MusicPlayer = () => {
  return (
    <div className="bg-purple-800 text-white fixed bottom-0 w-full p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img
          src="https://via.placeholder.com/50"
          alt="Current Song"
          className="w-12 h-12 rounded"
        />
        <div className="ml-4">
          <p className="font-semibold">Stay Basic</p>
          <p className="text-sm">Lorem ipsum dolor sit amet</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button>⏮️</button>
        <button>⏯️</button>
        <button>⏭️</button>
      </div>
    </div>
  );
};

export default MusicPlayer;
