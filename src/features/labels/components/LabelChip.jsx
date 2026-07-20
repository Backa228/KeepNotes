export const LabelChip = ({ label }) => {
    return (
        <div className="inline-flex 
        items-center
        rounded-full
        bg-gray-200
        p-2
        text-xs
        font-medium
        text-gray-800
        shadow-sm
        hovel:bg-gray-300
        transition">
            {label.name}
        </div>
    )
}