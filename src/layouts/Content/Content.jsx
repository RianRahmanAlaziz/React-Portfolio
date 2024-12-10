import { motion } from "framer-motion";

function Content() {
  const sidebarVariants = {
    hidden: { opacity: 0 }, // Status awal
    visible: { x: 0, opacity: 1 }, // Status saat terlihat
  };

  return (
    <main className="flex items-center min-h-full">
      <div className="flex-1">
        <motion.h2
          className="text-sm font-light tracking-widest mb-2"
          initial="hidden" // Status awal saat pertama kali ditampilkan
          animate="visible" // Status saat sidebar terlihat
          variants={sidebarVariants} // Variabel animasi
          transition={{ duration: 6 }} // Durasi animasi
        >
          RIAN RAHMAN AL AZIZ
        </motion.h2>
        <h1 className="text-5xl font-bold mb-4">Full Stack Developer</h1>
        <p className="text-lg leading-relaxed">
          A junior fullstack developer who currently focused on Web Development.
          Other than that, I also interested in UX/UI Design, Mobile and AI
          Development. I love to learn new things and always open to new
          opportunities.
        </p>
      </div>
      <div className="w-1/3">
        <motion.img
          alt="Portrait of Alvalen Shafel"
          className="rounded-full"
          height="300"
          src="https://storage.googleapis.com/a1aa/image/r17btbacsCY6ABMdcBVwjR5duaLWntIN8flbWk6NWsQnAC7JA.jpg"
          width="300"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            filter: "grayscale(100%) blur(10px)", // Awalnya hitam putih dan blur
          }}
          whileHover={{
            filter: "grayscale(0%) blur(0px)", // Berubah menjadi berwarna dan tidak blur saat hover
          }}
        />
      </div>
    </main>
  );
}

export default Content;
