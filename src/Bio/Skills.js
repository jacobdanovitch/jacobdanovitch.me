import React, {Component} from 'react'
import './Skills.css'
import FeatureRow from './FeatureRow'
import {PageHeader, Tab, Tabs} from 'react-bootstrap'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List} from 'material-ui/List';
import IconBootstrap from '../Assets/imgs/devicon-master/icons/bootstrap/bootstrap-plain-wordmark.svg'
import IconCss3 from '../Assets/imgs/devicon-master/icons/css3/css3-plain-wordmark.svg'
// import Firebase from '../Assets/imgs/firebaseicon.png'
import IconGit from '../Assets/imgs/devicon-master/icons/git/git-plain-wordmark.svg'
import IconGithub from '../Assets/imgs/devicon-master/icons/github/github-original-wordmark.svg'
import IconHtml5 from '../Assets/imgs/devicon-master/icons/html5/html5-plain-wordmark.svg'
import IconJava from '../Assets/imgs/devicon-master/icons/java/java-original-wordmark.svg'
import IconJetbrains from '../Assets/imgs/devicon-master/icons/jetbrains/jetbrains-original.svg'
// import Jupyter from '../Assets/imgs/jupyternotebookicon.png'
import IconNodeJS from '../Assets/imgs/devicon-master/icons/nodejs/nodejs-original.svg'
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

export const TechnologiesHeader = () => {
    return (
        <div>
            <PageHeader>My Technologies</PageHeader>
            <h3>An overview of the technologies I use in my work.</h3>
        </div>
    )
};

