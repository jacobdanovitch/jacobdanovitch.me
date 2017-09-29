import React, {Component} from 'react';
import { withRouter, Link } from 'react-router-dom'
import { Jumbotron, Button } from 'react-bootstrap';
import './App.css';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <Jumbotron bsClass="splash-pic">
                    <h2>Welcome to React</h2>
                    <p style={{fontSize:"larger"}}>Hi, I'm Jacob. This is my personal website.</p>
                    <form method="get" action="../../assets/documents/Jacob Danovitch Resume.pdf">
                        <Button bsClass="resume-button" type="submit">Download Resumé</ Button>
                    </form>
                </Jumbotron>
            </div>
        );
    }
}

export default withRouter(Home);
