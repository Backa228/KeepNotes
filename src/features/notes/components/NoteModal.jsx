import { useEffect, useState, useRef } from "react";
import { Button } from " .. / .. / .. /shared/ui/Button";

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
                setIsEditing(false);
            }
        }

        window.addEventListener("keydown", handleEsc);

        return () => {
            window.removeEventListener("keydown", handleEsc);

        }
    }, [])

    useEffect(() => {
        if (isEditing) {
            requestAnimationFrame(() => {
                const content = contentRef.current
                content.focus()
    
                resizeTextarea()
    
                const length = content.value.length

                content.setSelectionRange(length, length)
                content.scrollTop = content.scrollHeight
            })
        }
    }, [isEditing])

    const handleContentChange = (e) => {
        setContent(e.target.value)

        requestAnimationFrame(() => {
            resizeTextarea()
        })
    }
}