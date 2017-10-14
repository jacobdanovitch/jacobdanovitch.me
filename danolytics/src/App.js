import React, {Component} from 'react'
import './App.css'
import Main from './Main'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './imgs/devicon-master/devicon-colors.css'
import './Global.css'
import SideBar from './Navbar'

class App extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="global">

                <Main/>
            </div>
        );
    }
}


export default App;
