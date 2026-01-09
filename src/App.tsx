import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Story } from "./components/Story";
import { Events } from "./components/Events";
import { Details } from "./components/Details";
import { RSVP } from "./components/RSVP";
import { Footer } from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
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
