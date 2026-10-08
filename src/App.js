import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./Components/Navbar/navbar";
import { Hero } from "./Components/Hero/hero";
import { Menu } from "./Components/Menu/menu";
import { Banner } from "./Components/Banner/bannering";
import { Banner2 } from "./Components/Banner/bannering2";
import { Banner3 } from "./Components/Banner/bannering3";
import { Footer } from "./Components/Footer/footer";
import { ApiFetch } from "./apifetch";
function App() {
  return (
    <div className="App overflow-x-hidden">
      <Navbar />
      <Hero />
      <Menu />
      <Banner />
      <Banner2 />
      <Banner3 />
      <Footer />
      {/* <ApiFetch /> */}
    </div>
  );
}

export default App;
