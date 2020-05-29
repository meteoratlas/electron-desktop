import React from "react";
import Draggable from "react-draggable";

const WindowTopBar = (props) => {
    return (
        <div className="window-top-bar">
            <p>{props.title}</p>

            <div className="window-control">
                <div className="window-minimize-button"></div>
                <div className="window-maximize-button"></div>
                <div className="window-close-button"></div>
            </div>
        </div>
    );
};

export default WindowTopBar;
