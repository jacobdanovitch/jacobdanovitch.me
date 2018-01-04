import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import {Button, PageHeader} from 'react-bootstrap';
import './Home.css';

//import BackgroundLogic from './BackgroundLogic'

class Home extends Component {
    render() {
        return (
            <div className="home">
                <PageHeader>Hi, I'm <strong>Jacob</strong></PageHeader>
                <p>And this is why you should hire me.</p>
                <a href="https://goo.gl/GfhHie"><Button bsClass="resume-button" type="submit">Download
                    Resumé</ Button></a>
            </div>
        )
    }
}

export default withRouter(Home);
