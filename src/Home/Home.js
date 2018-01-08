import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import {Button, PageHeader} from 'react-bootstrap';
import './Home.css';
import TypeWriter from "react-typewriter/build/react-typewriter.es2015";

class Home extends Component {
    render() {
        return (
            <div className="home">
                <TypeWriter typing={1}  fixed maxDelay={80}>
                    <PageHeader>Hi! I'm <strong>Jacob.</strong></PageHeader>
                    <h3 style={{marginTop: "-0.5%", marginBottom: "5%"}}>Let me tell you a bit about myself. I'm ...</h3>
                    <div style={{marginLeft:"5%"}}>
                    <p>-Studying <strong>Computer Science</strong> at <strong>Carleton University </strong> on scholarship.</p>
                    <p>-An aspiring <strong>data scientist</strong> with <strong>front</strong> and <strong>back-end</strong> experience.</p>
                    <p>-Currently looking for a <strong>summer 2018 internship.</strong></p>
                    </div>
                    <p style={{marginTop:"5%", fontSize:"larger"}}>Now, I'd like to hear from <strong>you</strong>.</p>
                </TypeWriter>
            </div>
        )
    }
}

export default withRouter(Home);
