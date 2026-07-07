import { useState } from "react";
import { LabelPicker } from "../../labels/components/LabelPicker";
import { Button } from "../../../shared/ui/Button"

export const NoteMenu = (note, selectedLabels, setSelectedLabels) => {
    const [showPicker, setShowPicker] = useState(false);

    const handleClosePicker = () => {
        setShowPicker(false)
        
    }

    return (
        <div className="
        bg-white
        w-40
        border
        border-gray-300
        z-50">
            {showPicker && (
                <>
                    <LabelPicker note={note} selectedLabels={selectedLabels} setSelectedLabels={setSelectedLabels} />
                    <Button onClick={handleClosePicker} class="w-full">Close</Button>
                </>
            )}
            {!showPicker && (
                <Button onClick={() => setShowPicker(true)} className="w-full">Add Label</Button>
            )}
        </div>
    )
}