import { motion } from "framer-motion";
import { useLoaderData } from "react-router-dom";

export default function Tools() {
    const { about } = useLoaderData();
    return (
        <motion.div
            className="flex justify-start items-center flex-col mb-5 "
            initial={{
                opacity: 0,
                x: 200,
            }}
            whileInView={{
                opacity: 1,
                x: 0,
            }}
            transition={{
                delay: 0.6,

                type: "spring",
            }}>
            <h2 className="text-2xl md:text-xl font-bold mb-3 md:tracking-[.3rem] lg:tracking-[.5rem] uppercase text-[#101400]">
                Tools
            </h2>
            <p className="text-gray-500 text-center tracking-wider">
                {JSON.parse(about.tools || "[]").map((tool, index, arr) => (
                    <span key={index} className="text-black font-bold">
                        {tool}
                        {index !== arr.length - 1 && " | "}
                    </span>
                ))}
            </p>
        </motion.div>
    );
}
