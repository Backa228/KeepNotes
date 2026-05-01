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
        <div>
            <input type="text" 
            placeholder="Заголовок" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}/>

            <textarea 
            placeholder="Вміст" 
            value={content}
            onChange={(e) => setContent(e.target.value)}/>

            <button onClick={handleSubmit}>Створити нотатку</button>
          
        </div>
    );
};