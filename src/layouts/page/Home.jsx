import { motion, useAnimation } from "framer-motion";

function Home() {
  return (
    <div className="section">
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
                src="/assets/img/me.png"
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
            className="text-[#101400] text-4xl md:text-6xl lg:text-6xl 2xl:text-5xl font-bold my-2 md:my-5"
          >Full Stack Developer</motion.h1>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              type: "spring",
            }}
            className="title text-md  2xl:text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem]">
            I am a programmer who has great interest in
            field of software development. I have basic skills
            in several programming languages and keep learning to improve
            My knowledge and experience in coding and application development.
            I have a strong desire to contribute to innovative projects
            and solving problems through technology
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
              className="title mr-3 rounded-2xl px-8 py-2 shadow-md ease-in-out bg-[#101400] hover:bg-transparent border-transparent hover:border-[#101400]  border-2 text-[#fdfcfb] hover:text-[#101400]  box-border transition-all duration-300 text-base  sm:text-lg md:text-base"
            >
              <a target="_blank" rel="noopener noreferrer" download href="/docs/cv.pdf">
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
              className="title mr-3 rounded-2xl px-8 py-2 shadow-md ease-in-out transparent border-2 border-[#101400]  text-[#101400]  hover:bg-[#101400] hover:text-[#fdfcfb] box-border transition-all duration-300 text-base sm:text-lg md:text-base"
            >
              <a href="#contact">Contact Me</a>
            </motion.button>

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
          className="hidden md:flex col-span-1 mx-auto my-10 justify-center items-center" >
          <div className="rounded-full h-80 w-80 transition-all ease duration-300">
            <img
              alt="Portrait of Rian Rahman Al-Aziz"
              className="rounded-full w-full h-full object-cover "
              width={500}
              height={500}
              src="/assets/img/me.png"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;