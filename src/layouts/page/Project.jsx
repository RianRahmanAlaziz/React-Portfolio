import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Gunakan react-intersection-observer
import { useEffect } from "react";


function Project() {
    // Mendeteksi apakah elemen terlihat di viewport
    const { ref, inView } = useInView({
        triggerOnce: false, // Animasi bisa terjadi berulang kali
        threshold: 0.2, // Mulai animasi saat 20% elemen terlihat
    });

    // Inisialisasi animasi untuk setiap elemen
    const elements = {
        controls: useAnimation(),
        line1: useAnimation(),
        line: useAnimation(),
        h2: useAnimation(),
        btn: useAnimation(),
        gambar: useAnimation(),
    };
    // Menjalankan animasi berdasarkan viewport
    useEffect(() => {
        if (inView) {
            elements.controls.start({ x: 0, opacity: 1, transition: { type: "spring", stiffness: 50, damping: 8 } });
            elements.line1.start({ x: 0, opacity: 1, transition: { type: "spring", stiffness: 50, damping: 7 } });
            elements.line.start({ x: 0, opacity: 1, transition: { type: "spring", stiffness: 40, damping: 8 } });
            elements.h2.start({ x: 0, opacity: 1, transition: { type: "spring", stiffness: 60, damping: 8 } });
            elements.btn.start({ y: 0, opacity: 1, transition: { type: "spring", stiffness: 60, damping: 8, duration: 0.5 } });
            elements.gambar.start({ x: 0, opacity: 1, transition: { type: "spring", stiffness: 70, } });
        } else {
            elements.controls.start({ x: "-15vw", opacity: 0 });
            elements.line1.start({ x: "15vw", opacity: 0 });
            elements.line.start({ x: "15vw", opacity: 0 });
            elements.h2.start({ x: "-15vw", opacity: 0 });
            elements.btn.start({ y: "15vh", opacity: 0 });
            elements.gambar.start({ x: "15vh", opacity: 0 });
        }
    }, [inView, elements]);
    return (
        <>
            <section className="flex items-center justify-center min-h-screen mx-auto ">
                <div className="flex-1 px-8">
                    <motion.h2
                        ref={ref} // Gunakan ref untuk mendeteksi viewport
                        initial={{ x: "15vw", opacity: 0 }}
                        animate={elements.h2} // Animasi dikontrol oleh useAnimation
                        className="text-6xl font-bold mb-4">
                        My Projects
                    </motion.h2>
                    <motion.div
                        ref={ref} // Gunakan ref untuk mendeteksi viewport
                        initial={{ x: "15vw", opacity: 0 }}
                        animate={elements.line1} // Animasi dikontrol oleh useAnimation
                        className="h-1 w-16 bg-gray-800 mb-2">
                    </motion.div>
                    <motion.div
                        ref={ref} // Gunakan ref untuk mendeteksi viewport
                        initial={{ x: "15vw", opacity: 0 }}
                        animate={elements.line} // Animasi dikontrol oleh useAnimation
                        className="h-1 w-24 bg-gray-800 mb-4">
                    </motion.div>
                    <motion.p
                        ref={ref} // Gunakan ref untuk mendeteksi viewport
                        initial={{ x: "-15vw", opacity: 0 }}  // Mulai dari luar layar kanan
                        animate={elements.controls} // Animasi dikontrol oleh useAnimation
                        className="text-gray-600 mb-8">
                        This is some of my projects that I have done and currently working on.
                    </motion.p>
                    <div className="mt-10 flex space-x-4">
                        <motion.button
                            ref={ref} // Gunakan ref untuk mendeteksi viewport
                            initial={{ y: "15vh", opacity: 0 }}
                            animate={elements.btn} // Animasi dikontrol oleh useAnimation

                            className="border bg-gray-800 text-white px-6 py-2 rounded-lg shadow-lg hover:text-gray-800 hover:bg-slate-50 hover:border-gray-800  mx-5">
                            Learn More
                        </motion.button>
                    </div>
                </div>
                <div className="w-2/6">
                    <motion.img
                        initial={{ x: "15vw", opacity: 0 }}  // Mulai dari luar layar kanan
                        animate={elements.gambar} // Animasi dikontrol oleh useAnimation
                        style={{
                            filter: "grayscale(100%) ", // Awalnya hitam putih dan blur
                        }}
                        whileHover={{
                            filter: "grayscale(0%) ", // Berubah menjadi berwarna dan tidak blur saat hover
                        }}
                        alt="Collage of various project screenshots"
                        className="rounded-lg shadow-lg"
                        height="400"
                        width="400"
                        src="https://storage.googleapis.com/a1aa/image/5eJSgV7fwPYABHPG10wCv0teyCwpnlw6xgGZYad3F94.jpg" />
                </div>
            </section>
        </>
    )
}

export default Project