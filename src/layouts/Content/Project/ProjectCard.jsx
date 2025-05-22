import React from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
const baseUrl = import.meta.env.VITE_API_BASE_URL;

function ProjectCard({ project, activeCategory }) {
    console.log("project.category_id:", project.category_id, typeof project.category_id);
    console.log("activeCategory:", activeCategory, typeof activeCategory);

    return (
        <>
            {(activeCategory === 0 || Number(project.category_id) === activeCategory) && (
                <Link to={project.slug} key={project.id} className="block w-full h-full rounded-xl hover:shadow-2xl transition-shadow duration-300">
                    <motion.div
                        className="relative w-full h-full flex justify-center items-center bg-gray-400 aspect-video group shadow-2xl hover:shadow-2xl transition-shadow duration-300 rounded-xl overflow-hidden"
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
                        }}>
                        {/* Gambar utama */}
                        <img
                            src={`${baseUrl}/assets/images/project/${project.thumbnail}`}
                            alt={project.title}
                            className="absolute inset-0 w-full h-full object-cover bg-slate-950 opacity-10 transition-opacity duration-500 group-hover:opacity-100"
                        />

                        {/* Elemen tahun di sudut kiri atas */}
                        <div className="absolute top-2 left-2 bg-[#101400]  px-4 py-1 rounded-xl">
                            <h4 className="text-[#fdfcfb]"> {new Date(project.year).getFullYear()}</h4>
                        </div>

                        {/* Overlay konten yang muncul saat hover */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 opacity-100 group-hover:opacity-0 z-10 p-8">
                            <h1 className="text-3xl font-bold mb-3 text-center">{project.title}</h1>
                            <p>
                                {project.desc?.length > 125
                                    ? `${project.desc.slice(0, 125)}...`
                                    : project.desc}
                            </p>
                            <div className="flex justify-center items-center flex-row mt-5 flex-wrap">
                                {project.tech.map((t, index) => (
                                    <span
                                        key={index}
                                        className="m-1 px-3 py-1 bg-[#101400] text-[#fdfcfb] rounded-lg uppercase">
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