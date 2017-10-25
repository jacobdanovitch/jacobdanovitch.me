import React, {Component} from 'react'
import {PageHeader} from 'react-bootstrap'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider'
import Work from 'material-ui/svg-icons/action/work'
import Code from 'material-ui/svg-icons/action/code'
import Open from 'material-ui/svg-icons/action/open-in-new'
import medimopic from './imgs/medimo.jpg'
import mlbpic from './imgs/mlb.jpg'
import htn from './imgs/htn.png'
import sf from './imgs/sf.png'
import python from './imgs/python.png'
import ccss from './imgs/ccss.png'
import kmeans from './imgs/kmeans.png'

class PersonalPanel extends Component {
    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({open: true});
        console.log(this.context);
    };

    handleClose = () => {
        this.setState({open: false});
        console.log(this.context);
    };

    render() {

        const actions = [
            <FlatButton
                label="Close"
                onClick={this.handleClose}
                labelStyle={{color: '#326098'}}
            />
        ];

        const dialogStyle = {
            backgroundColor: "white",
            color: "black"
        };

        return (
            <div className="portfolio-list-item">
                <ListItem
                    leftAvatar={<Avatar src={this.props.imgsrc}/>}
                    primaryText={this.props.title}
                    secondaryText={this.props.blurb}
                    onClick={this.handleOpen}
                    rightIcon={<Open/>}
                />
                <MuiThemeProvider theme={dialogStyle}>
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
                        <strong>I implemented:</strong><br/>
                        {this.props.implemented}<br/>
                        <strong>I learned:</strong><br/>
                        {this.props.learned}
                    </Dialog>
                </MuiThemeProvider>
                <Divider/>
            </div>
        )
    }
}

