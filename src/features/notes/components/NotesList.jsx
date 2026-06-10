import { useSelector } from "react-redux";
import { NoteCard} from "./NoteCard";
import { selectNotes } from "../api/selectors";

export const NotesList = () => {
        const notes = useSelector(selectNotes);//стан items = []
        
        console.log("NotesList - notes:", notes);

        return (
            <div className="base-container">
                <div className="columns-[240px] gap-4">
                    {notes.map((note) => (
                        <NoteCard key={note.id} note={note} />
                    ))}
                </div>
        </div>
        );
};