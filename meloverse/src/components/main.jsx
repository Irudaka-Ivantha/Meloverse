import React from "react";
import Sidebar from "./sidebar";
import Header from "./header";
import WelcomeSection from "./welcomeSection";
import TopArtists from "./topArtists";
import MusicPlayer from "./musicPlayer";
import "../assets/css/global.css";

const Main = () => {
  return (
    <div className="main-container flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Content and Music Player Area */}
      <div className="flex flex-col w-full">
        {/* Header and Content */}
        <div className="content-area flex-grow">
          <Header />
          {/* Welcome Section */}
          <WelcomeSection />
          {/* Add other sections like TopArtists here */}
        </div>

        {/* Music Player */}
        <div className="music-player-container w-full">
          <MusicPlayer />
        </div>
      </div>
    </div>
  );
};

export default Main;
