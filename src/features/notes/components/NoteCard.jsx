import { useDispatch } from "react-redux";
import { deleteNote, updateNote } from "../api/notesApi";
import { useState } from "react";
import { Button } from "../../../shared/ui/Button";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

export const NoteCard = ({ note }) => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState(note.title);
    const [content, setContent] = useState(note.content);

    const [isEditing, setIsEditing] = useState(false);

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

    return ( 
        <div className="break-inside-avoid mb-2 pb-2">
            {isEditing ? (
                <div className="fixed insert-0 z-50 bg-black/40 flex items-center justify-center p-4">
                    <div className="w-full max-w-2xl bg-white rounded-lg p-6 flex flex-col gap-4">
                        <input type="text" 
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)} 
                            placeholder="Заголовок" 
                            className="flex-1 outline-none bg-transparent text-lg font-semibold"/>

                        <textarea 
                            value={content} 
                            onChange={(e) => setContent(e.target.value)} 
                            placeholder="Вміст"
                            className="flex-1 outline-none bg-transparent resize-none placeholder:text-gray-500"/>
            
                        <Button onClick={handleSave}>Зберегти</Button>
                    </div>
                </div>
            ) : (
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
                break-words">
                    {note.title && (
                        <h3 className="text-lg font-semibold text-gray-900">{note.title}</h3>
                    )}
                    {note.content && (
                        <div className="overflow-hidden max-h-[240px]"> 
                            <p className="leading-6 text-gray-700 whitespace-pre-wrap">{note.content}</p>
                        </div>
                    )}
                    <div className="flex justify-end gap-2">
                        <Button onClick={() => setIsEditing(true)} variant="icon"><MdEdit size={15}/></Button>
                        <Button onClick={handleDelete} variant="icon"><MdDelete size={15}/></Button>
                    </div>
                    
                </div>
            )}
            
        </div>
    );
}