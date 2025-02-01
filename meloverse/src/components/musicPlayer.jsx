import React from "react";

const MusicPlayer = () => {
  return (
    <div c className="text-white fixed bottom-0 w-full p-4 flex justify-between items-center"
    style={{
      background: "linear-gradient(180deg, rgba(207, 77, 170, 0.8) 0.01%, rgba(154, 67, 141, 0.8) 0.02%, rgba(247, 84, 191, 0.8) 0.03%, rgba(120, 61, 123, 0.8) 0.04%, rgba(197, 75, 164, 0.8) 9.1%, rgba(102, 58, 113, 0.8) 34.1%, rgba(66, 51, 94, 0.8) 66.1%, rgba(16, 42, 67, 0.8) 94.6%)",
    }}>
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
