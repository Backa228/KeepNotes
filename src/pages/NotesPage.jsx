import { CreateNote } from "../features/notes/components/CreateNote"
import { NotesList } from "../features/notes/components/NotesList"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchNotes } from "../features/notes/api/notesApi"

export const NotesPage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchNotes())
    }, [dispatch])

    return (
        <div>
            <h1 className="text-3xl text-yellow-900 font-semibold tracking-tight mb-3">Сторінка нотаток</h1>
            <CreateNote></CreateNote>
            <NotesList></NotesList>
        </div>
    )
}