import React from 'react'
import FixButton from '../../Components/FixButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Button from '../../Components/Button';
import { motion } from "framer-motion";
import Hr from '../../Components/Hr';
import Header from '../../Components/Header';
import Skills from '../About/Components/Skills/Skills'
import Experience from './Components/Experience';
import Education from './Components/Education';

function Index() {
    return (
        <>
            <Header />
            <main className="overflow-hidden">
                <FixButton href="/#about">
                    <FontAwesomeIcon
                        icon={faChevronLeft}
                        className="text-[#101400] pr-10"
                    />
                </FixButton>
                <div className="relative h-screen  gap-4 p-10 flex justify-center items-center flex-col mb-10 overflow-hidden">
                    {/* hero */}
                    <div className="z-0 mb-48 md:mb-0  md:absolute top-1/4  md:right-[10%] md:-translate-y-16 ">
                        <motion.div
                            initial={{ scale: 1 }}
                            animate={{ scale: 1.6 }}
                            transition={{ ease: "circOut", duration: 1 }}
                            className="bg-slate-300 rounded-sm h-[400px] md:h-[600px] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0 ">
                            <img
                                src="/assets/img/me.png"
                                alt="Rian Rahman Al-Aziz"
                                layout="fill"
                                objectFit="cover"
                                placeholder="blur"
                            />
                        </motion.div>
                    </div>
                    <div className="z-10 w-full absolute md:w-auto md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 pt-4 backdrop-filter backdrop-blur-sm md:backdrop-blur-none bg-gray-100 bg-opacity-50 md:bg-transparent md:pt-0">
                        <h1 className="md:bg-white bg-transparent lg:bg-transparent bg-opacity-50 md:px-0 text-black text-5xl md:text-8xl font-bold">
                            About Me
                        </h1>
                        <Hr />
                        <p className="title text-xl mt-4 tracking-wider text-gray-900 leading-[1.7rem] mb-5 ">
                            A brief introduction about me and{" "}
                            <span className="bg-transparent md:bg-gray-100 bg-opacity-50 xl:bg-transparent">
                                {" "}
                                my interest.
                            </span>
                        </p>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, ease: "circOut" }}
                            onClick={() => {
                                window.scrollTo({
                                    top: 1000,
                                    behavior: "smooth",
                                });
                            }}
                            className="mb-3">
                            <Button variation="primary">Scroll Down</Button>
                        </motion.div>
                    </div>
                </div>
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
        </>
    )
}

export default Index