import { useEffect, useState } from "react";
import FixButton from "../../Components/FixButton";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import Hr from "../../Components/Hr";
import Button from "../../Components/Button";
import ProjectCard from "./ProjectCard";
import Projects from "../../../../json/data.json";
import Header from "../../Components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useLoaderData } from "react-router-dom";


function Index() {

    const Categories = {
        1: "Web Development",
        2: "Android",
        9: "Other",
    }

    const [activeCategory, setActiveCategory] = useState(1);
    const projects = Projects.Projects.filter((item) => item.show === true
    );
    // const Categories = useLoaderData();


    return (
        <>
            <Header />
            <main className="overflow-hidden">
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
                            My Other Projects Notes
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
                    {Object.keys(Categories).map((key, index) => (
                        <button
                            key={index}
                            className={`px-2 md:px-4 py-2 rounded-lg cursor-pointer transition-all ease duration-300 focus:bg-[#fdfcfb] focus:text-[#101400] focus:ring focus:ring-[#101400] ${activeCategory === key
                                ? "bg-[#fdfcfb] text-[#101400] hover:bg-[#101400] hover:text-[#fdfcfb] border-2 border-[#101400] "
                                : "bg-[#101400] text-[#fdfcfb] hover:bg-[#fdfcfb] hover:text-[#101400] hover:border-2 hover:border-[#101400] "
                                }`}
                            onClick={() => setActiveCategory(key)}>
                            {Categories[key]}
                        </button>
                    ))}
                    {/* {Categories.map((category) => (
                        <button
                            key={category.id}
                            className={`px-2 md:px-4 py-2 rounded-lg cursor-pointer transition-all ease duration-300 focus:bg-[#fdfcfb] focus:text-[#101400] focus:ring focus:ring-[#101400] ${activeCategory === category.id
                                ? "bg-[#fdfcfb] text-[#101400] hover:bg-[#101400] hover:text-[#fdfcfb] border-2 border-[#101400] "
                                : "bg-[#101400] text-[#fdfcfb] hover:bg-[#fdfcfb] hover:text-[#101400] hover:border-2 hover:border-[#101400] "
                                }`}
                            onClick={() => setActiveCategory(category.id)}>
                            {category.name}
                        </button>
                    ))} */}
                </motion.div>

                {/* projects */}
                <div className="w-screen mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10 cursor-pointer">
                    {projects.map((project) => (
                        <ProjectCard
                            project={project}
                            key={project.id}
                            activeCategory={activeCategory}
                        />
                    ))}
                </div>

                {/* view in archive btn */}
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    whileInView={{
                        opacity: 1,
                    }}
                    className="flex justify-center items-center flex-col my-5 self-start ">
                    <Button variation="primary">
                        <Link href="projects/archive">View In Archive</Link>
                    </Button>
                </motion.div>
            </main>
        </>
    )
}

export default Index