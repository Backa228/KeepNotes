import { useSelector } from "react-redux"
// import { NoteCard } from "./NoteCard"
import { selectNotes } from "../api/selectors"

export const NotesList = () => {
    const notes = useSelector(selectNotes)
    
    return (
        <div>
            <h2>Список нотаток</h2>
            {notes.map((note) => (
                <li>
                    {note.title}, {note.content}
                </li>
            ))}
        </div>
    )

}