import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar'
import './Nav.css'
import headshot from '../Assets/imgs/headshot.jpg'
import {Image} from 'react-bootstrap'
import Icon from 'react-icons-kit'
import {mail} from 'react-icons-kit/icomoon/mail'
import {github} from 'react-icons-kit/icomoon/github'
import {linkedin} from 'react-icons-kit/icomoon/linkedin'
import {NavLink} from 'react-router-dom'
import Home from 'material-ui/svg-icons/action/home'
import Me from 'material-ui/svg-icons/social/person-outline'
import Portfolio from 'material-ui/svg-icons/notification/folder-special'
import Skills from 'material-ui/svg-icons/device/developer-mode'
import Education from 'material-ui/svg-icons/social/school'
import Arrow from 'material-ui/svg-icons/hardware/keyboard-arrow-up'
import Tutorials from 'material-ui/svg-icons/action/class'

class SideBar extends Component {
    render() {

        const menu = {
            fontSize: "12px",
            fontWeight: "bolder",
            lineHeight: "1px"
        };

        const menuIcon = {
            width: 45,
            height: 45,
            backgroundColor: "transparent",
            top: -1
        };

        return (
            <aside className="site-sidebar">
                <div className="site-sidebar-bg"/>
                <div className="site-sidebar-inner">
                    <div className="person">
                        <div className="person-avatar">
                            <Image src={headshot} alt="test" className="person-avatar" circle height={100} width={100}/>
                        </div>
                        <div className="person-content">
                            <h1 className="person-title">Jacob Danovitch</h1>
                            <h2 className="person-subtitle">Data Scientist | Software Dev</h2>
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
                            <List>
                                <ListItem
                                    style={menu}
                                    containerElement={<NavLink activeClassName="active" exact to="/home" />}
                                    leftAvatar={<Avatar style={menuIcon} icon={<Home/>}/>}>
                                    <NavLink exact to="/home">Home</NavLink>
                                </ListItem>
                                <ListItem initiallyOpen={true}
                                          style={menu}
                                          containerElement={<NavLink exact to="/about" />}
                                          leftAvatar={<Avatar style={menuIcon} icon={<Me />}/>}
                                          rightIcon={<Arrow style={{fill:"white", top:"-1"}}/>}
                                          nestedItems={[
                                              <ListItem style={menu} containerElement={<NavLink exact to="/about/portfolio" />} leftAvatar={<Avatar style={menuIcon} icon={<Portfolio />} />}><NavLink exact to="/about/portfolio">Portfolio</NavLink></ListItem>,
                                              <ListItem style={menu} containerElement={<NavLink exact to="/about/skills" />} leftAvatar={<Avatar style={menuIcon} icon={<Skills />} />}><NavLink exact to="/about/skills">Skills</NavLink></ListItem>,
                                              <ListItem style={menu} containerElement={<NavLink exact to="/about/education" />} leftAvatar={<Avatar style={menuIcon} icon={<Education />} />}><NavLink exact to="/about/education">Education</NavLink></ListItem>
                                          ]}
                                >
                                    <NavLink exact to="/about">About Me</NavLink>
                                </ListItem>
                                <ListItem
                                    style={menu}
                                    containerElement={<NavLink activeClassName="active" exact to="/tutorials" />}
                                    leftAvatar={<Avatar style={menuIcon} icon={<Tutorials/>}/>}>
                                    <NavLink activeClassName="active" exact to="/tutorials">Tutorials</NavLink>
                                </ListItem>
                            </List>
                        </div>
                    </nav>
                    <div className="block block-social">
                        <div className="block-title">Contact me</div>
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