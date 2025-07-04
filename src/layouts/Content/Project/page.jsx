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
import Footer from "./Footer";

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
        { top: "top-[20vh]", left: "left-[7vh]", zIndex: "z-30" },
        { top: "top-[25vh]", left: "left-[10vh]", zIndex: "z-20" },
        { top: "top-[30vh]", left: "left-[13vh]", zIndex: "z-10" },
    ];
    const [selectedImage, setSelectedImage] = useState(null);

    const handleOpen = (image) => setSelectedImage(image);
    const handleClose = () => setSelectedImage(null);
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
            <div className="relative min-h-screen w-full gap-4 p-10 flex justify-center items-center flex-col mb-10 "
                style={{
                    backgroundImage: "url('/image/bg-papper.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}>
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
                        <div className="flex flex-col mb-5 w-full">
                            <div className="images relative w-full">
                                {/* Grid fallback on small screens */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
                                    {data.gambar.map((image, index) => (
                                        <div
                                            key={index}
                                            className="w-full aspect-video shadow-xl rounded-xl overflow-hidden"
                                            onClick={() => handleOpen(`${baseUrl}/assets/images/project/${image}`)}
                                        >
                                            <img
                                                loading="lazy"
                                                src={`${baseUrl}/assets/images/project/${image}`}
                                                alt={`Project Image ${index + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* Absolute overlapping only on md and up */}
                                <div className="hidden md:block relative w-full aspect-square">
                                    {data.gambar.map((image, index) => {
                                        const style = imageStyles[index] || imageStyles[imageStyles.length - 1];
                                        return (
                                            <div
                                                key={index}
                                                className={`absolute ${style.top} ${style.left} ${style.zIndex} w-[90%] aspect-video shadow-xl transition-transform duration-300 hover:scale-105`}
                                                onClick={() => handleOpen(`${baseUrl}/assets/images/project/${image}`)}
                                            >
                                                <img
                                                    loading="lazy"
                                                    src={`${baseUrl}/assets/images/project/${image}`}
                                                    alt={`Project Image ${index + 1}`}
                                                    className="w-full h-full object-cover rounded-xl"
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Modal */}
                            {selectedImage && (
                                <dialog id="my_modal_2" className="modal modal-open">
                                    <div className="modal-box ">
                                        <img
                                            loading="lazy"
                                            src={selectedImage}
                                            alt="Full View"
                                            className="rounded-xl w-full h-auto object-contain max-h-[80vh]"
                                        />
                                        <form method="dialog" className="absolute top-4 right-4">
                                            <button
                                                onClick={handleClose}
                                                className="btn btn-sm btn-circle btn-ghost text-white bg-black bg-opacity-50 hover:bg-opacity-70"
                                            >
                                                ✕
                                            </button>
                                        </form>
                                    </div>
                                    <form method="dialog" className="modal-backdrop">
                                        <button onClick={handleClose}>close</button>
                                    </form>
                                </dialog>
                            )}
                        </div>
                    </div>
                </div>

                {/* images */}
                {/* <div className="mx-auto grid grid-cols-1 p-5  w-full">
                    <div className="w-full h-auto text-start flex flex-col justify-center ">
                        <h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">Description</h2>
                        <p className="text-xl text-justify tracking-wide font-normal text-gray-500 mb-5 mt-5">{data.desc}</p>
                    </div>
                </div> */}
            </div>
            <Footer />
        </>
    );
}

export default Page;

