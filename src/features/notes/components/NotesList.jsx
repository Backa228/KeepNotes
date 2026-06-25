import { useSelector } from "react-redux";
import { NoteCard } from "./NoteCard";
import { selectNotes, selectNotesLoading } from "../api/selectors";

export const NotesList = () => {
        const notes = useSelector(selectNotes);//стан items = []
        const isLoading = useSelector(selectNotesLoading);
        
        console.log("NotesList - notes:", notes);

        return (
        <div className="base-container">
            {isLoading ? (
                <div className="flex justify-center items-center h-full">
                  <span className="loading loading-spinner loading-md text-gray-800"></span>
                </div>
            ) : (
                <div className="columns-[240px] gap-4 w-full">
                    {notes.map((note) => (
                        <NoteCard key={note.id} note={note} />
                    ))}
                </div>
                )}
        </div>
        
        
        );
};