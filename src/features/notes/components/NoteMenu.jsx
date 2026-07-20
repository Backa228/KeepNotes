import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux"
import { LabelPicker } from "../../labels/components/LabelPicker";
import { Button } from "../../../shared/ui/Button"
import { updateNoteLabels } from "../../labels/api/labelsApi"
import { fetchNotes } from "../api/notesApi"

export const NoteMenu = ({ note, onClose }) => {
    const dispatch = useDispatch()

    const menuRef = useRef(null)

    const [showPicker, setShowPicker] = useState(false);

    const [selectedLabels, setSelectedLabels] = useState([])

    const handleCloseMenu = async () => {
        await dispatch(updateNoteLabels({
            noteId: note.id,
            labelIds: selectedLabels,
        })).unwrap();
        
        await dispatch(fetchNotes());

        onClose();
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                handleCloseMenu();
            } 
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dispatch, note.id, selectedLabels, onClose]);


    useEffect(() => {
        setSelectedLabels(note.labels?.map(label => label.id) ?? []);

    },[note.labels]);

    return (
        <div ref={menuRef} className="
        absolute
        right-0
        top-10
        w-40
        rounded-md
        bg-white
        border
        border-gray-200
        shadow-xl
        overflow-hidden
        z-50">
            {!showPicker?  (
                <Button onClick={() => setShowPicker(true)} class="w-full">Add label</Button>
            ) : (
                <LabelPicker selectedLabels={selectedLabels} setSelectedLabels={setSelectedLabels}/>
            )}
            
        </div>
    )
}