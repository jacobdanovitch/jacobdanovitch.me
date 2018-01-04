import React, {Component} from 'react'
import './FeatureRow.css'
import './Education.css'
import {Image, PageHeader, Tabs, Tab} from 'react-bootstrap'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List} from 'material-ui/List';
import {Popup} from './Skills'
import python from '../Assets/imgs/python.svg'
import algebra from '../Assets/imgs/algebraicon.svg'
import calculus from '../Assets/imgs/calculusicon.svg'
import bigO from '../Assets/imgs/discreteicon.svg'
import carleton from '../Assets/imgs/carletonlogo.svg'
import stanford from '../Assets/imgs/stanfordlogo.jpg'
import java from '../Assets/imgs/javaicon.svg'
import AnimatedCanvas from '../Home/AnimatedCanvas'
import YearOne from 'material-ui/svg-icons/image/looks-one'
import OtherCourses from 'material-ui/svg-icons/action/language'

class Education extends Component {
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
                <PageHeader>
                    <Image src={carleton} width={100} height={100}/><strong>Honors Bachelor of Computer Science</strong>
                    <h4 className="bio-list-subheaders">
                        <strong>Co-op</strong> program | <strong>Algorithms</strong> stream | Minor in <strong>Psychology</strong>
                    </h4>
                </PageHeader>
                <MuiThemeProvider>
                    <Tabs activeKey={this.state.key} onSelect={this.handleSelect.bind(this)} id="">
                        <Tab eventKey={1} title={[<YearOne/>,<span>First Year (In Progress)</span>]}>
                            <h3 className="bio-list-subheaders"><strong>First Year</strong></h3>
                            <h4 className="bio-list-subheaders"><strong>Winter Semester</strong></h4>
                            <List>
                                <Popup img={java} title="Intro to Computer Science II"
                                       description="Programming in Java. Covering topics such as inheritance and polymorphism, data structures, GUIs, recursion with objects, exception handling, and fileIO."/>
                                <Popup img={bigO} title="Discrete Structures"
                                       description="Introduction to discrete mathematics. Learning topics such as algorithm complexity, set theory, propositional logic, predicate calculus, and mathematical reasoning."/>
                            </List>
                            <h4 className="bio-list-subheaders">Fall Semester</h4>
                            <List>
                                <Popup img={python} title="Intro to Computer Science I"
                                       description="Learning the basics of programming in Python. Covering topics such as nested loops and conditionals, functions, linear and associative collections, sorting and searching algorithms, recursion, object oriented programming, and simulation."/>
                                <Popup img={algebra} title="Algebra I"
                                       description="Studying abstract algebra with a focus on proofs and theory; covering matricies over finite, complex, rational, and real fields. (Full year course)"/>
                                <Popup img={calculus} title="Calculus"
                                       description="Differentiation of elementary functions."/>
                            </List>
                        </Tab>
                        <Tab eventKey={2} title={[<OtherCourses/>,<span>Other</span>]}>
                            <h3 className="bio-list-subheaders"><strong>Online Courses</strong></h3>
                            <List>
                                <Popup img={stanford} title="Machine Learning"
                                       description="Professor Andrew Ng's popular Introduction to Machine Learning. Provided by Coursera. (In Progress)"/>
                                <h3 className="bio-list-subheaders"><strong>High School</strong></h3>
                                <Popup img={java} title="AP Computer Science"
                                       description="Advanced Placement computer science course working in Java. Learning concepts such as object oriented programming, recursion, fileIO, abstraction, inheritance, polymorphism, searching and sorting algorithms."/>
                            </List>
                        </Tab>
                    </Tabs>
                </MuiThemeProvider>
            </div>
        )
    }
}

export default Education;