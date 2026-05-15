import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../auth/api/selectors";
import { createNote } from "../api/notesApi";

export const CreateNote = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    
    const noteRef = useRef(null) 

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (noteRef.current && !noteRef.current.contains(event.target)) {
                setIsExpanded(false)
            }
        } 

        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    const handleSubmit = () => {
        if (title.trim() === "" && content.trim() === "") {
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
        setIsExpanded(false);
    };

    return (
        <div 
            ref={noteRef}
            className="
            flex justify-between gap-3 
            flex-col
            max-w-2xl 
            min-h-12
            mx-auto 
            mt-8 mb-4
            bg-white/90 
            py-3 px-5 
            rounded-lg 
            text-[15px]
            text-gray-800
            shadow-[0_0_12px_rgba(0,0,0,0.2)]
            hover:bg-white/100 
            transition" onClick={() => setIsExpanded(true)}>

                {isExpanded ? (
                    <>
                    <div className="flex justify-between gap-3 w-full items-center">
                        <input type="text" 
                            placeholder="Заголовок..." 
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="flex-1 outline-none bg-transparent text-lg font-semibold"/>

                         <button onClick={handleSubmit} className="
                            flex    
                            shrink-0 
                            justify-center 
                            items-center 
                            rounded 
                            px-6 py-2 
                            text-[15px] 
                            border-2
                            border-gray-200
                            hover:bg-gray-200">Створити нотатку</button> 
                    </div>

                    <div>
                         <textarea 
                            placeholder="Вміст..." 
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="flex-1 outline-none bg-transparent resize-none placeholder:text-gray-500"/>

                        <button onClick={(e) => {
                            e.stopPropagation()
                            setIsExpanded(false)
                        }} className="
                            flex    
                            shrink-0 
                            justify-center 
                            items-center 
                            rounded 
                            px-6 py-2 
                            text-[15px] 
                            border-2
                            border-gray-200
                            hover:bg-gray-200">Закрити</button> 
                    </div>
                    </>
                ) : 
                (
                    <div className="flex justify-between gap-3 w-full items-center"> 
                        <textarea 
                            row={1}
                            placeholder="Вміст..." 
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="flex-1 outline-none bg-transparent resize-none "/>

                        <button onClick={(e) => {
                            e.stopPropagation()
                            handleSubmit()
                        }} className="
                            flex    
                            shrink-0 
                            justify-center 
                            items-center 
                            rounded 
                            px-6 py-2 
                            text-[15px] 
                            border-2
                            border-gray-200
                            hover:bg-gray-200">Створити нотатку</button> 
                </div>

                )}
        </div>
    );
};