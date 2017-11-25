import React, {Component} from 'react'
import {Route, Switch, withRouter} from 'react-router-dom'
import Home from './Home'
import Error from './Error'
import About from './About'
import {Portfolio} from './Portfolio'
import {Skills} from './Skills'
import Education from './Education'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import './animation.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './imgs/devicon-master/devicon-colors.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SideBar from './Navbar'
import { Tutorials } from './Tutorials'
import { KMeansWorkshop, LinearRegressionWorkshop } from './Notebooks'

const Main = ({location}) => {
        const currentKey = location.pathname.split('/')[1] || '/';
        const timeout = { enter: 300, exit: 200 };

        return (
            <MuiThemeProvider>
                <SideBar/>
                <TransitionGroup className="global">
                    <CSSTransition key={currentKey} timeout={timeout} classNames="fade" appear>
                        <main style={{marginLeft: "25%"}}>
                            <Switch location={location}>
                                <Route exact path='/' component={Home}/>
                                <Route path='/home' component={Home}/>
                                <Route exact path='/about' component={About}/>
                                <Route path="/about/portfolio" component={Portfolio}/>
                                <Route path="/about/skills" component={Skills}/>
                                <Route path="/about/education" component={Education}/>
                                <Route exact path="/tutorials" component={Tutorials}/>
                                <Route path="/tutorials/k-means-workshop" component={KMeansWorkshop}/>
                                <Route path="/tutorials/linear-regression-workshop" component={LinearRegressionWorkshop}/>
                                <Route component={Error}/>
                            </Switch>
                        </main>
                    </CSSTransition>
                </TransitionGroup>
            </MuiThemeProvider>
        );
}

export default withRouter(Main);
