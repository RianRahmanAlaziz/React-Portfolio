import "./App.css";
import Sidebar from "./layouts/Content/Sidebar/Sidebar";
import Header from "./layouts/Content/Header/Header";
import Home from "./layouts/page/Home";
import fullpage from 'fullpage.js';
import 'fullpage.js/dist/fullpage.css'; // Tambahkan stylesheet fullpage.js
import React, { useEffect } from "react";
import Contact from "./layouts/page/Contact";


function App() {
  useEffect(() => {
    new fullpage('#fullpage', {
      autoScrolling: true,
      navigation: false,
    });
  }, []);
  return (
    <>
      <Sidebar />
      <Header />
      <div
        style={{ height: "100%", position: "relative" }}>
        <div id="fullpage" className="fullpage-wrapper">
          <Home />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
