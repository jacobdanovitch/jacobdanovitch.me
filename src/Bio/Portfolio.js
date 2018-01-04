import React, {Component} from 'react'
import './Portfolio.css'
import './BioPages.css'
import FeatureRow from './FeatureRow'
import {PageHeader, Tab, Tabs} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import {List} from 'material-ui/List';
import Dialog from 'material-ui/Dialog';
import Code from 'material-ui/svg-icons/action/code'
import Work from 'material-ui/svg-icons/action/work'
import medimopic from '../Assets/imgs/medimo.jpg'
import mlbpic from '../Assets/imgs/mlb.jpg'
import htn from '../Assets/imgs/htn.png'
import sf from '../Assets/imgs/sf.png'
import python from '../Assets/imgs/python.svg'
import ccss from '../Assets/imgs/ccss.png'
import cluster from '../Assets/imgs/clustering.png'
import mentalhealth from '../Assets/imgs/mentalhealth.jpg'
import data4good from '../Assets/imgs/data4good.jpg'
import PortfolioIcon from 'material-ui/svg-icons/notification/folder-special'

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        const actions = [
            <FlatButton
                label="Close"
                onClick={this.handleClose}
                labelStyle={{color: '#326098'}}
            />
        ];
        return (
            <div>
                <FeatureRow
                    imgsrc={this.props.imgsrc}
                    title={this.props.title}
                    blurb={this.props.blurb}
                    handleClick={this.handleOpen}
                    style={{color: "black"}}
                />
                <MuiThemeProvider>
                    <Dialog
                        title={this.props.title}
                        actions={actions}
                        modal={false}
                        open={this.state.open}
                        onRequestClose={this.handleClose}
                        titleStyle={{fontWeight: "bolder", borderBottom: "1px solid black", marginBottom: "2%"}}
                    >
                        <strong>What is it?</strong><br/>
                        {this.props.description}<br/>
                        <strong>Technology stack:</strong><br/>
                        {this.props.tech}<br/>
                        <strong>Focus:</strong><br/>
                        {this.props.implemented}<br/>
                        <strong>I learned:</strong><br/>
                        {this.props.learned}
                    </Dialog>
                </MuiThemeProvider>
            </div>
        )
    }
}

