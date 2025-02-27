import PropTypes from "prop-types";

function Navlink({ icon, onClick }) {
    return (

        <button onClick={onClick}>

            <i className={`${icon} text-xl`}></i>
        </button>

    );
}

Navlink.propTypes = {
    icon: PropTypes.string.isRequired, // Pastikan 'icon' adalah string
};

export default Navlink;