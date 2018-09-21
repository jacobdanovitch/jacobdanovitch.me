import React, {Component} from 'react'
import './Nav.css'
import {MenuItem, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import Icon from 'react-icons-kit'
import {mail} from 'react-icons-kit/icomoon/mail'
import {github} from 'react-icons-kit/icomoon/github'
import {linkedin} from 'react-icons-kit/icomoon/linkedin'
import Home from 'material-ui/svg-icons/action/home'
import Me from 'material-ui/svg-icons/social/person-outline'
import Portfolio from 'material-ui/svg-icons/notification/folder-special'
import Skills from 'material-ui/svg-icons/device/developer-mode'
import Education from 'material-ui/svg-icons/social/school'
import Resume from 'material-ui/svg-icons/editor/insert-drive-file'
import Event from 'material-ui/svg-icons/social/share'

class TopNav extends Component {
    render() {
        const menuIcon = {
            width: 20,
            height: 20,
            marginRight: 5,
            marginTop: -10,
            marginBottom: -3,
            color: 'white'
        };

        const dropdownIcon = {
            width: 15,
            height: 15,
            marginRight: 10,
            marginTop: -10,
            marginBottom: -3,
            marginLeft: -5,
            color: 'white'
        };

        return (
            <div className="navbar-wrapper">
                <Navbar fluid staticTop bsStyle="custom">
                    <Navbar.Header>
                        <Navbar.Brand>
                            <LinkContainer to="">
                                <MenuItem>
                                    <Home style={menuIcon}/>Jacob Danovitch
                                </MenuItem>
                            </LinkContainer>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavDropdown eventKey={1} title={[<Me style={menuIcon}/>, 'About Me']}>
                                <LinkContainer to="/portfolio">
                                    <MenuItem eventKey={1.1}><Portfolio style={dropdownIcon}/>Portfolio</MenuItem>
                                </LinkContainer>
                                <LinkContainer to="/technologies">
                                    <MenuItem eventKey={1.2}><Skills style={dropdownIcon}/>Technologies</MenuItem>
                                </LinkContainer>
                                <LinkContainer to="/education">
                                    <MenuItem eventKey={1.3}><Education style={dropdownIcon}/>Education</MenuItem>
                                </LinkContainer>
                            </NavDropdown>
                            
                            <MenuItem eventKey={2} href="">
                                <Resume style={menuIcon}/>
                                Resumé
                            </MenuItem>

                            {/*
                            <LinkContainer to="/events">
                                <MenuItem eventKey={3}>
                                    <Event style={menuIcon}/> Events
                                </MenuItem>
                            </LinkContainer>
                            
                            <NavDropdown eventKey={4} title={[<Pencil style={menuIcon}/>, "Writing"]}>
                                <LinkContainer to="/tutorials">
                                    <MenuItem eventKey={4.1}><Wrench style={dropdownIcon}/>Workshops</MenuItem>
                                </LinkContainer>
                                <MenuItem eventKey={4.2} href="medium.com/danolytics"><Text style={dropdownIcon}/>Medium Blog</MenuItem>
                            </NavDropdown>
                            */}
                        </Nav>
                        <Nav pullRight>
                            <MenuItem href="https://github.com/jacobdanovitch">
                                <Icon size={20} style={{marginRight: "2%"}} icon={github}/>
                            </MenuItem>
                            <MenuItem href="https://linkedin.com/in/jacobdanovitch">
                                <Icon size={20} style={{marginRight: "2%"}} icon={linkedin}/>
                            </MenuItem>
                            <MenuItem href="mailto:jacob.danovitch@carleton.ca">
                                <Icon size={20} style={{marginRight: "2%"}} icon={mail}/>
                            </MenuItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default TopNav