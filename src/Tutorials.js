import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {List, ListItem} from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import Divider from 'material-ui/Divider'
import {NavLink} from 'react-router-dom'
import {PageHeader} from 'react-bootstrap'
import './Notebooks.css'
import Open from 'material-ui/svg-icons/action/open-in-new'
import kmeans from './imgs/tutorials/kmeansworkshopimg.png'
import linreg from './imgs/tutorials/linregworkshopimg.png'

class TutorialLink extends Component {
    render() {
        return (
            <div className="tutorial-list-item">
                <ListItem
                    containerElement={<NavLink exact to={this.props.url}/>}
                    leftAvatar={<Avatar src={this.props.imgsrc}/>}
                    primaryText={this.props.title}
                    secondaryText={this.props.blurb}
                    rightIcon={<Open/>}/>
                <Divider/>
            </div>
        )
    }
}

export class Tutorials extends Component {
    render() {
        return (
            <div className="tutorials">
                <PageHeader>Workshops and Tutorials</PageHeader>
                <p>Hi there! This is a collection of my written workshops and tutorials, made either in my spare time,
                    or for an
                    organization like STEM Fellowship or the Carleton Computer Science Society. Right now, this page as
                    well as the linked
                    notebooks are works-in-progress; let me know if you find any problems with them!</p>
                <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                    <List>
                        <TutorialLink
                            url="/tutorials/k-means-workshop"
                            imgsrc={kmeans}
                            title="K-Means Clustering Workshop"
                            blurb="My workshop for the STEM Fellowship Big Data Challenge on K-Means Clustering in Python."
                        />
                        <TutorialLink
                            url="/tutorials/linear-regression-workshop"
                            imgsrc={linreg}
                            title="Linear Regression Workshop"
                            blurb="My workshop for the STEM Fellowship Big Data Challenge on Linear Regression in Python."
                        />
                    </List>
                </MuiThemeProvider>
                <p>If you notice any problems with these notebooks, or have any suggestions, contact me through the links on the sidebar!</p>
            </div>
        )
    }
}
