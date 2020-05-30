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
                {/* TODO: resizing the window containing the iframe is weirdly unresponse... investigate further.
                Seems to only happen when making the window smaller?
                Will probably need to do this in js */}
                <iframe
                    src="https://weather.gc.ca/forecast/canada/index_e.html?id=ab"
                    title="Colossal"
                ></iframe>
                {/* <iframe
                    src="https://www.thisiscolossal.com/"
                    title="Colossal"
                ></iframe> */}
            </div>
        </Draggable>
    );
};

export default Window;
