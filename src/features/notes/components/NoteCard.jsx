import { useDispatch } from "react-redux"
import { deleteNote, updateNote } from "../api/notesApi"
import { useState } from "react"

export const NoteCard = ({ note }) => {
    const dispatch = useDispatch()

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

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

                    <button onClick={{handleSave}}>Зберегти</button>
                </>
            ) : (
                <>
                    <h3>{note.title}</h3>
                    <p>{note.content}</p>
                    <button onCkick={hanleDelete}>Видалити</button>
                </>
            )}
        </div>
    )
}