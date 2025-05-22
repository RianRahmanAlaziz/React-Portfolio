import React from 'react'
import Hr from '../../../Components/Hr';
import { motion } from "framer-motion";
import { useLoaderData } from "react-router-dom";

function Title() {
    return (
        <div className="mt-16 flex flex-col justify-start items-center w-full pl-10 md:pl-16">
            <div className="flex justify-center items-center flex-col my-5 self-start">
                <Hr variant="long"></Hr>
                <motion.h1
                    className="text-3xl font-bold mt-3"
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
                    }}>
                    Work Experience
                </motion.h1>
            </div>
        </div>
    );
}

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
                <section className="grid gap-8 md:gap-12">
                    <div className="relative after:absolute after:inset-y-2 after:w-1  after:left-[-4px] md:after:left-1 lg:after:left-2 xl:after:left-3 grid gap-8 md:gap-12 pl-6 md:pl-8">
                        {children}
                    </div>
                </section>
            </motion.div>
        </div>
    );
}


function Experience() {
    const { Experience } = useLoaderData();
    return (
        <>
            <Title />
            <Wrapper>
                {Experience.map((exp, index) => (
                    <motion.div
                        key={exp.id}
                        className="grid gap-4 relative"
                        initial={{
                            opacity: 0,
                            x: -200,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            delay: 0.5 + index * 0.1, // Supaya animasinya bergantian
                            type: "spring",
                        }}
                    >
                        <div className="aspect-square w-5 bg-black rounded-full absolute left-0 translate-x-[-29.5px] z-10" />
                        <div className="font-medium text-lg">  {new Date(exp.from).getFullYear()} - {new Date(exp.to).getFullYear()}</div>
                        <div>
                            <h3 className="font-semibold text-xl text-black">{exp.title}</h3>
                            <h4 className=" font-light text-md mb-4">{exp.jabatan} | {exp.pekerjaan}</h4>
                            <p className="text-justify">{exp.desc}</p>
                            <div className="flex flex-wrap gap-2 mt-4 text-sm">
                                {JSON.parse(exp.tech || "[]").map((item, i) => (
                                    <div key={i} className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}

            </Wrapper>
        </>
    )
}

export default Experience