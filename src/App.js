import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Presentation } from "./components/Presentation";
import { Links } from "./components/Links";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import ScrollButton from "./components/ScrollButton";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Links />
      <Presentation />
      <Contact />
      <ScrollButton />
      <Footer />
    </div>
  );
}

export default App;
