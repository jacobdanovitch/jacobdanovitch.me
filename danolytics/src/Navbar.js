import React, {Component} from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Nav from 'react-bootstrap/lib/Nav';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import NavItem from 'react-bootstrap/lib/NavItem';

class Header extends Component {

    render() {
        return (
            <Navbar bsStyle="inverse" collapseOnSelect={true} fluid={true} fixedTop={true}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Danolytics</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">About Me</NavItem>
                        <NavDropdown eventKey={2} title="Projects" id="basic-nav-dropdown">
                            <MenuItem eventKey={2.1}>Action</MenuItem>
                            <MenuItem eventKey={2.2}>Another action</MenuItem>
                            <MenuItem eventKey={2.3}>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={2.3}>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">Contact</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    )
    }
    }

    export default Header;