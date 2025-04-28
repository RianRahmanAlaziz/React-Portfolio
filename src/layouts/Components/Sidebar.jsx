import Navlink from "./Navlink";

function Sidebar() {
  // Fungsi untuk mengatur navigasi antar bagian menggunakan fullpage.js
  const handleMoveToSection = (index) => {
    if (window.fullpage_api) {
      window.fullpage_api.moveTo(index);
    }
  };

  // Fungsi untuk menentukan apakah bagian tertentu aktif
  const containIsActive = (index) => {
    if (window.fullpage_api) {
      const activeSection = window.fullpage_api.getActiveSection();
      console.log("Active Section Index:", activeSection.index); // Debugging untuk memeriksa index
      if (activeSection.index === index) {
        return "li active"; // Mengembalikan class 'active' jika bagian tersebut aktif
      }
    }
    return "li"; // Default class jika tidak aktif
  };
  return (
    <div className="hidden md:flex fixed z-40 bg-[#101400]  h-[50vh] w-14 flex-col justify-between items-center p-4 left-0 top-1/4 rounded-e-3xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] ">
      <ul
        id="sidebar"
        className="flex flex-col justify-evenly items-center h-full text-[#fcfdfe]"
      >
        <li data-menuanchor="home" className="li active">
          <Navlink icon="fa fa-home " onClick={() => handleMoveToSection(1)} />

        </li>
        <li data-menuanchor="about" className={containIsActive(2)}>
          <Navlink icon="fa fa-user" onClick={() => handleMoveToSection(2)} />
        </li>
        <li data-menuanchor="projects" className={containIsActive(3)}>
          <Navlink icon="fa fa-folder-open" onClick={() => handleMoveToSection(3)} />
        </li>
        <li data-menuanchor="contact" className={containIsActive(4)}>
          <Navlink icon="fa fa-envelope" onClick={() => handleMoveToSection(4)} />
        </li>
      </ul>
    </div>

  );
}

export default Sidebar;
