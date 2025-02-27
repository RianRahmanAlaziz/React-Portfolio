import { motion, useAnimation } from "framer-motion";

function Home() {
  return (
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
          <div className="bg-slate-500 rounded-full h-60 w-60 grayscale hover:grayscale-0 transition-all ease duration-300">
            <img
              alt="Portrait of Alvalen Shafel"
              className="rounded-full w-full h-full object-cover"
              width={500}
              height={500}
              src="https://storage.googleapis.com/a1aa/image/r17btbacsCY6ABMdcBVwjR5duaLWntIN8flbWk6NWsQnAC7JA.jpg"
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
          className="uppercase text-xl font-normal text-gray-500 tracking-widest mb-3">
          RIAN RAHMAN AL AZIZ
        </motion.h3>
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.3,
            type: "spring",
          }}
          className="text-black text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold my-2 md:my-5"
        >Full Stack Developer</motion.h1>
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.4,
            type: "spring",
          }}
          className="title text-md  2xl:text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem]">
          A junior fullstack developer who currently focused on Web Development.
          Other than that, I also interested in UX/UI Design, Mobile and AI
          Development. I love to learn new things and always open to new
          opportunities.
        </motion.p>

        {/* Buttons */}

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.5,
            type: "spring",
          }}
          className="buttons flex flex-row justify-center items-center space-x-4 mt-10" >
          <button
            className="title mr-3 rounded-2xl px-8 py-3 shadow-md ease-in-out bg-gray-700 hover:bg-transparent border-transparent hover:border-gray-700 border-2 text-gray-100 hover:text-gray-700 box-border transition-colors duration-500 text-base sm:px-10 sm:py-4 sm:text-lg md:text-base"
          >
            <a target="_blank" rel="noopener noreferrer" download href="/docs/cv.pdf">
              Download CV
            </a>
          </button>
          <button
            className="title mr-3 rounded-2xl px-8 py-3 shadow-md ease-in-out transparent border-2 border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-gray-100 box-border transition-colors duration-500 text-base sm:px-10 sm:py-4 sm:text-lg md:text-base"
          >
            <a href="#contact">Contact Me</a>
          </button>

        </motion.div>
      </motion.div>

      {/* Right Column Image */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.7,
          type: "spring",
        }}
        className="hidden md:flex col-span-1 mx-auto justify-center items-center" >
        <div className="rounded-full h-auto w-auto  lg:px-12 grayscale hover:grayscale-0 transition-all ease duration-300">
          <img
            alt="Portrait of Alvalen Shafel"
            className="rounded-full w-full h-full object-cover "
            width={500}
            height={500}
            src="https://storage.googleapis.com/a1aa/image/r17btbacsCY6ABMdcBVwjR5duaLWntIN8flbWk6NWsQnAC7JA.jpg"
          />

        </div>
      </motion.div>
    </div>
  );
}

export default Home;