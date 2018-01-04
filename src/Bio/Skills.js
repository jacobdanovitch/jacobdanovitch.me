import React, {Component} from 'react'
import './Skills.css'
import FeatureRow from './FeatureRow'
import {OverlayTrigger, PageHeader, Popover, Tabs, Tab} from 'react-bootstrap'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List} from 'material-ui/List';
import IconBootstrap from '../Assets/imgs/devicon-master/icons/bootstrap/bootstrap-plain-wordmark.svg'
import IconCss3 from '../Assets/imgs/devicon-master/icons/css3/css3-plain-wordmark.svg'
import IconGit from '../Assets/imgs/devicon-master/icons/git/git-plain-wordmark.svg'
import IconGithub from '../Assets/imgs/devicon-master/icons/github/github-original-wordmark.svg'
import IconHtml5 from '../Assets/imgs/devicon-master/icons/html5/html5-plain-wordmark.svg'
import IconJava from '../Assets/imgs/devicon-master/icons/java/java-original-wordmark.svg'
import IconJavascript from '../Assets/imgs/devicon-master/icons/javascript/javascript-original.svg'
import IconJetbrains from '../Assets/imgs/devicon-master/icons/jetbrains/jetbrains-original.svg'
import IconNpm from '../Assets/imgs/devicon-master/icons/npm/npm-original-wordmark.svg'
import IconPython from '../Assets/imgs/devicon-master/icons/python/python-original.svg'
import IconReact from '../Assets/imgs/devicon-master/icons/react/react-original-wordmark.svg'
import IconSlack from '../Assets/imgs/devicon-master/icons/slack/slack-original-wordmark.svg'
import IconR from '../Assets/imgs/R_logo.svg'
import IconSQLite from '../Assets/imgs/SQLite_logo.svg'
import Technologies from 'material-ui/svg-icons/device/developer-mode'
import SoftwareDev from 'material-ui/svg-icons/action/important-devices'
import Data from 'material-ui/svg-icons/social/poll'
import ProjectManagement from 'material-ui/svg-icons/file/cloud-done'

export class Popup extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <OverlayTrigger
                placement="top"
                overlay={<Popover
                    id="popover-trigger-hover-focus"
                    title={this.props.title}>
                    {this.props.description}
                </Popover>}>
                <FeatureRow
                    htmlClass="bio-list-item"
                    imgsrc={this.props.img}
                    title={this.props.title}
                    blurb={this.props.description}
                />
            </OverlayTrigger>
        )
    }
}

export class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: 1
        }
    }

    handleSelect(key) {
        this.setState({key});
    };

    render() {
        return (
            <div className="bio">
                <PageHeader><Technologies style={{height:"30", width:"30"}}/> My Skills</PageHeader>
                <MuiThemeProvider>
                    <Tabs activeKey={this.state.key} onSelect={this.handleSelect.bind(this)} id="">
                        <Tab eventKey={1} title={[<SoftwareDev/>,<span>Software Development</span>]}>
                            <h3 className="bio-list-subheaders">Software Development</h3>
                            <List>
                                <Popup img={IconJava} title="Java"
                                       description="I've completed AP Computer Science using Java, and will be taking Computer Science II using it in the winter."/>
                                <Popup img={IconReact} title="React"
                                       description="I've built both my own and Medimo Labs' website using React. While I originally built my website in pure HTML/CSS, React's dynamic, powerful components motivated me to redo my whole site."/>
                                <Popup img={IconJavascript} title="Javascript"
                                       description="In building Medimo Labs' website, I learned Javascript through the React framework, which I continued using for this site."/>
                                <Popup img={IconNpm} title="NPM"
                                       description="I learned the basics of NPM working with Medimo Labs and beginning my work with React."/>
                                <Popup img={IconHtml5} title="HTML5"
                                       description="I've worked with HTML5 in building my own and Medimo Labs' websites."/>
                                <Popup img={IconBootstrap} title="Bootstrap"
                                       description="This website is built on React-Bootstrap!"/>
                                <Popup img={IconCss3} title="CSS3"
                                       description="I've used CSS3 in building both my own and Medimo Labs' website; as you can see, I'm a sucker for hover effects."/>
                            </List>
                        </Tab>
                        <Tab eventKey={2} title={[<Data/>,<span>Data Science</span>]}>
                            <h3 className="bio-list-subheaders">Data Science</h3>
                            <List>
                                <Popup img={IconPython} title="Python"
                                       description="I've completed many projects in Python, and achieved an extremely high mark in Computer Science I. Experience with pandas, numpy, sk-learn, matplotlib, Jupyter, BeautifulSoup, and more."/>
                                <Popup img={IconR} title="R"
                                       description="R was one of the first languages I picked up, and began my foray into data science. Comfortable with tidyverse packages, RSQLite, and more."/>
                                <Popup img={IconSQLite} title="SQLite"
                                       description="I used SQLite in my largest project, analyzing win expectancy in baseball. SQLite was difficult, but taught me valuable lessons about data cleaning and procesing that will serve me well."/>
                            </List>
                        </Tab>
                        <Tab eventKey={3} title={[<ProjectManagement/>, <span>Project Management</span>]}>
                            <h3 className="bio-list-subheaders">Project Management</h3>
                            <List>
                                <Popup img={IconGit} title="Git"
                                       description="I learned Git when working for Medimo Labs, and have used it personally and professionally ever since."/>
                                <Popup img={IconGithub} title="GitHub"
                                       description="GitHub is where I keep all of my personal projects, as well as contribute to the teams I'm a part of."/>
                                <Popup img={IconJetbrains} title="JetBrains IDEs"
                                       description="JetBrains' awesome IDEs like Webstorm and Pycharm have helped me build many of my projects."/>
                                <Popup img={IconSlack} title="Slack"
                                       description="I am part of an unhealthy amount of Slack teams. Slack is an excellent communication tool, and has helped me immensely in managing projects with my teams. I recommended and instituted the use of Slack for Medimo Labs."/>
                            </List>
                        </Tab>
                    </Tabs>
                </MuiThemeProvider>
            </div>
        )
    }
}