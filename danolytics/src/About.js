import React, {Component} from 'react'
import {Button} from 'react-bootstrap'
import './About.css'
import {Link} from 'react-router-dom'

class About extends Component {
    render() {
        return (
            <div className="about">
                <h1 style={{paddingTop: "2%"}}><strong>I'm Jacob Danovitch.</strong></h1>
                <p style={{paddingTop: "3%"}}>I'm studying at the <strong>University of Carleton.</strong></p>
                <p>I'm an aspiring <strong>data scientist</strong> with an interest in deep learning.</p>
                <p>I also have experience with <strong> front</strong> and <strong>back-end </strong> development.
                </p>
                <p>I'm <strong>inquisitive by nature,</strong> teaching myself a wide array of technologies and
                    frameworks.</p>
                <p>I have a <strong>beautiful</strong> girlfriend who supplies artwork for this site.</p>
                <p>Playing <strong>club basketball and baseball </strong>growing up taught me the value of teamwork.
                </p>
                <p>I'm passionate about <strong>mental healthcare,</strong> and how technology can improve it.</p>
                <p>I enjoy <strong>photography</strong> and <strong>music</strong> in my spare time.</p>
            </div>
        )
    }
}

export default About;