export class Portfolio extends Component {
   constructor(props){
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
                <PageHeader><PortfolioIcon style={{height:"30", width:"30"}} /> My Portfolio</PageHeader>
                <MuiThemeProvider>
                    <Tabs activeKey={this.state.key} onSelect={this.handleSelect.bind(this)} id="">
                        <Tab eventKey={1} title={[<Work/>, <span>Experience</span>]}>
                            <h3 className="bio-list-subheaders">Professional Experience</h3>
                            <p className="bio-list-descriptions">An overview of my professional and volunteering work.</p>
                            <List>
                                <Project
                                    imgsrc={medimopic}
                                    title="Medimo Labs: Software Development Intern"
                                    blurb="Contributing to a smart mental health-focused application extending resources and
                    care to those in need."
                                    implemented="I implemented a data visualization dashboard for doctors to monitor patients, as well as a searchbar, and various aspects of the front end development."
                                    description="Medimo Labs is a mental healthcare startup founded by Dr. Ian Chen of Sick Kids' Hospital in Toronto. Medimo aims to utilize technology to make mental healthcare more accessible to all. "
                                    learned="I learned React while on the job, improved my HTML and CSS knowledge, improved my comfort with Git, and most importantly, worked with a large team for the first time and learned how to effectively communicate and collaborate in a team setting."
                                    tech="React, HTML, CSS, Git"
                                />
                                <Project
                                    imgsrc={sf}
                                    title="STEM Fellowship: Data Science Team"
                                    blurb="A student-run non-profit promoting data science education across Canadian high schools and universities."
                                    implemented={["I help run the Big Data Challenge, sponsored by IBM, SAS, and SciNet, by acquiring datasets, ",
                                        "constructing ",
                                        <NavLink activeClassName="active" exact to="/tutorials">workshops</NavLink>,
                                        ", and developing the structure of the competition."]}
                                    description={['STEM Fellowship is a youth-run Canadian non-profit organization that uses mentorship and experiential learning to equip the next generation of changemakers with indispensable skills in data science and scholarly writing. Find more here: ',
                                        <a href='http://stemfellowship.org/big-data-challenge/'>STEM Fellowship</a>]}
                                    learned="I've learned more about data science topics such as K-Means Clustering, Linear Regression, and Gradient Descent,
                                as well as more about Python and R, by constructing workshops."
                                    tech="Python, R"
                                />
                                <Project
                                    imgsrc={data4good}
                                    title="Data for Good: Ottawa"
                                    blurb="A volunteer organization providing pro-bono data science initiatives to charitable organizations and Non-Profits."
                                    implemented="Analysis of Ottawa Youth Services Bureau clients."
                                    description="Data for Good is a volunteer organization inspired by DataKind. The Ottawa location has provided assvstance to organizations such as
                                    The Ottawa Food Bank, the Ten Oaks Project, and Youville Centre."
                                    learned="The importance of effective visualization and interpretability when delivering a product to a client."
                                    tech="Python, R"
                                />
                                <Project
                                    imgsrc={python}
                                    title="Carleton SSSC: Recognized Study Group Leader"
                                    blurb="Leader of a group of over 20 students for COMP1405: Introduction to Computer Science I using Python."
                                    implemented="I led a group of over 20 students for our introductory programming course in Python, preparing and presenting review documents to help students understand the course content."
                                    description={["The Science Student Success Centre's 'Recognize Study Group' initiative aims to provide students with accessible help and guidance from their peers for challenging courses. Find out more here: ",
                                        <a href='https://sssc.carleton.ca/recognized-study-groups'>Recognized
                                            Study Groups</a>]}
                                    tech="Python"
                                    learned="I improved my communication and presentation skills, as well as strengthened my knowledge of the course content and Python."
                                />
                                <Project
                                    imgsrc={ccss}
                                    title="CCSS: First Year Representative"
                                    blurb="An elected position within the Carleton Computer Science Society to represent first year computer science students."
                                    implemented="Planning, promoting, and organizing events, as well as handling the creation of the society's first set of merchandise. "
                                    description={["The Carleton Computer Science Society represents the computer science program at Carleton; if you're in the program, you're already a member. The CCSS plans a wide variety of events and workshops, like monthly Coffee Socials, Pancakes with Profs, Tech Talks, and much more. The first year representatives are two students voted on by their peers (450+ students in first year for 2017) to represent the freshman class. Check out the CCSS here: ",
                                        <a href='http://ccss.carleton.ca/'>CCSS</a>]}
                                    learned="I learned about my fellow computer science students, as well as how to effectively plan, organize, and promote large-scale events."
                                    tech="N/A"
                                />
                            </List>
                        </Tab>
                        <Tab eventKey={2} title={[<Code/>, <span>Projects</span>]}>
                            <h3 className="bio-list-subheaders">Projects</h3>
                            <p className="bio-list-descriptions">Here are some of the side projects I've done for fun in my free time.</p>
                            <List>
                                <Project
                                    imgsrc={mentalhealth}
                                    title="Generative Mental Health Chatbot"
                                    blurb="Building a dynamic, responsive chatbot with Tensorflow to help those struggling with mental illness. "
                                    description={["In my ",
                                        <strike>little</strike>, " free time, I'm working on a conversational chatbot using " +
                                        "Tensorflow to help those struggling with mental illness. Using my Python web-scraper from Hack the North," +
                                        " we compiled thousands of therapy session transcripts, which I am using to train a Tensorflow model."]}
                                    tech="Python (Tensorflow, BeautifulSoup, Pandas)"
                                    implemented="Work in Progress!"
                                    learned="In preparation for the project, I've done research on machine learning and deep learning, as well as enrolled in Andrew
                            Ng's Machine Learning Coursera from Stanford. I also learned how to use Python for web scraping, and am developing my
                            knowledge of Tensorflow."
                                />
                                <Project
                                    imgsrc={cluster}
                                    title="Clustering Algorithm for Grouping Students"
                                    blurb="Developing a clustering algorithm to help my journalism professor group students on an assignment."
                                    description="Our midyear assignment in my journalism elective required my journalism professor to group 120 students by hand."
                                    implemented="With the consultation of my computer science professor, I helped my journalism professor group students by using responses to a survey and implementing a clustering algorithm using Hamming distance."
                                    learned="This was my first project with a strict and short-term deadline, which taught me how to balance coding efficiently to meet deadlines, and coding robustly to create an effective result."
                                    tech="Python (pandas, numpy, sk-learn, seaborn, matplotlib)"
                                />
                                <Project
                                    imgsrc={mlbpic}
                                    title="Baseball Win Probability"
                                    blurb="Estimating the likelihood of a win at any given point in a baseball game to evaluate
                    players and determine optimal strategy."
                                    implemented="I implemented a Random Forest model that estimated win expectancy for any pitch given the current situation of a baseball game"
                                    description="Current win expectancy models such as those by FanGraphs or ESPN only estimate win expectancy at the plate appearance-level. Win expectancy at the pitch level would allow for extensive analysis on the impact of many in-game decisons."
                                    learned="I learned extensively about the daunting task of data engineering; from the hours of parsing to the weeks spent cleaning. I also learned about Machine Learning by using a Random Forest model."
                                    tech="SQLite, R (randomForest, RSQLite, dplyr, ggplot2)"
                                />
                                <Project
                                    imgsrc={htn}
                                    title="Hack The North 2017: talkaBOTit"
                                    blurb="A mental health chatbot built at Hack The North 2017. Winner of the Domain.com Best Domain Name."
                                    implemented="Implemented Python parser using Beautiful Soup to accumulate transcripts of therapy sessions, IBM Watson chatbot.
                                           Using Microsoft Azure's Machine Learning Studio, I was able to identify key phrases in therapy sessions from both therapist and patient; some highlights are 'unconstuctive', 'bad person', 'vicious cycle', 'stress.'"
                                    description="In my first hackathon, my group built a mental health chatbot built at Hack The North 2017 that attempted to provide on-demand therapeutic assistance to make mental healthcare more accessible. Winner of the
                    Domain.com Best Domain Name."
                                    learned="I learned about the different kinds of chatbots, how to effectively webscrape, and the wild, crazy rides of hackathons."
                                    tech="Python, IBM Watson"
                                />
                            </List>
                        </Tab>
                    </Tabs>
                </MuiThemeProvider>
            </div>
        )
    }
}