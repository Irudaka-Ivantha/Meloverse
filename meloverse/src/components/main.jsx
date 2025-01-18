import React from "react";
import Sidebar from "./sidebar";
import Header from "./header";
import WelcomeSection from "./welcomeSection";
import TopArtists from "./topArtists";
import MusicPlayer from "./musicPlayer";

const Main = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-purple-900">
        <Header />
        <div className="p-4">
          <WelcomeSection />
          <TopArtists />
        </div>
      </div>
      <MusicPlayer />
    </div>
  );
};

export default Main;
