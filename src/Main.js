import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import AnimatedCanvas from './Home/AnimatedCanvas'
import Home from './Home/Home'
import About from './Bio/About'
import {Portfolio, PortfolioHeader} from './Bio/Portfolio'
import {Skills, TechnologiesHeader} from './Bio/Skills'
import {Education, EducationHeader} from './Bio/Education'
import {Slideshow, EventHeader} from "./Events/Slideshow"
import Error from "./Error";

import MiniNav from './Nav/MiniNav'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './Assets/imgs/devicon-master/devicon-colors.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const routes = [
    {
        path: '/',
        exact: true,
        canvas: () => <Home/>,
        body: () => <div/>
    },
    {
        path: '/portfolio',
        exact: false,
        canvas: () => <PortfolioHeader/>,
        body: () => <Portfolio/>
    },
    {
        path: '/technologies',
        exact: false,
        canvas: () => <TechnologiesHeader/>,
        body: () => <Skills/>
    },
    {
        path: '/education',
        exact: false,
        canvas: () => <EducationHeader/>,
        body: () => <Education/>
    },
    {
        path: '/events',
        exact: false,
        canvas: () => <EventHeader/>,
        body: () => <Slideshow/>
    },
    {
        path: '',
        exact: false,
        canvas: () => <Home/>,
        body: () => <Error/>
    }
];

const Main = () => (
    <Router>
        <MuiThemeProvider>
            <main className="global">
                <AnimatedCanvas>
                    <Switch>
                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.canvas}
                            />
                        ))}
                    </Switch>
                </AnimatedCanvas>
                <Switch>
                    {routes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            component={route.body}
                        />
                    ))}
                </Switch>
                <div style={{display:"table", margin:"auto"}}><MiniNav/></div>
                <div style={{color: "gray", fontSize: "x-small", textAlign: "center", marginTop: "3%"}}>
                    <p>Jacob Danovitch</p>
                    <p>jacob.danovitch@carleton.ca</p>
                </div>
            </main>
        </MuiThemeProvider>
    </Router>
);

export default Main