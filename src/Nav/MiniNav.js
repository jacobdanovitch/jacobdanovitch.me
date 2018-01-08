import React, { Component } from 'react'
import '../Bio/About.css'
import {Button, ButtonGroup} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import IconButton from 'material-ui/IconButton'
import Skills from 'material-ui/svg-icons/device/developer-mode'
import Education from 'material-ui/svg-icons/social/school'
import Portfolio from 'material-ui/svg-icons/notification/folder-special'

class MiniNav extends Component {
    render(){
        return(
            <ButtonGroup justified bsClass="nav-buttons">
                <LinkContainer to="/portfolio">
                    <Button><Portfolio/> <span>My Portfolio</span></Button>
                </LinkContainer>
                <LinkContainer to="/technologies">
                    <Button><Skills/> <span>My Technologies</span></Button>
                </LinkContainer>
                <LinkContainer to="/education">
                    <Button><Education/> <span>My Education</span></Button>
                </LinkContainer>
            </ButtonGroup>
        )
    }
}

export default MiniNav