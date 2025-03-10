const Button = ({ children, variation, ...props }) => (
    <button
        {...props}
        className={`title mr-3  rounded-2xl px-8 py-2 shadow-md transition duration-300 ease-in-out ${variation === "primary"
            ? "bg-[#101400] hover:bg-transparent border-transparent hover:border-[#101400] border-2 text-[#fdfcfb] hover:text-[#101400] box-border"
            : "transparent border-2 border-[#101400] text-[#101400] hover:bg-[#101400] hover:text-[#fdfcfb] box-border"
            }`}>
        {children}
    </button>
);

export default Button;