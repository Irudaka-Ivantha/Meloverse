import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-purple-700 p-4 text-white">
      <input
        type="text"
        placeholder="Songs, Artists, Albums"
        className="w-1/2 p-2 rounded bg-purple-600 text-white placeholder-gray-300"
      />
      <div className="flex items-center space-x-2">
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="font-semibold">Devid Fernando</p>
          <p className="text-sm">david@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
