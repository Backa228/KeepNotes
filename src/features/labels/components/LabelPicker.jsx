import { useSelector, useDispatch } from "react-redux";
import { selectLabels } from "../api/selectors";
import { selectUser } from "../../auth/api/selectors";
import { useState } from "react";
import { createLabel } from "../api/labelsApi";

export const LabelPicker = ({selectedLabels, setSelectedLabels}) => {
    const labels = useSelector(selectLabels);
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const [newLabel, setNewLabel] = useState("");

    const handleCreateLabel = () => {
        if (!newLabel.trim()) return;

        dispatch(createLabel({
            name: newLabel.trim(),
            userId: user.id,
        }))

        setNewLabel("");
    };

    const handleToggle = (labelId) => {
        setSelectedLabels(prev => 
            prev.includes(labelId) 
                ? prev.filter(id => id !== labelId)
                : [...prev, labelId]
        )
    }

    return (
        <div className="py-3 ">
            <h3 className="mb-1 text-md font-semibolt px-3">Label note</h3>
            <div className="max-h-48 overflow-auto space-y-2">
                {labels.map((label) => (
                    <label key={label.id} className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 px-3 text-md h-8">
                        <input
                            type="checkbox"
                            checked={selectedLabels.includes(label.id)}
                            onChange={() => handleToggle(label.id)}/>
                        {label.name}
                    </label>
                ))}
            </div>
            <div>
                <input type="text" 
                value={newLabel} 
                onChange={(e) => setNewLabel(e.target.value)} />
                <button onClick={handleCreateLabel}>+ Add Label</button>
            </div>
        </div>
    );

};