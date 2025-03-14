import React from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

function ProjectCard({ project, activeCategory }) {
    return (
        <>
            {project.category === parseInt(activeCategory) && (
                <Link to={"projects/" + project.slug} key={project.id} className="block w-full h-full">
                    <motion.div
                        className="relative w-full h-full flex justify-center items-center bg-gray-400 aspect-video group"
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
                        {/* Gambar utama */}
                        <img
                            src={project.thumbnail}
                            alt={project.title}
                            className="absolute inset-0 w-full h-full object-cover bg-slate-950 opacity-10 transition-opacity duration-500 group-hover:opacity-100"
                        />

                        {/* Elemen tahun di sudut kiri atas */}
                        <div className="absolute top-0 left-0 bg-[#101400] px-4 py-2">
                            <h4 className="text-[#fdfcfb]">{project.year}</h4>
                        </div>

                        {/* Overlay konten yang muncul saat hover */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 opacity-100 group-hover:opacity-0 z-10 p-8">
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
                                        className="m-1 px-4 py-2 bg-[#101400] text-[#fdfcfb]">
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