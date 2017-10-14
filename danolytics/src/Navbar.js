import React, {Component} from 'react';
import './Nav.css'
import headshot from './imgs/headshot.jpg'
import {Image, MenuItem} from 'react-bootstrap'
import Icon from 'react-icons-kit'
import {mail} from 'react-icons-kit/icomoon/mail'
import {github} from 'react-icons-kit/icomoon/github'
import {linkedin} from 'react-icons-kit/icomoon/linkedin'
import {NavLink} from 'react-router-dom'

class SideBar extends Component {
    render() {

        const active = {
            content: " ",
            display: "block",
            position: "absolute",
            width: 0,
            height: 0,
            borderTop: "9px solid transparent",
            borderBottom: "9px solid transparent",
            borderRight: "8px solid #fff",
            bottom: "6px",
            left: "auto",
            right: 0
        };

        return (
            <aside className="site-sidebar">
                <div className="site-sidebar-bg"/>
                <div className="site-sidebar-inner">
                    <div className="person">
                        <div className="person-avatar">
                            <Image src={headshot} alt="test" className="person-avatar" circle height={300} width={300}/>
                        </div>
                        <div className="person-content">
                            <h1 className="person-title">Jacob Danovitch</h1>
                            <h2 className="person-subtitle">Data Scientist</h2>
                        </div>
                    </div>
                    <nav className="block main-navigation">
                        <div className="navigation-extend-bar">
                            <div className="social-icons">
                                <a href="mailto:jacob.danovitch@carleton.ca" className="button button-icon"
                                   title="mail: jacob.danovitch@carleton.ca">
                                    <Icon size={32} icon={mail}/>
                                </a>
                                <a href="https://github.com/jacobdanovitch" className="button button-icon"
                                   title="github: jacobdanovitch">
                                    <Icon size={32} icon={github}/>
                                </a>
                                <a href="https://www.linkedin.com/in/jacobdanovitch" className="button button-icon"
                                   title="linkedin: jacobdanovitch">
                                    <Icon size={32} icon={linkedin}/>
                                </a>
                            </div>
                        </div>
                        <div className="navigation-extendable">
                            <ul>
                                <li><NavLink exact to="/home" activeClassName="current">Home</NavLink></li>
                                <li><NavLink exact to="/about" activeClassName="current">About Me</NavLink>
                                    <ul>
                                        <li><NavLink exact to="/about/projects"
                                                     activeClassName="current">Projects</NavLink></li>
                                        <li><NavLink exact to="/about/skills" activeClassName="current">Skills</NavLink>
                                        </li>
                                        <li><NavLink exact to="/about/education"
                                                     activeClassName="current">Education</NavLink></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="block block-social">
                        <div className="block-title">Get in touch</div>
                        <div className="block-content">
                            <div className="social-icons">
                                <a href="mailto:jacob.danovitch@carleton.ca" className="button button-icon"
                                   title="mail: jacob.danovitch@carleton.ca">
                                    <Icon size={32} icon={mail}/>
                                </a>
                                <a href="https://github.com/jacobdanovitch" className="button button-icon"
                                   title="github: jacobdanovitch">
                                    <Icon size={32} icon={github}/>
                                </a>
                                <a href="https://www.linkedin.com/in/jacobdanovitch" className="button button-icon"
                                   title="linkedin: jacobdanovitch">
                                    <Icon size={32} icon={linkedin}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        )
    }
}

export default SideBar;