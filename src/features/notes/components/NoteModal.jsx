import { useEffect, useState, useRef } from "react";
import { Button } from "../../../shared/ui/Button";

export const NoteModal = ({ 
    title,
    content,
    setTitle,
    setContent,
    onSave,
    onClose,
 }) => {
    const contentRef = useRef(null);

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", handleEsc);
        
        return () => {
            window.removeEventListener("keydown", handleEsc);
        };
    }, [onClose]);

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
        if (contentRef.current) {
            requestAnimationFrame(() => {
                const content = contentRef.current;
    
                resizeTextarea();
    
                content.focus();
    
                const length = content.value.length;
    
                content.setSelectionRange(length, length);
                content.scrollTop = content.scrollHeight;
            });
        }
    }, []);

    return (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-start pt-40 justify-center p-4" onClick={onClose
            // (e) => {
            // if (e.target === e.currentTarget) {
            //     setIsEditing(false);
            // }}
        }>
            <div className="w-full max-w-2xl bg-white rounded-lg p-5 flex flex-col gap-4" onClick={(e) => e.stopPropagation()}>
                <input type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="Заголовок" 
                className="flex-1 outline-none bg-transparent text-lg font-semibold"/>

                <textarea 
                value={content} 
                onChange={handleContentChange} 
                placeholder="Вміст" 
                ref={contentRef}
                className="outline-none bg-transparent resize-none placeholder:text-gray-500 overflow-y-auto"/>

                <div className="flex justify-end gap-2">
                    <Button onClick={onClose}>Скасувати</Button>
                    <Button onClick={onSave}>Зберегти</Button> 
                </div>
            </div>
        </div>
    );
 }