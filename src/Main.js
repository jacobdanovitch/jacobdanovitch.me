import React, { Component }from 'react'
import {Route, withRouter} from 'react-router-dom'
import Home from './Home/Home'
import Error from './Error'
import {Portfolio} from './Bio/Portfolio'
import {Skills} from './Bio/Skills'
import Education from './Bio/Education'
import {AnimatedSwitch} from 'react-router-transition'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './Assets/imgs/devicon-master/devicon-colors.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AnimatedCanvas from './Home/AnimatedCanvas'
import {Tutorials} from './Tutorials/Tutorials'
import {KMeansWorkshop, LinearRegressionWorkshop} from './Tutorials/Notebooks'
import About from './Bio/About'

class Main extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <main className="global">
                    <AnimatedCanvas>
                        <Home/>
                    </AnimatedCanvas>
                    <AnimatedSwitch
                        atEnter={{opacity: 0.25}}
                        atLeave={{opacity: 1}}
                        atActive={{opacity: 1}}
                        mapStyles={styles => {
                            if (styles.opacity > 1) {
                                return {display: 'none'}
                            }
                            return {opacity: styles.opacity}
                        }}
                        className="switch-wrapper"
                    >
                        <Route exact path='/' component={About}/>
                        <Route path='/home' component={About}/>
                        <Route exact path='/about' component={About}/>
                        <Route path="/about/portfolio" component={Portfolio}/>
                        <Route path="/about/technologies" component={Skills}/>
                        <Route path="/about/education" component={Education}/>
                        <Route exact path="/tutorials" component={Tutorials}/>
                        <Route path="/tutorials/k-means-workshop" component={KMeansWorkshop}/>
                        <Route path="/tutorials/linear-regression-workshop" component={LinearRegressionWorkshop}/>
                        <Route component={Error}/>
                    </AnimatedSwitch>
                </main>
            </MuiThemeProvider>
        );
    }
}

export default withRouter(Main);
