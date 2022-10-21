import { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Index from "./Components/Index/Index";
import Navbar from "./Components/Navbar/Navbar";
import Portfolio from "./Components/Portfolio/Portfolio";
import Resume from "./Components/Resume/Resume";
import Work from "./Components/Work/Work";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Index />}></Route>
            <Route path="/home" element={<Index />}></Route>
            <Route path="/work" element={<Work />}></Route>
            <Route path="/portfolio" element={<Portfolio />}></Route>
            <Route path="/resume" element={<Resume />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
