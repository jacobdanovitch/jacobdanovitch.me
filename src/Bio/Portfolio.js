import React, {Component} from 'react'
import './Portfolio.css'
import './BioPages.css'
import FeatureRow from './FeatureRow'
import {PageHeader, Tab, Tabs} from 'react-bootstrap'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List} from 'material-ui/List';
import Code from 'material-ui/svg-icons/action/code'
import Work from 'material-ui/svg-icons/action/work'
import medimopic from '../Assets/imgs/medimo.jpg'
import mlbpic from '../Assets/imgs/mlb.jpg'
import htn from '../Assets/imgs/htn.png'
import sf from '../Assets/imgs/sf.png'
import carleton from '../Assets/imgs/carletonlogo.svg'
import ccss from '../Assets/imgs/ccss.png'
import cluster from '../Assets/imgs/clustering.png'
import PortfolioIcon from 'material-ui/svg-icons/notification/folder-special'
import baseballnn from '../Assets/imgs/baseballnn.png'
import microsoft from '../Assets/imgs/microsoft.png';
import menu from '../Assets/imgs/menuboticon.svg';
import Volunteering from 'material-ui/svg-icons/action/card-giftcard'

class Project extends Component {
    render() {
        return (
            <FeatureRow
                imgsrc={this.props.imgsrc}
                title={this.props.title}
                blurb={this.props.blurb}
            >
                <strong>What is it?</strong> &nbsp;
                {this.props.description}<br/> <br/>
                <strong>What I did/do:</strong> &nbsp;
                {this.props.implemented}<br/> <br/>
                <strong>Technology stack:</strong> &nbsp;
                {this.props.tech}<br/> <br/>
                <strong>I learned:</strong> &nbsp;
                {this.props.learned}
            </FeatureRow>
        )
    }
}

export const PortfolioHeader = () => {
    return (
        <div>
            <PageHeader>My Portfolio</PageHeader>
            <h3>A collection of my work experience and personal projects.</h3>
        </div>
    )
};

