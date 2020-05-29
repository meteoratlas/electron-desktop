import React from "react";
import WindowTopBar from "./WindowTopBar";
import Draggable from "react-draggable";

const Window = (props) => {
    const onMinimizeClicked = () => {};
    const onMaximizeClicked = () => {};
    const onCloseClicked = () => {};
    return (
        <Draggable handle=".window-top-bar" bounds="parent">
            <div className="window">
                <WindowTopBar
                    title={props.name}
                    onMinimize={onMinimizeClicked}
                    onMaximize={onMaximizeClicked}
                    onClose={onCloseClicked}
                />
                Window Content
            </div>
        </Draggable>
    );
};

export default Window;
