import React, { Component } from 'react'
import './App.css'
import Main from './Main'
import Header from './Navbar'

class App extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div>
                <Header/>
                {this.props.children}
                <Main />
            </div>
        );
    }
}

//removed <Footer /> from render return

export default App;
