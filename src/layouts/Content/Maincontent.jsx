import ReactFullpage from '@fullpage/react-fullpage';
import React from "react";
import Home from '../page/Home';
import About from '../page/About';
import Project from '../page/Project';
import Contact from '../page/Contact';
import Headers from '../Components/Header';
import Sidebar from '../Components/Sidebar';


function Maincontent() {
    const fullpageOptions = {
        anchors: ["home", "about", "projects", "contact"],
        scrollingSpeed: 1000,
        menu: "#sidebar",
        lockAnchors: false,

    };
    return (
        <>
            <Headers />
            {/* <Sidebar /> */}
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
    )
}

export default Maincontent