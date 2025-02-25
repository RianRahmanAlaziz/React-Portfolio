import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Gunakan react-intersection-observer
import { useEffect } from "react";

function Home() {
  // Mendeteksi apakah elemen terlihat di viewport
  const { ref, inView } = useInView({
    triggerOnce: false, // Animasi bisa terjadi berulang kali
    threshold: 0.2, // Mulai animasi saat 20% elemen terlihat
  });

  // Mengontrol animasi
  const controls = useAnimation();
  const controls1 = useAnimation();
  const h1 = useAnimation();
  const h = useAnimation();
  const btn = useAnimation();
  const btn1 = useAnimation();
  // Efek saat elemen masuk / keluar viewport
  useEffect(() => {
    if (inView) {
      controls1.start({
        x: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 50, damping: 8 }, // Tambah efek pantulan
      });
    } else {
      controls1.start({ x: "15vw", opacity: 0 }); // Reset animasi
    }
  }, [inView, controls1]);

  useEffect(() => {
    if (inView) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 50, damping: 8 },
      });
    } else {
      controls.start({ x: "-15vw", opacity: 0 }); // Reset animasi
    }
  }, [inView, controls]);

  useEffect(() => {
    if (inView) {
      h1.start({
        x: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 80, damping: 8 }, // Tambah efek pantulan
      });
    } else {
      h1.start({ x: "15vw", opacity: 0 }); // Reset animasi
    }
  }, [inView, h1]);

  useEffect(() => {
    if (inView) {
      h.start({
        x: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 70, damping: 8 }, // Tambah efek pantulan
      });
    } else {
      h.start({ x: "15vw", opacity: 0 }); // Reset animasi
    }
  }, [inView, h]);

  useEffect(() => {
    if (inView) {
      btn.start({
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 60, damping: 8, duration: 0.5 }, // Tambah efek pantulan
      });
    } else {
      btn.start({ y: "10vh", opacity: 0 }); // Reset animasi
    }
  }, [inView, btn]);

  useEffect(() => {
    if (inView) {
      btn1.start({
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 70, damping: 8, duration: 0.5 }, // Tambah efek pantulan
      });
    } else {
      btn1.start({ y: "10vh", opacity: 0 }); // Reset animasi
    }
  }, [inView, btn1]);

  return (
    <div className="section fp-section active fp-table fp-is-overflow active fp-completely" data-anchor="home">
      <div className="fp-overflow" tabIndex="-1">
        <div className="mx-auto container grid grid-cols-1 md:grid-cols-3 gap-4 p-10 overflow-hidden md:px-20">
          {/* Left Column */}
          <div className="col-span-2 flex flex-col justify-center items-center md:items-start text-center md:text-start" >
            {/* Mobile Image */}
            <div className="block md:hidden col-span-1 mx-auto my-10">
              <div className="bg-slate-500 rounded-full h-60 w-60 grayscale hover:grayscale-0 transition-all ease duration-300">
                <img alt="Alvalens" src="https://storage.googleapis.com/a1aa/image/r17btbacsCY6ABMdcBVwjR5duaLWntIN8flbWk6NWsQnAC7JA.jpg" decoding="async" className="rounded-full w-full h-full object-cover" />
              </div>
            </div>

            {/* Text Content */}
            <motion.h3
              ref={ref} // Gunakan ref untuk mendeteksi viewport
              initial={{ x: "-15vw", opacity: 0 }}  // Mulai dari luar layar kanan
              animate={h} // Animasi dikontrol oleh useAnimation
              className="uppercase text-xl font-normal text-gray-500 tracking-widest mb-3">
              RIAN RAHMAN AL AZIZ
            </motion.h3>
            <motion.h1
              ref={ref} // Gunakan ref untuk mendeteksi viewport
              initial={{ x: "-15vw", opacity: 0 }}  // Mulai dari luar layar kanan
              animate={h1} // Animasi dikontrol oleh useAnimation
              className="text-black  text-5xl md:text-6xl font-bold my-2 md:my-5">Full Stack Developer</motion.h1>
            <motion.p
              ref={ref} // Gunakan ref untuk mendeteksi viewport
              initial={{ x: "-15vw", opacity: 0 }}  // Mulai dari luar layar kanan
              animate={controls} // Animasi dikontrol oleh useAnimation
              className="title text-md 2xl:text-xl mt-4  text-gray-500 leading-[1.7rem]">
              A junior fullstack developer who currently focused on Web Development.
              Other than that, I also interested in UX/UI Design, Mobile and AI
              Development. I love to learn new things and always open to new
              opportunities.
            </motion.p>

            {/* Buttons */}

            <div className="buttons flex flex-row justify-center items-center space-x-4 mt-10" >
              <motion.button
                ref={ref} // Gunakan ref untuk mendeteksi viewport
                initial={{ y: "10vh", opacity: 0 }}
                animate={btn} // Animasi dikontrol oleh useAnimation
                className="title mr-3 rounded-2xl px-8 py-2 shadow-md ease-in-out bg-gray-700 hover:bg-transparent border-transparent hover:border-gray-700 border-2 text-gray-100 hover:text-gray-700 box-border transition-colors duration-500 text-xs sm:text-sm md:text-base"
              >
                <a target="_blank" rel="noopener noreferrer" download href="/docs/cv.pdf">Download CV</a>
              </motion.button>
              <motion.button
                ref={ref} // Gunakan ref untuk mendeteksi viewport
                initial={{ y: "10vh", opacity: 0 }}
                animate={btn1} // Animasi dikontrol oleh useAnimation
                className="title mr-3 rounded-2xl px-8 py-2 shadow-md  ease-in-out transparent border-2 border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-gray-100 box-border transition-colors  duration-500 text-xs sm:text-sm md:text-base"
              > <a href="#contact">Contact Me</a>
              </motion.button>

            </div>
          </div>

          {/* Right Column Image */}
          <div className="hidden md:flex col-span-1 mx-auto justify-center items-center" >
            <div className="rounded-full h-auto w-auto  lg:px-12 grayscale hover:grayscale-0 transition-all ease duration-300">
              <span className="block relative overflow-hidden w-auto h-auto">
                <motion.img
                  alt="Portrait of Alvalen Shafel"
                  className="rounded-full w-full h-full object-cover "
                  style={{
                    position: 'absolute',
                    inset: '0px',
                    boxSizing: 'border-box',
                    padding: '0px',
                    border: 'none',
                    margin: 'auto',
                    display: 'block',
                    width: '0px',
                    height: '0px',
                    minWidth: '100%',
                    maxWidth: '100%',
                    minHeight: '100%',
                    maxHeight: '100%',
                  }}
                  src="https://storage.googleapis.com/a1aa/image/r17btbacsCY6ABMdcBVwjR5duaLWntIN8flbWk6NWsQnAC7JA.jpg"
                  initial={{ x: "15vw", opacity: 0 }}  // Mulai dari luar layar kanan
                  animate={controls1} // Animasi dikontrol oleh useAnimation

                />
              </span>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;