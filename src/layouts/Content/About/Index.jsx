import React from 'react'
import FixButton from '../../Components/FixButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Header from '../../Components/Header';
import Skills from '../About/Components/Skills/Skills'
import Experience from './Components/Experience';
import Education from './Components/Education';
import Footer from '../Project/Footer';

function Index() {
    return (
        <>
            <Header />
            <main
                style={{
                    backgroundImage: "url('/image/bg-papper.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
                className="overflow-hidden">
                <FixButton href="/#about">
                    <FontAwesomeIcon
                        icon={faChevronLeft}
                        className="text-[#101400] pr-10"
                    />
                </FixButton>

                {/* end hero */}

                {/* about */}
                {/* <About /> */}
                {/* end about */}

                {/* skills */}
                <Skills />
                {/* end skills */}

                {/* experience */}
                <Experience />
                {/* end experience */}

                {/* Education */}
                <Education />
                {/* end Education */}

                {/* Quote */}
                {/* <Quote /> */}
                {/* end Quote */}

            </main>
            <Footer />
        </>
    )
}

export default Index