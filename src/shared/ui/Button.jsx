export const Button = ({ children, onClick, type = "button", variant = "secondary", className = "" }) => {
    const baseStyles = "flex shrink-0 justify-center rounded px-6 py-2 text-[15px] border-2 transition"

    const variants = {
        primary: "bg-blue-500 text-white hover:bg-blue-600 border-blue-200",
        secondary: "text-gray-800 hover:bg-gray-300 border-gray-200",
    }
    return (
        <button type={type} onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
            {children}
        </button>
    )
   
}