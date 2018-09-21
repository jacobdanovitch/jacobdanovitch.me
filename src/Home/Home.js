import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import {PageHeader} from 'react-bootstrap';
import './Home.css';
import TypeWriter from "react-typewriter/build/react-typewriter.es2015";
// import { emojify } from 'react-emojione'

// https://www.linkedin.com/badges/profile/create?vanityname=jacobdanovitch&trk=pprof-settings-badge

class Home extends Component {
    render() {
        return (
            <div className="home">
                <TypeWriter typing={1} fixed maxDelay={60}>
                    <PageHeader>Hi! I'm <strong>Jacob.</strong></PageHeader>
                    <h3 style={{marginTop: "-0.5%", marginBottom: "5%"}}>Let me tell you a bit about myself. I'm
                        ...</h3>
                    <div style={{marginLeft: "5%"}}>
                        <p>-A software engineering intern at <strong>Microsoft</strong>.</p>
                        <p>-A <strong>dean's list</strong> student studying <strong>Computer Science</strong> at <strong>Carleton University</strong>.</p>
                        <p>-Researching <strong>artificial intelligence</strong> and <strong>natural language processing</strong>.</p>
                        
                    </div>
                </TypeWriter>
            </div>
        )
    }
}

export default withRouter(Home);
