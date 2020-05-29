import React, { Component } from "react";
import Taskbar from "./Taskbar";
import Window from "./Window";

class Desktop extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div id="desktop">
                <Window name="Visual Studio Code" />
                <Taskbar />
            </div>
        );
    }
}

export default Desktop;
