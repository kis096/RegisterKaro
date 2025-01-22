import React from 'react';
import './index.css';  // Import your CSS file here
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Home from './Components/Home';
import OurService from './Components/OurService';
import About from './Components/About';
import Contact from './Components/Contact';
import Blog from './Components/Blog';
import TalkExpert from './Components/TalkExpert';

import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  const theme = {
    colors: {
      heading: "black",
      text: "rgba(29, 29, 29, .8)",
      black: "#212529",
      helper: "#8490ff",
      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98,84,243,0.5)",
      hr: "#ffffff",
      gradient: "linear-gradient(90deg, gray 0%, orange 100%)", // Updated gradient
      shadow: "rgba(0,0,0,0.02) 0px 1px 3px 0px , rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
    },
    media: {
      mobile: "768px",
      tab: "998px"
    }
  };

  return (
    <ThemeProvider theme={theme}> {/* Wrap your app with ThemeProvider */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<OurService />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/talk" element={<TalkExpert />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
