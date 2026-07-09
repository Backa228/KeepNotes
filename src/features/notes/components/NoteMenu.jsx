import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux"
import { LabelPicker } from "../../labels/components/LabelPicker";
import { Button } from "../../../shared/ui/Button"
import { updateNoteLabels } from "../../labels/api/labelsApi"

export const NoteMenu = ({ note, onClose }) => {
    const dispatch = useDispatch()

    const menuRef = useRef(null)

    const [showPicker, setShowPicker] = useState(false);

    const [selectedLabels, setSelectedLabels] = useState([])

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                dispatch(updateNoteLabels({
                    noteId: note.id,
                    labelIds: selectedLabels,
                }))

                onClose();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dispatch, note.id, selectedLabels, onClose]);

    return (
        <div ref={menuRef} className="
        bg-white
        w-40
        border
        border-gray-300
        z-50">
            {!showPicker?  (
                <Button onClick={() => setShowPicker(true)} class="w-full">Close</Button>
            ) : (
                <LabelPicker selectedLabels={selectedLabels} setSelectedLabels={setSelectedLabels}/>
            )}
            
        </div>
    )
}