import { motion, useAnimation } from "framer-motion";
import { useLoaderData } from "react-router-dom";

function Home() {
  const { home } = useLoaderData();
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  return (
    <div className="section"
      style={{
        backgroundImage: "url('/image/bg-papper.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      <div className="mx-auto container grid grid-cols-1 md:grid-cols-3 gap-4 p-10 overflow-hidden md:px-20">
        {/* Left Column */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
          }}
          className="col-span-2 flex flex-col justify-center items-center md:items-start text-center md:text-start" >
          {/* Mobile Image */}
          <div className="block md:hidden col-span-1 mx-auto my-10">
            <div className="bg-slate-500 rounded-full h-60 w-60  transition-all ease duration-300">
              <img
                alt="Portrait of Rian Rahman Al-Aziz"
                className="rounded-full w-full h-full object-cover"
                width={500}
                height={500}
                src={home.gambar
                  ? `${baseUrl}/assets/images/${home.gambar}`
                  : "/assets/img/me.png"}
              />
            </div>
          </div>

          {/* Text Content */}
          <motion.h3
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              type: "spring",
            }}
            className="uppercase text-xl font-normal text-gray-500 tracking-widest ">
            RIAN RAHMAN AL AZIZ
          </motion.h3>
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              type: "spring",
            }}
            className="capitalize text-[#101400] text-4xl md:text-6xl lg:text-6xl 2xl:text-5xl font-bold my-2 md:my-5"
          >{home.title}</motion.h1>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              type: "spring",
            }}
            className="capitalize title text-md  2xl:text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem]">
            <div
              dangerouslySetInnerHTML={{
                __html: home.description
                  .replace(/<(?!br\s*\/?)[^>]+>/gi, '') // hapus semua tag kecuali <br>
              }}
            />
          </motion.p>

          {/* Buttons */}

          <motion.div
            className="buttons flex flex-row justify-center items-center space-x-4 mt-10" >
            <motion.button
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                y: { delay: 0.5 },
                opacity: { delay: 0.6 },
                type: "spring",
              }}
              className="title mr-3 rounded-2xl px-8 py-2  shadow-[0_10px_30px_rgba(0,0,0,0.3)] 
                hover:shadow-[0_12px_32px_rgba(0,0,0,0.4)]  ease-in-out bg-[#101400]  hover:bg-transparent border-transparent hover:border-[#101400]  border-2 text-[#fcfdfe] hover:text-[#101400]  box-border transition-all duration-300 text-base  sm:text-lg md:text-base"
            >
              <a target="_blank" rel="noopener noreferrer" download href={`${baseUrl}/assets/pdf/${home.cv}`}>
                Download CV
              </a>
            </motion.button>
            <motion.button
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                y: { delay: 0.6 },
                opacity: { delay: 0.7 },
                type: "spring",
              }}
              className="title mr-3 rounded-2xl px-8 py-2  shadow-[0_10px_30px_rgba(0,0,0,0.3)] 
                         hover:shadow-[0_12px_32px_rgba(0,0,0,0.4)]  ease-in-out transparent border-2 border-[#101400]  text-[#101400]  hover:bg-[#101400] hover:text-[#fcfdfe] box-border transition-all duration-300 text-base sm:text-lg md:text-base"
            >
              <a href="#contact">Contact Me</a>
            </motion.button>

          </motion.div>
        </motion.div>

        {/* Right Column Image */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          whileHover={{
            scale: 1.05,
            y: -10,
          }}
          transition={{
            scale: { duration: 0.2, ease: "easeOut" },
            y: { duration: 0.2, ease: "easeOut" },
            delay: 0.7,
            type: "spring",
          }}
          className="hidden md:flex col-span-1 mx-auto my-10 justify-center items-center" >
          <div className="rounded-full h-80 w-80 transition-all ease duration-300">
            <img
              alt="Portrait of Rian Rahman Al-Aziz"
              className="rounded-full w-full h-full object-cover "
              width={500}
              height={500}
              src={home.gambar
                ? `${baseUrl}/assets/images/${home.gambar}`
                : "/assets/img/me.png"}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;