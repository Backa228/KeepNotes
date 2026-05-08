import { useDispatch } from "react-redux"
import { deleteNote, updateNote } from "../api/notesApi"
import { useState } from "react"

export const NoteCard = ({ note }) => {
    const dispatch = useDispatch()

    const [title, setTitle] = useState(note.title)
    const [content, setContent] = useState(note.content)

    const [isEditing, setIsEditing] = useState(false)

    const hanleDelete = () => {
        dispatch(deleteNote(note.id))
    }

    const handleSave = () => {
        console.log("save note:", note.id, title, content)
        dispatch(updateNote({
            id: note.id,
            title,
            content,
        }))
        setIsEditing(false)
    }

    const handleEdit = () => {
        setIsEditing(true)
    }

    return (
        <div>
            {isEditing ? (
                <>
                    <input type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} 
                        placeholder="Заголовок"
                    />

                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Вміст"
                    />

                    <button onClick={handleSave}>Зберегти</button>
                </>
            ) : (
                <>
                    <h3>{note.title}</h3>
                        <p>{note.content}</p>
                    <button onClick={handleEdit}>Редагувати</button>
                    <button onClick={hanleDelete}>Видалити</button>
                </>
            )}
        </div>
    )
}