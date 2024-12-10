import PropTypes from "prop-types";

function Navlink({ icon }) {
  return (
    <a
      className="text-white mb-10 hover:border-b-4 hover:border-white"
      href="#"
    >
      <i className={icon}></i>
    </a>
  );
}

Navlink.propTypes = {
  icon: PropTypes.string.isRequired, // Pastikan 'icon' adalah string
};

export default Navlink;
