import React, {Component} from 'react';
import { withRouter, Link } from 'react-router-dom'
import { Jumbotron, Button, PageHeader } from 'react-bootstrap';
import './App.css';
import Resume from './resume.pdf'

class Home extends Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <PageHeader>Hi, I'm Jacob.</PageHeader>
                    <p>And this is why you should hire me.</p>
                    <a href="https://goo.gl/GfhHie"><Button bsClass="resume-button" type="submit">Download Resumé</ Button></a>
                    {/*
                        <a href={Resume} download="Resume">
                            <Button bsClass="resume-button" type="submit">Download Resumé</ Button>
                        </a>
                    */}
                </Jumbotron>
            </div>
        );
    }
}

export default withRouter(Home);
