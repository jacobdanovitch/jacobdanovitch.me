import React, {Component} from 'react'
import {Route, Switch, withRouter} from 'react-router-dom'
import Home from './Home'
import Error from './Error'
import About from './About'
import {Projects} from './Projects'
import {Skills} from './Skills'
import Education from './Education'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import './animation.css'

import SideBar from './Navbar'

const Main = ({location}) => {
        const currentKey = location.pathname.split('/')[1] || '/';
        const timeout = { enter: 300, exit: 200 };

        return (
            <div>
                <SideBar/>
                <TransitionGroup className="global">
                    <CSSTransition key={currentKey} timeout={timeout} classNames="fade" appear>
                        <main style={{marginLeft: "25%"}}>
                            <Switch location={location}>
                                <Route exact path='/' component={Home}/>
                                <Route path='/home' component={Home}/>
                                <Route exact path='/about' component={About}/>
                                <Route path="/about/projects" component={Projects}/>
                                <Route path="/about/skills" component={Skills}/>
                                <Route path="/about/education" component={Education}/>
                                <Route component={Error}/>
                            </Switch>
                        </main>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        );
}

export default withRouter(Main);
