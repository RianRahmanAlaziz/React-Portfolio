import "./App.css";
import Home from "./layouts/page/Home";
import ReactFullpage from '@fullpage/react-fullpage';
import React, { useEffect } from "react";
import Contact from "./layouts/page/Contact";
import Header from "./layouts/Components/Header";
import Sidebar from "./layouts/Components/Sidebar";
import About from "./layouts/page/About";
import Project from "./layouts/page/Project";


function App() {
  const fullpageOptions = {
    anchors: ["home", "about", "projects", "contact"],
    scrollingSpeed: 1000,
    menu: "#sidebar",
    lockAnchors: false,

  };
  return (
    <>
      <Header />
      <Sidebar />
      <div>
        <ReactFullpage
          {...fullpageOptions}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <Home />
                <About />
                <Project />
                <Contact />
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
    </>
  );
}

export default App;
