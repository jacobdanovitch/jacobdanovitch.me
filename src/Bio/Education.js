import React, {Component} from 'react'
import './FeatureRow.css'
import './Education.css'
import {Image, PageHeader, Tab, Tabs} from 'react-bootstrap'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List} from 'material-ui/List';
import python from '../Assets/imgs/python.svg'
import algebra from '../Assets/imgs/algebraicon.svg'
import calculus from '../Assets/imgs/calculusicon.svg'
import bigO from '../Assets/imgs/discreteicon.svg'
import carleton from '../Assets/imgs/carletonlogo.svg'
import stanford from '../Assets/imgs/stanfordlogo.jpg'
import java from '../Assets/imgs/javaicon.svg'
import YearOne from 'material-ui/svg-icons/image/looks-one'
import OtherCourses from 'material-ui/svg-icons/action/language'
import FeatureRow from "./FeatureRow";

export const EducationHeader = () => {
    return (
        <PageHeader>
            <Image src={carleton} width={100} height={100}/><strong>Honors Bachelor of Computer Science</strong>
            <h4 className="bio-list-subheaders">
                <strong>Co-op</strong> program | <strong>Algorithms</strong> stream | Minor in
                <strong>Psychology</strong>
            </h4>
        </PageHeader>
    )
};

class Course extends Component {
    render() {
        return (
            <FeatureRow
                imgsrc={this.props.imgsrc}
                title={this.props.course+": "+this.props.title}
                blurb={this.props.blurb}
            >
                <strong>Course:</strong> &nbsp;
                {this.props.course} <br/> <br/>
                <strong>Description:</strong> &nbsp;
                {this.props.description} <br/> <br/>
                <strong>Learned:</strong> &nbsp;
                {this.props.learned} <br/> <br/>
            </FeatureRow>
        )
    }
}

export class Education extends Component {
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
                <PageHeader>My Courses</PageHeader>
                <MuiThemeProvider>
                    <Tabs activeKey={this.state.key} onSelect={this.handleSelect.bind(this)} id="">
                        <Tab eventKey={1} title={[<YearOne/>, <span>First Year (In Progress)</span>]}>
                            <h3 className="bio-list-subheaders"><strong>First Year</strong></h3>
                            <h4 className="bio-list-subheaders"><strong>Winter Semester</strong></h4>
                            <List>
                                <Course
                                    imgsrc={java}
                                    title="Intro to Computer Science II"
                                    blurb="Programming in Java. Covering topics such as inheritance and polymorphism, data structures, GUIs, recursion with objects, exception handling, and fileIO."
                                    description="A second course in programming for BCS students, emphasizing problem solving and computational thinking in an object-oriented language. Topics include abstraction, mutable data structures, methods, inheritance, polymorphism, recursion, program efficiency, testing and debugging."
                                    learned="In progress"
                                    course="COMP1406"
                                />
                                <Course
                                    imgsrc={bigO}
                                    title="Discrete Structures"
                                    blurb="Introduction to discrete mathematics. Learning topics such as algorithm complexity, set theory, propositional logic, predicate calculus, and mathematical reasoning."
                                    description="Introduction to discrete mathematics and discrete structures. Topics include: propositional logic, predicate calculus, set theory, complexity of algorithms, mathematical reasoning and proof techniques, recurrences, induction, finite automata and graph theory."
                                    learned="In progress"
                                    course="COMP1805"
                                />
                            </List>
                            <h4 className="bio-list-subheaders">Fall Semester</h4>
                            <List>
                                <Course
                                    imgsrc={python}
                                    title="Intro to Computer Science I"
                                    blurb="Learning the basics of programming in Python."
                                    description="A first course in programming for B.C.S. students emphasizing problem solving and computational thinking. Topics include pseudocode, variables, conditionals, iteration, arrays, objects, functions, sorting, searching, and simulation."
                                    learned="Recursion, simulation, searching and sorting, classes"
                                    course="COMP1405"
                                />
                                <Course
                                    imgsrc={algebra}
                                    title="Honors Algebra I"
                                    blurb="Studying abstract algebra with a focus on proofs and theory; covering matricies over finite, complex, rational, and real fields."
                                    description="Fields, complex numbers, integers, modulo and prime. Vector spaces, matrix algebra, linear dependence, bases, linear transformations, bilinear and quadratic forms, inner products, eigenvalues, diagonalization."
                                    learned="Fields, row reduction, linear dependence, matrix multiplication"
                                    course="MATH1102"
                                />
                                <Course
                                    imgsrc={calculus}
                                    title="Calculus"
                                    blurb="Differentiation and integration of elementary functions."
                                    description="Limits. Differentiation of the elementary functions. Rules of differentiation. Applications of differentiation: max-min problems, curve sketching, approximations. Definite and indefinite integrals, integration by substitution."
                                    learned="Curve sketching, optimization, integration"
                                    course="MATH1007"
                                />
                            </List>
                        </Tab>
                        <Tab eventKey={2} title={[<OtherCourses/>, <span>Other</span>]}>
                            <h3 className="bio-list-subheaders"><strong>Online Courses</strong></h3>
                            <List>
                                <Course
                                    imgsrc={stanford}
                                    title="Machine Learning"
                                    blurb="Professor Andrew Ng's popular Introduction to Machine Learning. Provided by Coursera."
                                    description="A broad introduction to machine learning, datamining, and statistical pattern recognition. Topics include: (i) Supervised learning (parametric/non-parametric algorithms, support vector machines, kernels, neural networks). (ii) Unsupervised learning (clustering, dimensionality reduction, recommender systems, deep learning). (iii) Best practices in machine learning (bias/variance theory; innovation process in machine learning and AI)."
                                    learned="The theory behind machine learning for optimization problems and the architecture of these systems."
                                    course="Machine Learning by Stanford University"
                                />
                                <h3 className="bio-list-subheaders"><strong>High School</strong></h3>
                                <Course
                                    imgsrc={java}
                                    title="AP Computer Science"
                                    blurb="Advanced Placement Introduction to Computer Science using Java."
                                    description="Advanced Placement computer science course working in Java. Learning concepts such as object oriented programming, recursion, fileIO, abstraction, inheritance, polymorphism, searching and sorting algorithms."
                                    learned="Abstraction, polymorphism, inheritance"
                                    course="ICS4U0"
                                />
                            </List>
                        </Tab>
                    </Tabs>
                </MuiThemeProvider>
            </div>
        )
    }
}