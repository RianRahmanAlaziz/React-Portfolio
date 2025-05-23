import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, useLoaderData } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import FixButton from "../../Components/FixButton";
import Notfound from "../../Components/Notfound";
import Header from "../../Components/Header";

function ScrollDownButton() {
    const [isAtBottom, setIsAtBottom] = useState(false);

    const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop < document.documentElement.scrollHeight - document.documentElement.clientHeight) {

            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: "smooth",
            });
            setIsAtBottom(true);

        } else {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
            setIsAtBottom(false);
        }
    };

    return (
        <div className="fixed bottom-5 left-0 right-0 flex justify-center items-center mb-10">
            <motion.div
                className="h-10 w-10 bg-neutral-900 rounded-full flex justify-center items-center cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleScroll}
            >
                <FontAwesomeIcon
                    icon={isAtBottom ? faChevronUp : faChevronDown}
                    className="text-white text-2xl"
                />
            </motion.div>
        </div>
    );
}

function Page() {
    const { slug } = useParams();
    const { projects } = useLoaderData(); // ← Ambil dari loader
    const [data, setData] = useState(null);
    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    const imageStyles = [
        { top: "top-[20vh]", left: "left-0", zIndex: "z-30" },
        { top: "top-[30vh]", left: "left-10", zIndex: "z-20" },
        { top: "top-[40vh]", left: "left-20", zIndex: "z-10" },
    ];
    useEffect(() => {
        const project = projects.find((item) => item.slug === slug);
        if (!project) {
            setData("404");
        } else {
            setData(project);
        }
    }, [slug, projects]); // Pastikan ada dependency pada slug dan projects

    if (data === "404") {
        return (
            <>
                <Notfound />
            </>
        );
    } else if (!data) {
        return (
            <div className="relative min-h-screen w-full  gap-4 p-10 flex justify-center items-center flex-col mb-10 ">
                <div className="min-h-screen flex justify-center items-center w-full">
                    <div className="mx-auto grid grid-cols-1 md:grid-cols-2  w-full">
                        <div className="flex justify-center items-start flex-col mb-5 space-y-10 w-ful p-4">
                            <div className="animate-pulse bg-neutral-400 h-20 w-full rounded shadow-lg"></div>
                            <div className="animate-pulse bg-neutral-400 h-20 w-full rounded shadow-lg"></div>
                            <div className="animate-pulse bg-neutral-400 h-20 w-full rounded shadow-lg"></div>
                            <div className="animate-pulse bg-neutral-400 h-20 w-full rounded shadow-lg"></div>
                            <div className="animate-pulse bg-neutral-400 h-20 w-full rounded shadow-lg"></div>
                        </div>
                        <div className="flex justify-start items-start flex-col mb-5 w-full p-4">
                            <div className="animate-pulse duration-500 shadow-lg bg-neutral-400 rounded  w-full h-full "></div>
                        </div>
                    </div>
                </div>
                {/* images */}
                <div className="mx-auto grid grid-cols-1 p-5 md:p-20  w-full h-auto">
                    <div className="w-full h-auto aspect-video">
                        <div className="animate-pulse duration-500 shadow-lg bg-neutral-400 h-full w-full rounded"></div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <>
            <Header />
            <div className="relative min-h-screen w-full gap-4 p-10 flex justify-center items-center flex-col mb-10 ">
                <FixButton href="/projects">
                    <FontAwesomeIcon
                        icon={faChevronLeft}
                        className="text-black pr-10"
                    />
                </FixButton>
                {/* <ScrollDownButton /> */}
                <div className="min-h-screen flex justify-center items-center">
                    <div className="mx-auto grid grid-cols-1 md:grid-cols-2  md:mt-0">
                        <div className="min-h-screen sm:min-h-0 flex justify-center items-start flex-col mb-5 space-y-10 mx-auto">
                            <div>
                                <h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
                                    Project
                                </h2>
                                <h1 className="text-4xl font-medium text-neutral-900 capitalize">
                                    {data.title}
                                </h1>
                            </div>
                            <div>
                                <h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
                                    Technology
                                </h2>
                                <p className="text-2xl font-normal text-neutral-900 uppercase ">
                                    {data.tech.join(", ")}
                                </p>
                            </div>
                            <div>
                                <h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
                                    Year
                                </h2>
                                <p className="text-2xl font-normal text-neutral-900">
                                    {new Date(data.year).getFullYear()}
                                </p>
                            </div>
                            {data.preview && (
                                <div>
                                    <h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
                                        Preview
                                    </h2>
                                    <p className="text-2xl font-normal text-neutral-900">
                                        <a
                                            href={data.preview}
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            Preview{" "}
                                            <FontAwesomeIcon
                                                icon={faArrowUpRightFromSquare}
                                                className="ml-3"
                                            />
                                        </a>
                                    </p>
                                </div>
                            )}
                            {data.code && (
                                <div>
                                    <h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
                                        Source Code
                                    </h2>
                                    <p className="text-2xl font-normal text-neutral-900">
                                        <a
                                            href={data.code}
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            Github{" "}
                                            <FontAwesomeIcon
                                                icon={faGithub}
                                                className="ml-3"
                                            />
                                        </a>
                                    </p>
                                </div>
                            )}
                        </div>
                        <div className="flex justify-start items-start flex-col mb-5">
                            {/* <div className="images relative w-full  aspect-square">
                                <div className="absolute top-28 left-10 h-[40%]  aspect-video grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150 z-10">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.5, x: 100 }}
                                        whileInView={{
                                            opacity: 1,
                                            scale: 1,
                                            x: 0,
                                        }}
                                        className="w-full h-full shadow-lg">
                                        <img src={`${baseUrl}/assets/images/project/${data.thumbnail}`}
                                            alt="Alvalens"
                                            layout="fill"
                                            objectFit="cover"
                                            placeholder="blur"
                                            className="rat" />
                                    </motion.div>
                                </div>
                                <div className="absolute top-16 right-28 h-[30%]  aspect-video grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150">
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            scale: 0.5,
                                            x: -100,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            scale: 1,
                                            x: 0,
                                        }}
                                        transition={{ delay: 0.3 }}
                                        className="w-full h-full shadow-lg ">
                                        <img
                                            src={`${baseUrl}/assets/images/project/${data.thumbnail}`}
                                            alt="Alvalens"
                                            layout="fill"
                                            objectFit="cover"
                                            placeholder="blur"
                                            objectPosition="0% 0%" />
                                    </motion.div>
                                </div>
                                <div className="absolute bottom-16 right-20 h-[35%]  aspect-video grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150">
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            scale: 0.5,
                                            x: -100,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            scale: 1,
                                            x: 0,
                                        }}
                                        transition={{
                                            delay: 0.5,
                                        }}
                                        className="w-full h-full shadow-lg">
                                        <img
                                            src={`${baseUrl}/assets/images/project/${data.thumbnail}`}
                                            alt="Alvalens"
                                            layout="fill"
                                            objectFit="cover"
                                            placeholder="blur" />

                                    </motion.div>
                                </div>
                            </div> */}
                            <div className="images relative w-full aspect-square">
                                {data.gambar.map((image, index) => {
                                    const style = imageStyles[index] || imageStyles[imageStyles.length - 1]; // default ke style terakhir jika lebih dari 3
                                    return (
                                        <div
                                            key={index}
                                            className={`absolute ${style.top} ${style.left} ${style.zIndex} w-[90%] aspect-video shadow-xl transition-transform duration-300 hover:scale-105 grayscale hover:grayscale-0`}
                                        >
                                            <img
                                                src={`${baseUrl}/assets/images/project/${image}`}
                                                alt={`Project Image ${index + 1}`}
                                                className="w-full h-full object-cover rounded-xl"
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                {/* images */}
                <div className="mx-auto grid grid-cols-1 p-5  w-full">
                    <div className="w-full h-auto text-start flex flex-col justify-center ">
                        <h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">Description</h2>
                        <p className="text-xl text-justify tracking-wide font-normal text-gray-500 mb-5 mt-5">{data.desc}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page;

