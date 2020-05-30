import React, { useState } from "react";

// represents a minimized window
const TaskbarButton = (props) => {
    // whether this button represents the currently operated window
    const [selected, setSelected] = useState(false);
    return (
        <div className="taskbar-button" onClick={props.minOrMaximize}>
            <p>{props.title}</p>
        </div>
    );
};

export default TaskbarButton;
