import { motion } from "framer-motion";
import Hr from "../Components/Hr";
import { useLoaderData } from "react-router-dom";

function About() {
    const { aboutme } = useLoaderData();
    const baseUrl = import.meta.env.VITE_API_BASE_URL;

    return (
        <div className="section"
            style={{
                backgroundImage: "url('/image/bg-papper.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}>
            <div className="relative md:h-screen w-screen gap-4 p-10 flex justify-center items-center flex-col overflow-hidden">
                <div className="z-0 mb-48 md:mb-0  md:absolute top-1/4  md:right-[10%] md:-translate-y-16 ">
                    <motion.div
                        className="bg-slate-300 rounded-[1vw] h-[400px] md:h-[600px] w-[80vw] md:w-[30vw] shadow-2xl"
                        initial={{
                            x: 300,
                            opacity: 0,
                            z: -100,
                        }}
                        whileInView={{
                            x: 0,
                            opacity: 1,
                            z: 0,
                        }}
                        whileHover={{
                            scale: 1.05,
                            y: -10,
                        }}
                        transition={{
                            scale: { duration: 0.2, ease: "easeOut" },
                            y: { duration: 0.2, ease: "easeOut" },
                            delay: 0.5,
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                        }}>
                        <img
                            loading="lazy"
                            src={aboutme.gambar
                                ? `${baseUrl}/assets/images/${aboutme.gambar}`
                                : "/assets/img/me.png"}
                            alt="Descriptive image text"
                            layout="fill"
                            className="object-cover rounded-[1vw] h-full w-full grayscale-[100%] filter"
                            placeholder="blur"
                        />
                    </motion.div>
                </div>
                <div className="z-10 w-full absolute md:w-auto  md:left-[5%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 py-5">
                    <motion.h1
                        className="bg-white lg:bg-transparent bg-opacity-50 px-3 md:px-0 text-[#101400] text-5xl md:text-6xl font-bold"
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            delay: 0.1,
                            type: "spring",
                        }}>
                        About Me
                    </motion.h1>
                    <Hr />
                    <motion.p
                        className="title capitalize text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem] mb-5"
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            delay: 0.2,
                            type: "spring",
                        }}>
                        {aboutme.description}
                    </motion.p>
                    <motion.div
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                            delay: 0.3,
                            type: "spring",
                        }}>
                        <a rel="noopener noreferrer" href="/about">
                            <button
                                className="title mr-3 rounded-2xl px-8 py-2 
                            bg-[#101400] text-[#fcfdfe] 
                            hover:bg-transparent hover:text-[#101400] 
                            border-2 border-transparent hover:border-[#101400] 
                            shadow-[0_10px_30px_rgba(0,0,0,0.3)] 
                            hover:shadow-[0_12px_32px_rgba(0,0,0,0.4)] 
                            transition-all duration-300 ease-in-out 
                            text-base sm:text-lg md:text-base"
                            >
                                Learn More
                            </button>
                        </a>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default About