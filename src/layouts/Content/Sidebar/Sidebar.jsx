import Navlink from "../../Component/Navlink/Navlink";

function Sidebar() {

  return (


    <div className="hidden md:flex fixed z-40 bg-gray-700 h-[50vh] w-14  flex-col justify-between items-center p-4 left-0 top-1/4 rounded-e-3xl">
      <ul id="sidebar" class="flex flex-col justify-evenly items-center h-full  text-gray-50">
        <li> <Navlink icon="fa fa-home" /> </li>
        <li> <Navlink icon="fa fa-user" /></li>
        <li><Navlink icon="fa fa-envelope" /></li>
      </ul>
    </div>
  );
}

export default Sidebar;
