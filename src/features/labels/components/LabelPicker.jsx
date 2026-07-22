import { useSelector, useDispatch } from "react-redux";
import { selectLabels } from "../api/selectors";
import { selectUser } from "../../auth/api/selectors";
import { useState } from "react";
import { createLabel } from "../api/labelsApi";
import { Button } from "../../../shared/ui/Button";

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
        <div className="flex flex-col py-3 gap-2">
            <h3 className="text-md font-medium px-3">Label note</h3>
            <div className="flex items-center gap-2 px-3">
                <input type="text" placeholder="Enter label name"
                value={newLabel} 
                onChange={(e) => setNewLabel(e.target.value)}
                className="flex-1 outline-none text-sm placeholder:text-gray-400 bg-white"/>
                <Button onClick={handleCreateLabel} variant="icon">+</Button>
            </div>
            <div className="max-h-48 overflow-y-auto space-y-2">
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
        </div>
    );

};