export class Portfolio extends Component {
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
                <PageHeader><PortfolioIcon style={{height: "30", width: "30"}}/> My Portfolio</PageHeader>
                <MuiThemeProvider>
                    <Tabs activeKey={this.state.key} onSelect={this.handleSelect.bind(this)} id="">
                        <Tab eventKey={1} title={[<Work/>, <span>Professional Experience</span>]}>
                            <h3 className="bio-list-subheaders">Professional Experience</h3>
                            <p className="bio-list-descriptions">An overview of my previous work experience.</p>
                            <List>
                                <Project
                                    imgsrc={microsoft}
                                    title="Microsoft AI & Research (Cortana): Software Engineering & Project Management Intern"
                                    blurb="As an Explore intern with the Cortana team, I gained experience as both a software engineer and program manager."
                                    implemented="My team introduced the Cortana Quests program, allowing users to discover and explore new Cortana skills."
                                    description="The Microsoft Explore program offers undergraduate students a chance to try the various areas of software engineering at Microsoft, exploring development and project management."
                                    learned="I learned a lot about design and communication from my experience as a program manager, and as an engineer, I learned how to take a full-stack application from a design to production."
                                    tech="C#, SQL, Azure, VSTS"
                                />
                                <Project
                                    imgsrc={medimopic}
                                    title="Medimo Labs: Software Development Intern"
                                    blurb="Contributing to a smart mental health-focused application extending resources and
                    care to those in need."
                                    implemented="I implemented a data visualization dashboard for doctors to monitor patients, as well as a searchbar, and various aspects of the front end development."
                                    description="Medimo Labs is a mental healthcare startup founded by Dr. Ian Chen of Sick Kids' Hospital in Toronto. Medimo aims to utilize technology to make mental healthcare more accessible to all. "
                                    learned="I learned React while working at Medimo. I also improved my HTML and CSS knowledge, my comfort with Git, and most importantly, worked with a large team for the first time, learning how to effectively communicate and collaborate in a team setting."
                                    tech="React, HTML, CSS, Git"
                                />
                            </List>
                        </Tab>
                        <Tab eventKey={2} title={[<Code/>, <span>Projects</span>]}>
                            <h3 className="bio-list-subheaders">Projects</h3>
                            <p className="bio-list-descriptions">Here are some of the side projects I've done for fun in
                                my free time.</p>
                            <List>
                                {/*<Project
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
                                />*/}
                                <Project
                                    imgsrc={microsoft}
                                    title="Microsoft Autonomous Driving Cookbook"
                                    blurb="Contributing to an autonomous driving tutorial using reinforcement learning."
                                    implemented=""
                                    description=""
                                    tech=""
                                    learned=""
                                />
                                <Project
                                    imgsrc={carleton}
                                    title="Introductory Computer Science Study Group Leader"
                                    blurb="Leader of a study group for introductory computer science courses using Java and Python. We've had as many as 50 students at our sessions!"
                                    implemented="As the co-leader of our group I prepare and present review notes such as slideshows, Jupyter and
                                    Beaker notebooks, or Github repositories, to help students better understand the course content. As well, I created
                                    a small website using React, Node.js, and Firebase, with which students can enter a secret code to confirm and keep
                                    track of their attendance."
                                    description={["The Science Student Success Centre's 'Recognize Study Group' initiative aims to provide students with accessible help and guidance from their peers for challenging courses. Find out more here: ",
                                        <a href='https://sssc.carleton.ca/recognized-study-groups'>Recognized
                                            Study Groups</a>]}
                                    tech="Teaching Python, Java; Preparing Jupyter, Beaker notebooks and Github repositories; Node.js, React, Firebase for website"
                                    learned="I improved my communication and presentation skills, as well as strengthened my knowledge of the course content and Python."
                                />
                                <Project
                                    imgsrc={cluster}
                                    title="Clustering Algorithm for Grouping Students"
                                    blurb="Developing a clustering algorithm to help my journalism professor group students on an assignment."
                                    description="Our midyear assignment in my journalism elective required my journalism professor to group 120 students by hand. I offered to streamline this process by creating an algorithm to group students for my professor."
                                    implemented="By using anonymized responses to a class-wide survey and implementing a clustering algorithm using Hamming distance, I implemented a reusable algorithm that saved my professor many hours while maintaining strong student performance. "
                                    learned="This was my first project with a strict and short-term deadline, which taught me how to balance coding efficiently to meet deadlines, and coding robustly to create an effective result."
                                    tech="Python (pandas, numpy, sk-learn, seaborn, matplotlib)"
                                />
                                <Project
                                    imgsrc={menu}
                                    title="Menu Bot"
                                    blurb="A Google Actions app for Carleton's cafeteria menu. Several thousand users per month!"
                                    implemented="I wrote a web scraper using BeautifulSoup in Python for use in a Flask app, hosted on Heroku, which I linked to my Dialogflow model."
                                    description="My roommate and I grew tired of accessing our school cafeteria's web menu whenever we wanted to know what there was to eat,
                                    so I wrote a Google Actions app to do it for us! The app has earned the Gaining Traction achievement from the Google Developer Community,
                                    with several thousand uses on average in the first couple months of deployment."
                                    tech="Python (BeautifulSoup), Flask, Heroku, Dialogflow, Google Cloud Platform"
                                    learned="This project gave me experience hosting a Python API in deployment."
                                />
                                <Project
                                    imgsrc={mlbpic}
                                    title="Baseball Win Probability"
                                    blurb="Estimating the likelihood of a win at any given point in a baseball game to evaluate
                    players and determine optimal strategy."
                                    implemented="I implemented a Random Forest model that estimated win expectancy for any pitch given the current situation of a baseball game"
                                    description="Current win expectancy models such as those by FanGraphs or ESPN only estimate win expectancy at the plate appearance-level. Win expectancy at the pitch level would allow for extensive analysis on the impact of many in-game decisons."
                                    learned="I learned extensively about the daunting task of data engineering; from the hours of parsing to the weeks spent cleaning. I was also introduced to machine learning through the use of my Random Forest model."
                                    tech="SQLite, R (randomForest, RSQLite, dplyr, ggplot2)"
                                />
                                <Project
                                    imgsrc={baseballnn}
                                    title="Baseball Deep Neural Networks"
                                    blurb="Teaching myself neural network architecture through predictive modelling of baseball statistics."
                                    description="As I read Andrew Trask's excellent 'Grokking Deep Learning' book, I've followed along by modelling baseball
                                statistics using various architectures of neural networks built from scratch."
                                    implemented="I implemented arbitrarily deep neural networks to predict pitchers' ERA. Beginning with
                                     standard gradient descent and progressing to the use of an object-oriented architecture, I was able to
                                     achieve a strong RMSE."
                                    learned="Following along interactively helps me learn from a book such as Trask's. Implementing neural network
                                    code by hand helped me understand the inner workings of the linear algebra taking place, as well as the conceptual
                                    ideas about learning. I strengthened my knowledge of backpropagation in particular."
                                    tech="Python (Numpy, Pandas)"
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
                        <Tab eventKey={3} title={[<Volunteering/>, <span>Volunteering</span>]}>
                            <h3 className="bio-list-subheaders">Volunteering Experience</h3>
                            <p className="bio-list-descriptions">I enjoy volunteering and being involved in my school's community in my free time.</p>
                            <List>
                                <Project
                                    imgsrc={sf}
                                    title="STEM Fellowship: Data Science Team"
                                    blurb="A student-run non-profit promoting data science education across Canadian high schools and universities."
                                    implemented={["I help run the Big Data Challenge, sponsored by IBM, SAS, and SciNet, by acquiring datasets, ",
                                        "constructing ",
                                        "workshops",
                                        ", and developing the structure of the competition."]}
                                    description={['STEM Fellowship is a youth-run Canadian non-profit organization that uses mentorship and experiential learning to equip the next generation of changemakers with indispensable skills in data science and scholarly writing. Find more here: ',
                                        <a href='http://stemfellowship.org/big-data-challenge/'>STEM Fellowship</a>]}
                                    learned="I've learned more about data science topics such as K-Means Clustering, Linear Regression, and Gradient Descent,
                                as well as more about Python and R, by constructing workshops."
                                    tech="Python, R"
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
                    </Tabs>
                </MuiThemeProvider>
            </div>
        )
    }
}