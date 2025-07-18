import { motion, useAnimation } from "framer-motion";
import Hr from "../Components/Hr";
import { useLoaderData } from "react-router-dom";

function Contact() {
    const { contact } = useLoaderData();
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
                {/* Gambar Kanan */}
                <div className="z-0 mb-48 md:mb-0 md:absolute top-1/4 md:right-[10%] md:-translate-y-16">
                    <motion.div
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
                        }}
                        className="bg-slate-300 rounded-[1vw] h-[400px] md:h-[600px] w-[80vw] md:w-[30vw] shadow-2xl">
                        <img
                            loading="lazy"
                            src={contact.gambar
                                ? `${baseUrl}/assets/images/${contact.gambar}`
                                : "/assets/img/project.jpg"}
                            alt="Descriptive image text"
                            layout="fill"
                            className="object-cover rounded-[1vw] h-full w-full grayscale-[100%] filter"
                            placeholder="blur"
                        />
                    </motion.div>
                </div>
                {/* Konten Kiri */}
                <div className="z-10 w-full absolute md:w-auto  md:left-[5%] top-[60%] md:top-[27%] col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 overflow-hidden">
                    <motion.h1
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            delay: 0.1,
                            type: "spring",
                        }}
                        className="bg-white lg:bg-transparent bg-opacity-50 px-3 md:px-0 text-[#101400] text-5xl md:text-6xl font-bold mb-3">
                        Get In Touch
                    </motion.h1>
                    {/* Garis Dekoratif */}
                    <Hr />
                    {/* Deskripsi dan Email */}
                    <motion.p
                        className="title text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem] md:mb-5"
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            delay: 0.2,
                            type: "spring",
                        }}>
                        {contact.description}
                    </motion.p>
                    <motion.p
                        className="title text-xl mt-4 tracking-wider text-[#101400] leading-[1.7rem] mb-5"
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            delay: 0.3,
                            type: "spring",
                        }}>
                        <a href="mailto:rianrahmanalaziz@gmail.com?subject=Hello&body=Hello Rian,">
                            {contact.email}
                        </a>
                    </motion.p>
                    {/* Tombol Email */}
                    <div className="flex justify-center items-center space-x-4">
                        {/* Email */}
                        <motion.a
                            initial={{ y: 40, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{
                                y: { delay: 0.1 },
                                opacity: { delay: 0.2 },
                            }}
                            href="mailto:rianrahman8243@gmail.com?subject=Hello&body=Hello Rian,"
                            className="group flex justify-center items-center bg-[#101400] w-14 h-14 rounded-full text-gray-100 hover:bg-[#fcfdfe] border-2  border-[#101400] transition-all ease-in-out duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="30" height="30"
                                className="transition-colors duration-300 ease-in-out fill-[#fcfdfe] group-hover:fill-[#101400]">
                                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>
                        </motion.a>
                        {/* Github */}
                        <motion.a
                            initial={{ y: 40, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{
                                y: { delay: 0.2 },
                                opacity: { delay: 0.3 },
                            }}
                            href={contact.github}
                            className="group flex justify-center items-center bg-[#101400] w-14 h-14 rounded-full text-gray-100 hover:bg-[#fcfdfe] border-2 border-[#101400] transition-all ease-in-out duration-300 "
                            target="_blank"

                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 496 512"
                                className="transition-colors duration-300 ease-in-out fill-[#fcfdfe] group-hover:fill-[#101400]">
                                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
                        </motion.a>
                        {/* instagram */}
                        <motion.a
                            initial={{ y: 40, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{
                                y: { delay: 0.3 },
                                opacity: { delay: 0.4 },
                            }}
                            href={contact.instagram}
                            className="group flex justify-center items-center bg-[#101400] w-14 h-14 rounded-full text-gray-100 hover:bg-[#fcfdfe] border-2 border-[#101400] transition-all ease-in-out duration-300 "
                            target="_blank"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 448 512"
                                className="transition-colors duration-300 ease-in-out fill-[#fcfdfe] group-hover:fill-[#101400]"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                        </motion.a>
                        {/* Linked */}
                        <motion.a
                            initial={{ y: 40, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{
                                y: { delay: 0.4 },
                                opacity: { delay: 0.5 },
                            }}
                            href={contact.linkedin}
                            className="group flex justify-center items-center bg-[#101400] w-14 h-14 rounded-full text-gray-100 hover:bg-[#fcfdfe] border-2 border-[#101400] transition-all ease-in-out duration-300 "
                            target="_blank"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 448 512"
                                className="transition-colors duration-300 ease-in-out fill-[#fcfdfe] group-hover:fill-[#101400]"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
                        </motion.a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact