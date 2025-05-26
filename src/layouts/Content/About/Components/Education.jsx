import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useLoaderData } from "react-router-dom";

function Wrapper({ children }) {
    return (
        <div className="mx-auto container gap-10 p-10 grid grid-cols-1  my-10 ">
            <motion.div
                className="flex justify-center items-start flex-col mb-5 "
                initial={{
                    opacity: 0,
                    x: -200,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                }}
                transition={{
                    delay: 0.5,

                    type: "spring",
                }}>
                {children}
            </motion.div>
        </div>
    );
}

function Education() {
    const { Education } = useLoaderData();
    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    return (
        <Wrapper>
            <section className="grid gap-8 md:gap-12">
                <div className="text-center space-y-2">
                    <motion.h1
                        initial={{
                            opacity: 0,
                            x: -200,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            delay: 0.7,

                            type: "spring",
                        }}
                        className="text-3xl md:text-4xl font-bold tracking-tighter">
                        Education
                    </motion.h1>
                    <motion.p
                        initial={{
                            opacity: 0,
                            x: 200,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            delay: 0.7,
                            type: "spring",
                        }}
                        className="text-muted-foreground max-w-[800px] mx-auto">
                        My educational background.
                    </motion.p>
                </div>
                <div className="grid gap-8 md:gap-12">
                    {Education.map((edu, index) => {
                        const gambarArray = JSON.parse(edu.gambar); // karena ini string JSON
                        return (
                            <div
                                key={index}
                                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                            >
                                <div className="px-5">
                                    <div className="font-medium text-lg">
                                        {new Date(edu.from).getFullYear()} - {new Date(edu.to).getFullYear()}
                                    </div>
                                    <div>
                                        <h2 className="font-semibold text-xl">{edu.univ}</h2>
                                        <h3 className="text-md font-normal mb-3">{edu.jurusan}</h3>
                                        <div className="gap-4 mb-4 flex items-stretch md:h-[300px] xl:h-[400px]">
                                            {gambarArray.map((img, i) => (
                                                <div
                                                    key={i}
                                                    className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group"
                                                >
                                                    <img
                                                        loading="lazy"
                                                        src={`${baseUrl}/assets/images/education/${img}`}
                                                        alt="University"
                                                        width={400}
                                                        height={225}
                                                        className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                </div>
            </section>
        </Wrapper>
    )
}

export default Education