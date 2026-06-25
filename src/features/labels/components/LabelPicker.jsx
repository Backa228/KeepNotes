import { useSelector, useDispatch } from "react-redux";
import { selectLabels } from "../api/selectors";
import { selectUser } from "../../auth/api/selectors";
import { useState } from "react";
import { createLabel } from "../api/labelsApi";

export const LabelPicker = () => {
    const labels = useSelector(selectLabels)
    const dispatch = useDispatch()
    const user = useSelector(selectUser)

    const [newLabel, setNewLablel] = useState("")
    const handleCreateLabel = () => {
        if (!newLabel.trim()) return
    
        dispatch(createLabel({
            name: newLabel.trim(),
            userId: user.id,
        }))

        setNewLablel("")
    }

    return (
        <div>
            <div>
                <h3>Label note</h3>
                {labels.map((label) => {
                    <label key={label.id} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" value={label.id} />
                        {label.name}
                    </label>
                })}
            </div>
            <div>
                <input type="text"
                    value={newLabel}
                    onChange={(e) => setNewLablel(e.target.value)}/>
                <button onClick={handleCreateLabel}>+ Add Label</button>
            </div>
        </div>
    )
}