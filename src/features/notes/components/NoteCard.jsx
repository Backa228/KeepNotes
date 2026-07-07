import { useDispatch } from "react-redux";
import { deleteNote, updateNote } from "../api/notesApi";
import { useState } from "react";
import { Button } from "../../../shared/ui/Button";
import { MdDelete } from "react-icons/md";
import { NoteModal } from "./NoteModal";
import { IoMdMore } from "react-icons/io";
import { LabelPicker } from "../../labels/components/LabelPicker";
import { NoteMenu } from "./NoteMenu";
import { updateNoteLabels } from "../../labels/api/labelsApi"

export const NoteCard = ({ note }) => {
    const [showMenu, setShowMenu] = useState(false)

    const dispatch = useDispatch();

    const [title, setTitle] = useState(note.title);
    const [content, setContent] = useState(note.content);

    const [isEditing, setIsEditing] = useState(false);

    const [selectedLabels, setSelectedLabels] = useState([])

    const handleDelete = () => {
        dispatch(deleteNote(note.id));
    }

    const handleSave = () => {
        console.log("Saving note:", note.id, title, content);

        dispatch(updateNote({
            id: note.id,
            title,
            content,
        }))
        setIsEditing(false);
    }

    if (!showMenu) {
        dispatch(updateNoteLabels({
                noteId: note.id,
                labelIds: selectedLabels,
            }))
        }

    return ( 
        <div className="break-inside-avoid mb-2 pb-2">
            {isEditing && (
                <NoteModal
                    title={title}
                    content={content}
                    setTitle={setTitle}
                    setContent={setContent}
                    onSave={handleSave}
                    onClose={() => setIsEditing(false)}
                    isEditing={isEditing}
                />
            )}
            
            <div className="
            flex 
            flex-col 
            gap-3 
            bg-white/90
            border
            border-gray-300 
            rounded-lg  
            py-3 px-5 
            text-[15px]
            text-gray-800
            shadow-sm
            hover:shadow-md
            transition-shadow
            break-words" onClick={() => setIsEditing(true)}>
                {note.title && (
                    <h3 className="text-lg font-semibold text-gray-900">{note.title}</h3>
                )}
                {note.content && (
                    <div className="overflow-hidden max-h-[240px]"> 
                        <p className="leading-6 text-gray-700 whitespace-pre-wrap">{note.content}</p>
                    </div>
                )}
                <div className="flex justify-end gap-2" onClick={(e) => e.stopPropagation()}>
                    {/* <Button onClick={() => setIsEditing(true)} variant="icon"><MdEdit size={15}/></Button> */}
                    <Button onClick={() => setShowMenu(!showMenu)} variant="icon"><IoMdMore size={15} /></Button>
                    <Button onClick={handleDelete} variant="icon"><MdDelete size={15}/></Button>
                    {showMenu && (
                        <NoteMenu note={note} selectedLabels={selectedLabels} setSelectedLabels={setSelectedLabels} />
                    )}
                </div>

            </div>      
        </div>
    );
}