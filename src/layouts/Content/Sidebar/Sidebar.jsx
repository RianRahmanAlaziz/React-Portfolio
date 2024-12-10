import Navlink from "../../Component/Navlink/Navlink";
import { motion } from "framer-motion";

function Sidebar() {
  // Variabel untuk animasi
  const sidebarVariants = {
    hidden: { x: -100, opacity: 0 }, // Status awal
    visible: { x: 0, opacity: 1 }, // Status saat terlihat
  };
  return (
    <motion.aside
      className="hidden md:flex flex-col w-16 h-screen justify-center items-center"
      initial="hidden" // Status awal saat pertama kali ditampilkan
      animate="visible" // Status saat sidebar terlihat
      variants={sidebarVariants} // Variabel animasi
      transition={{ duration: 0.9 }} // Durasi animasi
    >
      <div className=" bg-gray-800 flex flex-col rounded-r-[25px] py-10 px-4">
        <Navlink icon="fa fa-home" />
        <Navlink icon="fa fa-user" />
        <Navlink icon="fa fa-envelope" />
      </div>
    </motion.aside>
  );
}

export default Sidebar;
