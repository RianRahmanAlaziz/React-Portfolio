import PropTypes from "prop-types";

function Navlink({ icon, onClick }) {
  return (
    // <a
    //   className="text-white mb-10"
    //   href="#"
    //   
    // >
    //   <i className={icon}></i>
    // </a>

    <button onClick={onClick}>

      <i className={`${icon} text-xl`}></i>
    </button>

  );
}

Navlink.propTypes = {
  icon: PropTypes.string.isRequired, // Pastikan 'icon' adalah string
};

export default Navlink;
