import { motion } from "framer-motion";
import { useLoaderData } from "react-router-dom";

export default function Stack() {
    const { about } = useLoaderData();
    return (
        <motion.div
            className="flex justify-center items-center flex-col mb-5 "
            initial={{
                opacity: 0,
                x: -200,
            }}
            whileInView={{
                opacity: 1,
                x: 0,
            }}
            transition={{
                delay: 0.5,

                type: "spring",
            }}>
            <h2 className="text-2xl md:text-xl font-bold mb-3 md:tracking-[.3rem] lg:tracking-[.5rem] uppercase text-[#101400]">
                Language & Framework
            </h2>
            <p className="text-gray-500 text-center tracking-widest md:px-5">

                {JSON.parse(about.framework || "[]").map((fw, index, arr) => (
                    <span key={index} className="text-black font-bold">
                        {fw}
                        {index !== arr.length - 1 && " | "}
                    </span>
                ))}
            </p>
        </motion.div>
    );
}