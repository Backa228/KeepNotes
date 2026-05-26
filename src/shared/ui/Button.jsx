export const Button = ({ children, onClick, type = "button", variant = "secondary", className = "" }) => {
    const baseStyles = "flex shrink-0 justify-center rounded text-[15px] border-2 transition items-center"

    const variants = {
        primary: "bg-blue-500 text-white hover:bg-blue-600 border-blue-200 px-6 py-2",
        secondary: "text-gray-800 hover:bg-gray-300 border-gray-200 px-6 py-2",
        icon: "border-0 p-0 h-9 w-9 rounded-full hover:bg-gray-200",
    }
    return (
        <button type={type} onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
            {children}
        </button>
    )
   
}