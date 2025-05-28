import { useEffect, useState } from "react";
import FixButton from "../../Components/FixButton";
import { motion } from "framer-motion";
import Hr from "../../Components/Hr";
import ProjectCard from "./ProjectCard";
import Header from "../../Components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useLoaderData, useNavigation } from "react-router-dom";
import Footer from "./Footer";
import Button from "../../Components/Button";
import { Link } from 'react-router-dom';
import Loading from "./loading";


function Index() {
    const [activeCategory, setActiveCategory] = useState(0);
    const { categories, projects } = useLoaderData();

    return (
        <>
            <Header />
            <main
                style={{
                    backgroundImage: "url('/image/bg-papper.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
                className="overflow-hidden">
                <FixButton href="/#projects">
                    <FontAwesomeIcon
                        icon={faChevronLeft}
                        className="text-[#101400] pr-10"
                    />
                </FixButton>
                <div className="mt-16 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
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
                            Other Note Worthy Projects
                        </motion.h1>
                    </div>
                </div>

                {/* choose category */}
                <motion.div
                    initial={{
                        opacity: 0,
                        x: 200,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                    }}
                    transition={{
                        delay: 0.5,
                        type: "spring",
                    }}
                    className="flex flex-row justify-center items-start flex-wrap gap-3 md:gap-5 my-5 ">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            className={`px-2 md:px-4 py-2 rounded-lg cursor-pointer transition-all ease duration-300 focus:bg-[#fdfcfb] focus:text-[#101400] focus:ring focus:ring-[#101400] ${activeCategory === category.id
                                ? "bg-[#fdfcfb] border-2  border-[#101400] text-[#101400] hover:bg-[#101400] hover:text-[#fdfcfb] "
                                : "bg-[#101400] text-[#fdfcfb] hover:bg-[#fdfcfb] hover:text-[#101400] border-2 hover:border-[#101400]"
                                }`}
                            onClick={() => setActiveCategory(category.id)}>
                            {category.name}
                        </button>
                    ))}
                </motion.div>

                {/* projects */}
                <div className="w-screen mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10 cursor-pointer">
                    {projects
                        .slice()
                        .sort((a, b) => {
                            const dateA = new Date(a.year); // parsing string ke Date
                            const dateB = new Date(b.year);
                            return dateB - dateA; // urut dari terbaru ke terlama
                        })
                        .map((project) => (
                            <ProjectCard
                                project={project}
                                key={project.id}
                                activeCategory={activeCategory}
                            />
                        ))}
                </div>

                {/* view in archive btn */}
                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        delay: 0.3,
                        type: "spring",
                    }}
                    className="flex justify-center items-center flex-col my-5 self-start mb-10">
                    <Link to="archive">
                        <Button variation="primary">
                            View In Archive
                        </Button>
                    </Link>

                </motion.div>
            </main >
            <Footer />
        </>
    )
}

export default Index