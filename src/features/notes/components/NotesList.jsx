import { useSelector, useDispatch } from "react-redux"
import { NoteCard } from "./NoteCard"
import { selectNotes } from "../api/selectors"
import { useState } from "react"

export const NotesList = () => {
    const notes = useSelector(selectNotes)
    const [title, setTitle] = useState("")
    const [constent, setContent] = useState("")

    const [isEditing, setIsEditing] = useState(false)

    return (
        <div>
            <h2>Список нотаток</h2>
            {notes.map((note) => (
                <NoteCard key={note.id} note={note} />
            ))}
        </div>
    )

}