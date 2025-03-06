import React from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

function ProjectCard({ project, index, activeCategory }) {
    return (
        <>
            {project.category.includes(parseInt(activeCategory)) && (
                <Link to={"projects/" + project.slug} key={index}>
                    <motion.div
                        className="z-10 relative flex justify-center items-start flex-col mb-5 md:px-10 w-full h-auto bg-gray-400 group/tes py-20 px-5 md:py-2 aspect-video "
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
                        }}>
                        <img
                            src={project.thumbnail}
                            alt="Alvalens"
                            className="w-full h-full object-cover bg-slate-950 opacity-10 group-hover/tes:opacity-100 transition-all ease duration-500"
                        />

                        <div className="absolute top-0 left-0 bg-gray-600 px-4 py-2">
                            <h4 className="text-white">{project.year}</h4>
                        </div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center transition-all ease duration-500 opacity-100 content text-center group-hover/tes:opacity-0 z-10 p-8">
                            <h1 className="text-3xl font-bold mb-3">{project.title}</h1>
                            <p>
                                {project.desc[0].length > 125
                                    ? `${project.desc[0].slice(0, 125)}...`
                                    : project.desc[0]}
                            </p>
                            <div className="flex justify-center items-center flex-row mt-5 flex-wrap">
                                {project.tech.map((t, index) => (
                                    <span
                                        key={index}
                                        className="m-1 px-4 py-2 bg-gray-600 text-white ">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </Link>
            )}
        </>
    )
}

export default ProjectCard