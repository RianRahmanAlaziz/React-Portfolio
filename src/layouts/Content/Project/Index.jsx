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

const category = {
    1: "Web Development",
    2: "AI & Machine Learning",
    9: "Other",
}
function Index() {

    const [activeCategory, setActiveCategory] = useState([]);
    const projects = Projects.Projects.filter((item) => item.show === true
    );
    const Categories = useLoaderData();


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
                    {Categories.map((category) => (
                        <button
                            key={category.id}
                            className={`px-2 md:px-4 py-2 rounded-lg cursor-pointer transition-all ease duration-300 focus:bg-gray-300 focus:text-black focus:ring focus:ring-slate-500 ${activeCategory === category.id
                                ? "bg-gray-300 text-black hover:bg-gray-700 hover:text-white"
                                : "bg-gray-700 text-white hover:bg-gray-300 hover:text-black"
                                }`}
                            onClick={() => setActiveCategory(category.id)}>
                            {category.name}
                        </button>
                    ))}
                </motion.div>

                {/* projects */}
                <div className="w-screen mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10 cursor-pointer">
                    {projects.map((project, index) => (
                        <ProjectCard
                            project={project}
                            key={index}
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