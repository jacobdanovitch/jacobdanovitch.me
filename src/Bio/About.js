import React, {Component} from 'react'
import './About.css'
import TypeWriter from "react-typewriter/build/react-typewriter.es2015";

class About extends Component {
    render() {
        return (
            <div className="about">
                <TypeWriter typing={1}>
                    <h3 style={{textAlign:"left", marginLeft:"3%"}}>Hi! I'm <strong>Jacob.</strong></h3>
                    <p style={{textAlign:"left", marginLeft:"3%", marginTop:"-0.5%", marginBottom:"3%"}}>Let me tell you a bit about myself.</p>
                    <p>I'm studying <strong>Computer Science</strong> at <strong>Carleton University </strong> on scholarship.</p>
                    <p>I'm an aspiring <strong>data scientist</strong> with an interest in deep learning.</p>
                    <p>I also have experience with <strong>front</strong> and <strong>back-end</strong> development.</p>
                </TypeWriter>
            </div>
        )
    }
}

export default About;