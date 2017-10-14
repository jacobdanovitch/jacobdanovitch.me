import React, {Component} from 'react';
import { withRouter, Link } from 'react-router-dom'
import { Bootstrap, Jumbotron, Button, PageHeader } from 'react-bootstrap';
import './App.css';

class Home extends Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <PageHeader>Hi, I'm Jacob.</PageHeader>
                    <p>And this is why you should hire me.</p>
                    <form method="get" action="../../assets/documents/Jacob Danovitch Resume.pdf">
                        <Button bsClass="resume-button" type="submit">Download Resumé</ Button>
                    </form>
                </Jumbotron>
            </div>
        );
    }
}

export default withRouter(Home);