export class Portfolio extends Component {
    render() {
        return (
            <div className="portfolio">
                <PageHeader>My Portfolio</PageHeader>
                <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                    <List>
                        <div>
                            <h3 className="portfolio-list-subheaders"><Work/> Professional Experience</h3>
                            <PersonalPanel imgsrc={medimopic}
                                           title="Medimo Labs: Software Development Intern"
                                           blurb="Contributing to a smart mental health-focused application extending resources and
                    care to those in need."
                                           implemented="I implemented a data visualization dashboard for doctors to monitor patients, as well as a searchbar, and various aspects of the front end development."
                                           description="Medimo Labs is a mental healthcare startup founded by Dr. Ian Chen of Sick Kids' Hospital in Toronto. Medimo aims to utilize technology to make mental healthcare more accessible to all. "
                                           learned="I learned React while on the job, improved my HTML and CSS knowledge, improved my comfort with Git, and most importantly, worked with a large team for the first time and learned how to effectively communicate and collaborate in a team setting."
                                           tech="React, HTML, CSS, Git"
                            />
                            <PersonalPanel
                                imgsrc={sf}
                                title="STEM Fellowship: Data Science Team, Carleton Chapter President"
                                blurb="A student-run non-profit promoting data science education across Canadian high schools and universities."
                                implemented="I help run the Big Data Challenge, sponsored by IBM, SAS, and SciNet, by acquiring datasets, constructing workshops, and developing the structure of the competition. Creating and leading a Carleton chapter of STEM Fellowship."
                                description={['STEM Fellowship is a youth-run Canadian non-profit organization that uses mentorship and experiential learning to equip the next generation of changemakers with indispensable skills in data science and scholarly writing. Find more here: ',<a href='http://stemfellowship.org/big-data-challenge/'>STEM Fellowship</a>]}
                                learned="I've learned more about data science, such as k-means clustering, as well as more about Python and R by constructing workshops."
                                tech="Python, R"
                            />
                            <PersonalPanel imgsrc={python}
                                           title="Carleton SSSC: Recognized Study Group Leader"
                                           blurb="Leader of a group of over 20 students for COMP1405: Introduction to Computer Science I using Python."
                                           implemented="I led a group of over 20 students for our introductory programming course in Python, preparing and presenting review documents to help students understand the course content."
                                           description={["The Science Student Success Centre's 'Recognize Study Group' initiative aims to provide students with accessible help and guidance from their peers for challenging courses. Find out more here: ", <a href='https://sssc.carleton.ca/recognized-study-groups'>Recognized Study Groups</a>]}
                                           tech="Python"
                                           learned="I improved my communication and presentation skills, as well as strengthened my knowledge of the course content and Python."
                            />
                            <PersonalPanel imgsrc={ccss}
                                           title="CCSS: First Year Representative"
                                           blurb="An elected position within the Carleton Computer Science Society to represent first year computer science students."
                                           implemented="Planning, promoting, and organizing events"
                                           description={["The Carleton Computer Science Society represents the computer science program at Carleton; if you're in the program, you're already a member. The CCSS plans a wide variety of events and workshops, like monthly Coffee Socials, Pancakes with Profs, Tech Talks, and much more. The first year representatives are two students voted on by their peers (450+ students in first year for 2017) to represent the freshman class. Check out the CCSS here: ", <a href='http://ccss.carleton.ca/'>CCSS</a>]}
                                           learned="Learning about my fellow computer science students, as well as how to effectively plan, organize, and promote large-scale events."
                                           tech="N/A"
                            />
                        </div>
                        <div>
                            <h3 className="portfolio-list-subheaders"><Code/> Projects</h3>
                            <PersonalPanel imgsrc={kmeans}
                                           title="K-Means Variant for Grouping Students"
                                           blurb="Developing a variant on K-Means clustering to help my journalism professor group students on an assignment."
                                           description="Our midyear assignment in my journalism elective required my journalism professor to group 120 students by hand."
                                           implemented="With the consultation of my computer science professor, I helped my journalism professor group students by using responses to a survey and implementing a variant on K-Means clustering using Hamming distance."
                                           learned="This was my first project with a strict and short-term deadline, which taught my how to balance coding efficiently to meet deadlines, and coding robustly to create an effective result."
                                           tech="Python (pandas, numpy, sk-learn, seaborn, matplotlib)"
                            />
                            <PersonalPanel imgsrc={mlbpic}
                                           title="MLB: Pitch-Level Win Expectancy"
                                           blurb="Deriving the likelihood of a win at any given point in a baseball game to evaluate
                    players and determine optimal strategy."
                                           implemented="I implemented a Random Forest model that estimated win expectancy for any pitch given the current situation of a baseball game"
                                           description="Current win expectancy models such as those by FanGraphs or ESPN only estimate win expectancy at the plate appearance-level. Win expectancy at the pitch level would allow for extensive analysis on the impact of many in-game decisons."
                                           learned="I learned extensively about the daunting task of data engineering; from the hours of parsing to the weeks spent cleaning. I also learned about Machine Learning by using a Random Forest model."
                                           tech="SQLite, R (randomForest, RSQLite, dplyr, ggplot2)"
                            />
                            <PersonalPanel imgsrc={htn}
                                           title="Hack The North 2017: talkaBOTit"
                                           blurb="A mental health chatbot built at Hack The North 2017 Winner of the Domain.com Best Domain Name."
                                           implemented="Implemented Python parser using Beautiful Soup to accumulate transcripts of therapy sessions, IBM Watson chatbot."
                                           description="In my first hackathon, my group built a mental health chatbot built at Hack The North 2017 attempting to provide on-demand therapeutic assistance to make mental healthcare more accessible. Winner of the
                    Domain.com Best Domain Name."
                                           learned="I learned about the different kinds of chatbots, how to effectively webscrape, and the wild, crazy rides of hackathons."
                                           tech="Python, IBM Watson"
                            />
                        </div>
                    </List>
                </MuiThemeProvider>
            </div>
        )
    }
}