import React from 'react'
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import FixButton from '../../Components/FixButton';
import Footer from './Footer';
import Header from '../../Components/Header';
import { useLoaderData } from "react-router-dom";

function Archive() {
    const { projects } = useLoaderData();
    return (
        <>
            <Header />
            <main className="overflow-hidden">
                <FixButton href="/projects">
                    <FontAwesomeIcon
                        icon={faChevronLeft}
                        className="text-black pr-10"
                    />
                </FixButton>
                <div className="min-h-screen w-screen mt-10 md:mt-10  p-10 flex  flex-col mb-10">
                    <div className="flex justify-center items-center flex-col my-5 self-start ">
                        <motion.div
                            className="bg-gray-700 w-28 h-1 rounded-full mb-3 self-start"
                            initial={{
                                opacity: 0,
                                x: -250,
                            }}
                            animate={{
                                opacity: 1,
                                x: 50,
                            }}
                            transition={{
                                delay: 0.5,
                                duration: 1,
                                type: "spring",
                            }}></motion.div>
                        <motion.div
                            className="bg-gray-700 w-28 h-1 rounded-full"
                            initial={{
                                opacity: 0,
                                x: 200,
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                            }}
                            transition={{
                                delay: 0.5,
                                duration: 1,
                                type: "spring",
                            }}></motion.div>
                        <motion.h1
                            className="text-3xl font-bold mt-3"
                            initial={{
                                opacity: 0,
                                x: -200,
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                            }}
                            transition={{
                                delay: 0.7,
                                duration: 1,
                                type: "spring",
                            }}>
                            Archive
                        </motion.h1>
                    </div>

                    <div className="mx-auto container md:px-10 grid grid-cols-1 mb-">
                        {/* invisible table */}
                        <table className="space-y-3">
                            <thead >
                                <motion.tr
                                    initial={{
                                        opacity: 0,
                                        x: -200,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    transition={{
                                        type: "spring",

                                    }}
                                    className=" hover:shadow-md transition-shadow ease duration-500 border-b border-gray-400">
                                    <th className="text-start">Year</th>
                                    <th className="text-start">Title</th>
                                    <th className="text-start">Technology</th>
                                    <th className="text-center">Link</th>
                                </motion.tr>
                            </thead>
                            <tbody>
                                {projects
                                    .slice() // clone dulu biar data aslinya nggak berubah
                                    .sort((a, b) => b.year - a.year) // Urutkan dari tahun terbaru ke terlama
                                    .map((project, index) => (
                                        <motion.tr
                                            key={index}
                                            initial={{ opacity: 0, x: -200 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ type: "spring" }}
                                            className="hover:shadow-md transition-shadow ease duration-500"
                                        >
                                            <td> {new Date(project.year).getFullYear()}</td>
                                            <td>{project.title}</td>
                                            <td>{project.tech.map((t) => `${t}, `)}</td>
                                            <td>
                                                <div className="flex flex-row justify-center items-center">
                                                    {project.code && (
                                                        <a
                                                            href={project.code}
                                                            target="_blank"
                                                            title="Link to GitHub"
                                                        >
                                                            <FontAwesomeIcon icon={faGithub} className="text-xl mr-2" />
                                                        </a>
                                                    )}
                                                    {project.preview && (
                                                        <a
                                                            href={project.preview}
                                                            target="_blank"
                                                            title="Link to project preview"
                                                        >
                                                            <FontAwesomeIcon
                                                                icon={faArrowUpRightFromSquare}
                                                                className="text-xl"
                                                            />
                                                        </a>
                                                    )}
                                                </div>
                                            </td>
                                        </motion.tr>
                                    ))}

                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Archive