class Tech extends Component {
    render() {
        return (
            <FeatureRow
                imgsrc={this.props.imgsrc}
                title={this.props.title}
                blurb={this.props.blurb}
            >
                <strong>Where I Learned It:</strong> &nbsp;
                {this.props.where} <br/> <br/>
                <strong>Favorite Concepts:</strong> &nbsp;
                {this.props.concepts} <br/> <br/>
                <strong>How Long I've Used It:</strong> &nbsp;
                {this.props.experience} <br/> <br/>
                <strong>Use Cases:</strong> &nbsp;
                {this.props.uses} <br/> <br/>
            </FeatureRow>
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
                <PageHeader><Technologies style={{height: "30", width: "30"}}/> My Technologies</PageHeader>
                <MuiThemeProvider>
                    <Tabs activeKey={this.state.key} onSelect={this.handleSelect.bind(this)} id="">
                        <Tab eventKey={1} title={[<SoftwareDev/>, <span>Software Development</span>]}>
                            <h3 className="bio-list-subheaders">Software Development</h3>
                            <p className="bio-list-descriptions">Here are some of the languages and software I use to build my projects.</p>
                            <List>
                                <Tech
                                    imgsrc={IconJava}
                                    title="Java"
                                    blurb="I've completed AP Computer Science using Java, and will be taking Computer Science II using it in the winter."
                                    where="I learned Java in high school; after transferring into the class late and falling behind, I was lucky that an amazing teacher helped me catch up and become proficient enough to take AP the following year."
                                    concepts="Abstraction, Inhreitance, Polymorphism"
                                    experience="4 years"
                                    uses="2 years in high school as well as COMP1406 Introduction to Computer Science II in winter 2018."
                                />
                                <Tech
                                    imgsrc={IconReact}
                                    title="React"
                                    blurb="I've built both my own, my study group's, and Medimo Labs' website using the React Javascript framework."
                                    where="I originally learned React working at Medimo Labs during summer 2017, working with other university-aged interns as well as students from the SHAD Valley program."
                                    concepts="Components, Props, State"
                                    experience="6 months"
                                    uses="Building websites for Medimo Labs, myself, and my study group, as well as using it during hackathons such as THacks for front-end work."
                                />
                                <Tech
                                    imgsrc={IconHtml5}
                                    title="HTML"
                                    blurb="I've worked with HTML in building my own and Medimo Labs' websites."
                                    where={["I taught myself HTML in summer 2017 to build my own website - the ", <strike>terrible</strike>," initial version of this website."]}
                                    concepts="Markdown"
                                    experience="6 months"
                                    uses="Use within my React projects."
                                />
                                <Tech
                                    imgsrc={IconCss3}
                                    title="CSS"
                                    blurb="I've used CSS in building both my own and Medimo Labs' website; as you can see, I'm a sucker for hover effects."
                                    where="Learned alongside HTML when building my personal website."
                                    concepts="Responsive design - This website is built on React-Bootstrap!"
                                    experience="6 months"
                                    uses="Trying to make my Reacts project aesthetically appealing and responsive - I have a long way to go!"
                                />
                                <Tech
                                    imgsrc={IconNodeJS}
                                    title="Node.js"
                                    blurb="Node.js helps me connect my Recognized Study Group members to our website."
                                    where="I learned Node.js to interact with Firebase when building my study group's website."
                                    concepts="Arrow functions"
                                    experience=">3 months"
                                    uses="I built an authentication system for the website as well as a token users could enter to confirm attendance."
                                />
                            </List>
                        </Tab>
                        <Tab eventKey={2} title={[<Data/>, <span>Data Science</span>]}>
                            <h3 className="bio-list-subheaders">Data Science</h3>
                            <p className="bio-list-descriptions">Here are some of the languages and software I use for analyzing data.</p>
                            <List>
                                <Tech
                                    imgsrc={IconPython}
                                    title="Python"
                                    blurb="I've completed many projects in Python, acheiving an A+ in COMP 1405 (Computer Science I). Experience with pandas, numpy, sk-learn, matplotlib, BeautifulSoup, and more."
                                    where="I began to teach myself Python in grade 11 for the Waterloo Canadian Computing Competition. I've learned the language at a much deeper level in my first year of university."
                                    concepts="List Comprehension, Negative Indexing, Classes"
                                    experience="3 years"
                                    uses="JOUR1003 Grouping Algorithm, Baseball Neural Networks, talkaBOTit web scraper, many many more"
                                />
                                <Tech
                                    imgsrc={IconR}
                                    title="R"
                                    blurb="R was one of the first languages I picked up, and began my foray into data science. Comfortable with tidyverse packages, RSQLite, and more."
                                    where="I learned R by following the book 'Analyzing Baseball Data with R' in the summer of 2016 and working on my own projects."
                                    concepts="DataFrames (<3), Data Viewer"
                                    experience="1.5 years"
                                    uses="Baseball Win Probability, Baseball Biometric Pitching Analysis"
                                />
                                <Tech
                                    imgsrc={IconSQLite}
                                    title="SQLite"
                                    blurb="SQLite was my first experience with databases and working with large datasets."
                                    where="I learned SQLite in my largest project, analyzing win expectancy in baseball. SQLite was difficult, but taught me valuable lessons about data cleaning and procesing that will serve me well."
                                    concepts="Join Statements"
                                    experience="1.5 years"
                                    uses="Baseball Win Probability"
                                />
                                </List>
                        </Tab>
                        <Tab eventKey={3} title={[<ProjectManagement/>, <span>Project Management</span>]}>
                            <h3 className="bio-list-subheaders">Project Management</h3>
                            <p className="bio-list-descriptions">Here's some software I use to make my life easier while I'm working.</p>
                            <List>
                                <Tech
                                    imgsrc={IconGit}
                                    title="Git"
                                    blurb="I learned Git when working for Medimo Labs, and have used it personally and professionally ever since."
                                    where="I briefly learned Git in grade 12 for a small project with a friend, but learned it more in-depth with Medimo Lab, my first experience with a larger group project."
                                    concepts="Merge Conflicts (</3)"
                                    experience="6 months"
                                    uses="Pretty much every project I do"
                                />
                                <Tech
                                    imgsrc={IconJetbrains}
                                    title="JetBrains IDEs"
                                    blurb="JetBrains' awesome IDEs like WebStorm, PyCharm, and IntelliJ have helped me build many of my projects."
                                    where="I discovered PyCharm while learning Python, and we currently use IntelliJ in my Computer Science II course."
                                    concepts="Refactoring"
                                    experience="3 years"
                                    uses="Pretty much every project I do!"
                                />
                                <Tech
                                    imgsrc={IconSlack}
                                    title="Slack"
                                    blurb="I am part of an unhealthy amount of Slack teams."
                                    where="I first joined Slack with STEM Fellowship, an organization with over 100 members. I enjoyed the service so
                                    much that I helped to implement it at Medimo Labs, making team commnication much more cohesive."
                                    concepts="Channels"
                                    experience="6 months"
                                    uses="Medimo Labs, STEM Fellowship, Carleton Computer Science Society, and many more"
                                />
                            </List>
                        </Tab>
                    </Tabs>
                </MuiThemeProvider>
            </div>
        )
    }
}