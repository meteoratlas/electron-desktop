import React from "react";

const WindowTopBar = (props) => {
    return (
        <div className="window-top-bar">
            <p></p>
            <p>{props.title}</p>

            <div className="window-control">
                <div className="window-minimize-button window-control-button"></div>
                <div className="window-maximize-button window-control-button"></div>
                <div className="window-close-button window-control-button"></div>
            </div>
        </div>
    );
};

export default WindowTopBar;
