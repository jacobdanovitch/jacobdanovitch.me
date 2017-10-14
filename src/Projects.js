import React, { Component } from 'react'
import { Col, Grid, PageHeader, Row, Image } from 'react-bootstrap'

import medimopic from './imgs/medimo.jpg'
import mlbpic from './imgs/mlb.jpg'
import htn from './imgs/htn.png'
import sf from './imgs/sf.png'
import python from './imgs/python.png'
import ccss from './imgs/ccss.png'

class PersonalPanel extends Component{
    constructor (props) {
        super(props);
        this.state = {};
    }

    componentWillMount(){

    }

    render(){
        return(
            <div>
                <Image src={this.props.imgsrc} alt="Logo Failed to Load" className="panel-img" circle/>
                <h3>{this.props.title}</h3>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export class Projects extends Component{
    render(){
        return(
            <div className="projects">
                <PageHeader>My Experience</PageHeader>
                <Grid fluid={true}>
                    <Row>
                        <Col md={4}>
                            <PersonalPanel imgsrc={medimopic} title="Medimo Labs" description="Contributing to a smart mental health-focused application extending resources and
                    care to those in need."/>
                        </Col>
                        <Col md={4}>
                            <PersonalPanel imgsrc={mlbpic} title="Pitch-Level Win Expectancy (MLB)" description="Deriving the likelihood of a win at any given point in a baseball game to evaluate
                    players and determine optimal strategy."/>
                        </Col>
                        <Col md={4}>
                            <PersonalPanel imgsrc={htn} title="talkaBOTit" description="A mental health chatbot built at Hack The North 2017, leveraging sentiment,
                    expression, and tonal analysis to
                    understand each user and features generative language responses. Winner of the
                    Domain.com Best Domain Name."/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <PersonalPanel imgsrc={sf} title="STEM Fellowship Data Science Team" description="Helping to organize the Big Data Challenge, sponsored by IBM, SAS, and SciNet, as
                    well as creating and leading a
                    Carleton Branch."/>
                        </Col>
                        <Col md={4}>
                            <PersonalPanel imgsrc={python} title="Recognized Study Group Leader" description="Leader of a group of over 20 students for COMP1405: Introduction to Computer Science
                    I using Python, as part of Carleton's Recognized Study Group initiative."/>
                        </Col>
                        <Col md={4}>
                            <PersonalPanel imgsrc={ccss} title="Carleton Computer Science Society First Year Rep"
                                           description="An elected position to represent first year computer science students at Carleton and help plan events."/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}