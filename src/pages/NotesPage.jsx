import { CreateNote } from "../features/notes/components/CreateNote";
import { NotesList } from "../features/notes/components/NotesList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchNotes } from "../features/notes/api/notesApi";
import { fetchLabels } from "../features/labels/api/labelsApi"

export const NotesPage = () => {
     const dispatch = useDispatch();
    
      useEffect(() => {
          dispatch(fetchNotes());
          dispatch(fetchLabels())
      }, [dispatch]);
    return (
        <div>
            <h1 className="text-3xl text-yellow-900 font-semibold tracking-normal mb-3">Сторінка нотаток</h1>

            <CreateNote />
            <NotesList />
        </div>
    );
};