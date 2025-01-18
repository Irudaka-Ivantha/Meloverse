import React from "react";

const WelcomeSection = () => {
  return (
    <div className="p-4 bg-purple-600 text-white rounded-lg">
      <div className="relative">
        <img
          src="https://via.placeholder.com/400x200"
          alt="Welcome"
          className="rounded-lg"
        />
        <div className="absolute top-4 left-4 bg-black bg-opacity-50 p-2 rounded">
          <p>Welcome to your music haven!</p>
          <p>Discover and enjoy endless tunes. Your soundtrack starts here.</p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
