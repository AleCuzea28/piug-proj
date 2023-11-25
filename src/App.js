import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Presentation } from "./components/Presentation";
import { Links } from "./components/Links";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import ScrollButton from "./components/ScrollButton";
import { useState } from "react";

function App() {
  const [lightTheme, setTheme] = useState(false);
  const [searchBox, setSearchBox] = useState("");

  return (
    <div className="App">
      <NavBar
        lightTheme={lightTheme}
        setTheme={setTheme}
        searchBox={searchBox}
        setSearchBox={setSearchBox}
      />
      <Banner lightTheme={lightTheme} searchBox={searchBox} />
      <Links />
      <Presentation />
      <Contact />
      <ScrollButton />
      <Footer />
    </div>
  );
}

export default App;
