import React from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
const baseUrl = import.meta.env.VITE_API_BASE_URL;

function ProjectCard({ project, activeCategory }) {
    console.log("project.category_id:", project.category_id, typeof project.category_id);
    console.log("activeCategory:", activeCategory, typeof activeCategory);

    return (
        <>
            {(activeCategory === 0 || Number(project.category_id) === activeCategory) && (
                <Link
                    to={project.slug}
                    key={project.id}
                    className="block w-full h-full rounded-xl hover:shadow-2xl transition-shadow duration-300"
                >
                    <motion.div
                        className="relative w-full h-full flex justify-center items-center bg-gray-400 aspect-[16/9] group shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-xl overflow-hidden"
                        initial={{
                            opacity: 0,
                            x: -200,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        whileHover={{
                            scale: 1.01,
                            y: -10,
                        }}
                        transition={{
                            type: "spring",
                            scale: { duration: 0.2, ease: "easeOut" },
                            y: { duration: 0.2, ease: "easeOut" },
                        }}
                    >
                        {/* Gambar utama */}
                        <img
                            loading="lazy"
                            src={`${baseUrl}/assets/images/project/${project.thumbnail}`}
                            alt={project.title}
                            className="absolute inset-0 w-full h-full object-cover bg-slate-950 opacity-10 transition-opacity duration-500 group-hover:opacity-100"
                        />

                        {/* Tahun di kiri atas */}
                        <div className="absolute top-2 left-2 bg-[#101400] px-3 py-1 rounded-md text-sm sm:text-base">
                            <h4 className="text-[#fdfcfb]">
                                {new Date(project.year).getFullYear()}
                            </h4>
                        </div>

                        {/* Overlay konten */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center transition-opacity duration-500 opacity-100 group-hover:opacity-0 z-10 p-4 sm:p-6 md:p-8">
                            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">
                                {project.title}
                            </h1>
                            {/* <p className="text-sm sm:text-base md:text-lg">
                                {project.desc?.length > 100
                                    ? `${project.desc.slice(0, 100)}...`
                                    : project.desc}
                            </p> */}
                            <div className="flex justify-center items-center flex-wrap gap-2 mt-4">
                                {project.tech.map((t, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 text-xs sm:text-sm bg-[#101400] text-[#fdfcfb] rounded-lg uppercase"
                                    >
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