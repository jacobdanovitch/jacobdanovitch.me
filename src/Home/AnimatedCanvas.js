import React, {Component} from 'react'
import './AnimatedCanvas.css'
import BackgroundLogic from './BackgroundLogic'
import TopNav from "../Nav/Nav";
import IconButton from 'material-ui/IconButton'
import DownArrow from 'material-ui/svg-icons/hardware/keyboard-arrow-down'

class AnimatedCanvas extends Component {
    constructor(props) {
        super(props);
    }

    handleRef = (canvas) => {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
    };

    buttonClick() {
        this.scrollToBottom();
    }

    render() {
        return (
            <div>
                <div id="large-header" className="large-header">
                    <TopNav/>
                    <div className={"main-title"}>
                        {this.props.children}
                    </div>
                    <canvas id="demo-canvas" ref={BackgroundLogic}/>
                </div>
                {this.props.innerComponent}
            </div>
        )
    }
}

export default AnimatedCanvas