import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import './Nav.css'
import {MenuItem, Nav, Navbar, NavDropdown, NavItem} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import Icon from 'react-icons-kit'
import {mail} from 'react-icons-kit/icomoon/mail'
import {github} from 'react-icons-kit/icomoon/github'
import {linkedin} from 'react-icons-kit/icomoon/linkedin'
import Home from 'material-ui/svg-icons/action/home'
import Me from 'material-ui/svg-icons/social/person-outline'
import Portfolio from 'material-ui/svg-icons/notification/folder-special'
import Event from 'material-ui/svg-icons/social/share'
import Pencil from 'material-ui/svg-icons/content/create'
import Skills from 'material-ui/svg-icons/device/developer-mode'
import Education from 'material-ui/svg-icons/social/school'

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
            color: 'black'
        };

        return (
            <div className="navbar-wrapper">
                <Navbar fluid fixed Top bsStyle="custom">
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
                                <LinkContainer to="/about/portfolio">
                                    <MenuItem eventKey={1.1}><Portfolio style={dropdownIcon}/>Portfolio</MenuItem>
                                </LinkContainer>
                                <LinkContainer to="/about/technologies">
                                    <MenuItem eventKey={1.2}><Skills style={dropdownIcon}/>Technologies</MenuItem>
                                </LinkContainer>
                                <LinkContainer to="/about/education">
                                    <MenuItem eventKey={1.3}><Education style={dropdownIcon}/>Education</MenuItem>
                                </LinkContainer>
                            </NavDropdown>
                            {/*
                                <LinkContainer to="/events">
                                <MenuItem eventKey={2}>
                                    <Event style={menuIcon}/> Events
                                </MenuItem>
                            </LinkContainer>
                                */}
                            <NavDropdown eventKey={3} title={[<Pencil style={menuIcon}/>, "Writing"]}>
                                <LinkContainer to="/tutorials">
                                    <MenuItem eventKey={3.1}>STEM Fellowship Workshops</MenuItem>
                                </LinkContainer>
                                <MenuItem eventKey={3.2} href="medium.com/danolytics">Medium.com</MenuItem>
                            </NavDropdown>
                        </Nav>
                        <Nav pullRight>
                            <MenuItem>
                                <Navbar.Link eventKey={1} href="https://github.com/jacobdanovitch"><Icon size={20}
                                                                                                         style={{marginRight: "2%"}}
                                                                                                         icon={github}/></Navbar.Link>
                            </MenuItem>
                            <MenuItem>
                                <Navbar.Link eventKey={2} href="https://linkedin.com/in/jacobdanovitch"><Icon size={20}
                                                                                                              style={{marginRight: "2%"}}
                                                                                                              icon={linkedin}/></Navbar.Link>
                            </MenuItem>
                            <MenuItem>
                                <Navbar.Link eventKey={3} href="mailto:jacob.danovitch@carleton.ca"><Icon size={20}
                                                                                                          style={{marginRight: "2%"}}
                                                                                                          icon={mail}/></Navbar.Link>
                            </MenuItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default TopNav