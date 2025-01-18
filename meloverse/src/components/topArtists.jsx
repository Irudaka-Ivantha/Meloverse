import React from "react";

const TopArtists = () => {
  const artists = [
    "Selena Gomez",
    "Taylor Swift",
    "Ed Sheeran",
    "Zayn Malik",
    "Billie Eilish",
    "Bruno Mars",
    "Katy Perry",
  ];

  return (
    <div className="mt-4">
      <h2 className="text-lg font-bold text-white mb-4">Top Artists</h2>
      <div className="flex space-x-4">
        {artists.map((artist, index) => (
          <div key={index} className="text-center">
            <img
              src="https://via.placeholder.com/60"
              alt={artist}
              className="w-16 h-16 rounded-full"
            />
            <p className="text-sm text-white mt-2">{artist}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopArtists;
