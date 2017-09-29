import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import Error from './Error'

class Main extends React.Component {

    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/home' component={Home}/>
                    <Route component={Error}/>
                </Switch>
            </main>
        );
    }
}

export default Main;
