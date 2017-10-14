import React, {Component} from 'react'
import { PageHeader, Row, Image } from 'react-bootstrap'
import {Popup} from './Skills'
import algebra from './imgs/algebraicon.svg'
import calculus from './imgs/calculusicon.svg'
import cs from './imgs/csicon.svg'
import bigO from './imgs/discreteicon.svg'
import carleton from './imgs/carletonlogo.svg'

class Education extends Component {
    render() {
        return (
            <div className="ed">
                <PageHeader><Image src={carleton} width={100} height={100}/>My Education</PageHeader>
                <h2>Honors Bachelor of <strong>Computer Science</strong></h2>
                <h4><strong>Co-op</strong> program | <strong>Algorithms</strong> stream | Minor in <strong>Psychology</strong></h4>
                <p>Here's a brief description of the relevant courses I've taken.</p>
                <hr/>
                <h3>First Year (In Progress)</h3>
                <Row>
                    <Popup img={cs} title="Computer Science" description="Introduction to Computer Science I and II; working in Python and Java."/>
                    <Popup img={algebra} title="Linear Algebra" description="Studying abstract algebra with a focus on proofs and theory; covering matricies over finite, complex, rational, and real fields."/>
                    <Popup img={bigO} title="Discrete Mathematics (Winter 2018)" description="Boolean algebra, algorithm complexity, and mathematical reasoning."/>
                    <Popup img={calculus} title="Calculus" description="Differentiation of elementary functions."/>
                </Row>
                <hr/>
            </div>
        )
    }
}

export default Education;