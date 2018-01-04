import React, {Component} from 'react'
import './AnimatedCanvas.css'
import BackgroundLogic from './BackgroundLogic'
import TopNav from "../Nav/Nav";

class AnimatedCanvas extends Component {
    constructor(props) {
        super(props);
    }


    handleRef = (canvas) => {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
    };

    render() {
        return (
            <div id="large-header" className="large-header">
                <TopNav/>
                <div className={"main-title "+this.props.componentClass}>
                    {this.props.children}
                </div>
                <canvas id="demo-canvas" ref={BackgroundLogic}/>
            </div>
        )
    }
}

export default AnimatedCanvas