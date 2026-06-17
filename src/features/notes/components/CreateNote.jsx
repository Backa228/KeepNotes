import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../auth/api/selectors";
import { createNote } from "../api/notesApi";
import { Button } from "../../../shared/ui/Button";

export const CreateNote = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const noteRef = useRef(null);
    const contentRef = useRef(null);

    const textareaStyles = "w-full outline-none bg-transparent resize-none placeholder:text-gray-500 overflow-y-hidden";

    const resizeTextarea = () => {
        const textarea = contentRef.current;

        if (!textarea) return;

        textarea.style.height = "auto";

        const maxHeight = window.innerHeight * 0.5; 

        // textarea.style.height = textarea.scrollHeight + "px";
        
        textarea.style.height = `${Math.min(
            textarea.scrollHeight,
            maxHeight
        )}px`;

        textarea.style.overflowY =
            textarea.scrollHeight > maxHeight
                ? "auto"
                : "hidden";

    };
    const handleContentChange = (e) => {
        setContent(e.target.value);

        requestAnimationFrame(() => {
            resizeTextarea();
        });
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (noteRef.current && !noteRef.current.contains(event.target)) {
                setIsExpanded(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    
    useEffect(() => {
        if (!isExpanded)  return
        requestAnimationFrame(() => {
            if(!contentRef.current) return
                
            resizeTextarea();
            contentRef.current.focus();  
        })
    }, [isExpanded])

    const handleSubmit = () => {
        if (title.trim() === "" && content.trim() === "") {
            alert("Будь ласка, заповніть всі поля");
            return;
        }
        console.log(user);
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
            transition" 
            onClick={() => setIsExpanded(true)}>

                {isExpanded ? (
                    <>
                    <div className="flex justify-between gap-3 w-full items-center">
                        <input type="text" 
                        placeholder="Заголовок" 
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="flex-1 outline-none bg-transparent text-lg font-semibold"/>

                        <Button onClick={(e) => {
                        e.stopPropagation();
                        handleSubmit();
                        }}>Створити нотатку</Button>
 
                    </div>

                    <div className="flex flex-col gap-3 justify-between items-start" >
                         <textarea 
                        placeholder="Вміст..." 
                        value={content}
                        onChange={handleContentChange}
                        className={textareaStyles}
                            ref={contentRef} />
                <Button onClick={(e) => {
                            e.stopPropagation();
                            setIsExpanded(false)
                            }} variant="primary">Закрити
                        </Button>
                    </div>
                    </>
                ) : 
                (
                    <div className="flex justify-between gap-3 w-full items-center" > 
                    <textarea
                        rows={1} 
                        placeholder="Вміст..." 
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className={textareaStyles}/>

                    <Button onClick={(e) => {
                        e.stopPropagation();
                        handleSubmit();
                        }}>Створити нотатку
                    </Button>
                    </div>
                    )}
        </div>
    );
};