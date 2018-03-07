import React, {Component} from 'react'
import MiniNav from '../Nav/MiniNav'
import './About.css'
import TypeWriter from "react-typewriter/build/react-typewriter.es2015";
import { emojify } from 'react-emojione';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typingComplete: false
        }
    }

    displayButtons = () => {
        setTimeout(() => {
            this.setState({ typingComplete: true })
        }, 2000)
    }

    render() {
        return (
            <div className="about">
                <TypeWriter typing={1} maxDelay={65} onTypingEnd={this.displayButtons}>
                    <h3 style={{textAlign: "left", marginLeft: "3%"}}>Hi! I'm <strong>Jacob.</strong></h3>
                    <p style={{textAlign: "left", marginLeft: "3%", marginTop: "-0.5%", marginBottom: "3%"}}>Let me tell
                        you a bit about myself.</p>
                    <p>I'm studying <strong>Computer Science</strong> at <strong>Carleton University </strong> on scholarship.</p>
                    <p>I made the Dean's List this year!{emojify(':tada:', {output: 'unicode'})}</p>
                    <p>I'm an aspiring <strong>data scientist</strong> with <strong>full-stack</strong> development experience.</p>
                    <p>I'm currently looking for a <strong>summer 2018 internship.</strong></p>
                </TypeWriter>
                {this.state.typingComplete &&
                <MiniNav/>}
            </div>
        )
    }
}

export default About;