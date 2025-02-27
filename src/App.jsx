import "./App.css";
import Sidebar from "./layouts/Content/Sidebar/Sidebar";
import Header from "./layouts/Content/Header/Header";
import Home from "./layouts/page/Home";
import ReactFullpage from '@fullpage/react-fullpage';
import React, { useEffect } from "react";
import Contact from "./layouts/page/Contact";


function App() {
  const fullpageOptions = {
    anchors: ["home", "about", "projects", "contact"],
    scrollingSpeed: 1000,
    licenseKey: "gplv3-license",
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
                <div className="section">
                  <Home />
                </div>
                <div className="section">
                  <Contact />
                </div>
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
    </>
  );
}

export default App;
