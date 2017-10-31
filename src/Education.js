import React, {Component} from 'react'
import { PageHeader, Row, Image } from 'react-bootstrap'
import {Popup} from './Skills'
import python from './imgs/python.svg'
import algebra from './imgs/algebraicon.svg'
import calculus from './imgs/calculusicon.svg'
import bigO from './imgs/discreteicon.svg'
import carleton from './imgs/carletonlogo.svg'
import stanford from './imgs/stanfordlogo.jpg'
import java from './imgs/javaicon.svg'

class Education extends Component {
    render() {
        return (
            <div className="ed">
                <PageHeader><Image src={carleton} width={100} height={100}/><strong>My Education</strong></PageHeader>
                <h2><strong>Honors Bachelor of Computer Science</strong></h2>
                <h4><strong>Co-op</strong> program | <strong>Algorithms</strong> stream | Minor in <strong>Psychology</strong></h4>
                <p>Here's a brief description of the relevant courses I've taken.</p>
                <hr/>
                <h3><strong>First Year</strong> (In Progress)</h3>
                <h4>Fall Semester</h4>
                <Row>
                    <Popup id="course" img={python} title="Intro to Computer Science I" description="Learning the basics of programming in Python. Covering topics such as nested loops and conditionals, functions, linear and associative collections, sorting and searching algorithms, recursion, object oriented programming, and simulation."/>
                    <Popup id="course" img={algebra} title="Algebra I" description="Studying abstract algebra with a focus on proofs and theory; covering matricies over finite, complex, rational, and real fields. (Full year course)"/>
                    <Popup id="course" img={calculus} title="Calculus" description="Differentiation of elementary functions."/>
                </Row>
                <h4>Winter Semester</h4>
                <Row>
                    <Popup id="course" img={java} title="Intro to Computer Science II" description="Programming in Java. Covering topics such as inheritance and polymorphism, data structures, GUIs, recursion with objects, exception handling, and fileIO."/>
                    <Popup id="course" img={bigO} title="Discrete Structures" description="Introduction to discrete mathematics. Learning topics such as algorithm complexity, set theory, propositional logic, predicate calculus, and mathematical reasoning."/>
                </Row>
                <hr/>
                <h3><strong>Online Courses</strong></h3>
                <Row>
                    <Popup id="course" img={stanford} title="Machine Learning" description="Professor Andrew Ng's popular Introduction to Machine Learning. Provided by Coursera. (In Progress)" />
                </Row>
                <hr/>
                <h3><strong>High School</strong></h3>
                <Row>
                    <Popup id="course" img={java} title="AP Computer Science" description="Advanced Placement computer science course working in Java. Learning concepts such as object oriented programming, recursion, fileIO, abstraction, inheritance, polymorphism, searching and sorting algorithms."/>
                </Row>
                <hr/>
            </div>
        )
    }
}

export default Education;