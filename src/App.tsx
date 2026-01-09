import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Story } from "./components/Story";
import { Events } from "./components/Events";
import { Details } from "./components/Details";
import { RSVP } from "./components/RSVP";
import { Footer } from "./components/Footer";
import "./App.css";
import { useEffect, useRef } from "react";
import audioFile from "../public/music/a_thousand_year_song.mp3";

function App() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;

      // Only play music once per session (not on page reload)
      if (!sessionStorage.getItem("musicPlayed")) {
        audioRef.current.play().catch(() => {
          console.log("Autoplay was prevented");
        });
        sessionStorage.setItem("musicPlayed", "true");
      }
    }
  }, []);

  return (
    <div className="app">
      <audio ref={audioRef} autoPlay loop style={{ display: "none" }}>
        <source src={audioFile} type="audio/mpeg" />
      </audio>

      <Header />
      <Hero />
      <Story />
      <Events />
      <Details />
      <RSVP />
      <Footer />
    </div>
  );
}

export default App;
