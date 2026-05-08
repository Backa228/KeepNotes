import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../auth/api/selectors";
import { createNote } from "../api/notesApi";

export const CreateNote = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const handleSubmit = () => {
        if (title.trim() === "" || content.trim() === "") {
            alert("Будь ласка, заповніть всі поля");
            return;
        }
        dispatch(createNote({
            title,
            content,
            userId: user.id
        }))

        setTitle("");
        setContent("");
    };

    return (
        <div className="flex gap-2 max-w-xl mx-auto my-5 bg-[#FACDD9] p-5 rounded-lg shadow-md hover:shedow-lg">
            <input type="text" 
                placeholder="Заголовок" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full outline-none text-lg pl-2 font-medium bg-transparent border-black border-4 rounded-2"/>

            <textarea 
                placeholder="Вміст" 
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full outline-none text-sg pl-2 bg-transparent border-black border-4 roundet-2"/>

            <button onClick={handleSubmit}>Створити нотатку</button>
          
        </div>
    );
};