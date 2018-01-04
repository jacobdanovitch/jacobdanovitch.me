import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import htn from '../Assets/imgs/Slideshow/htn.jpg'
import hackinggood from '../Assets/imgs/Slideshow/hackinggood.jpg'

class Slideshow extends Component {
    render(){
        const max_height = 500;
        return(
            <Carousel>
                <Carousel.Item>
                    <img height={max_height} alt="Hack the North" src={htn} />
                    <Carousel.Caption>
                        <h3>Hack the North 2017</h3>
                        <p>Building a smart mental health assistant with Python BeautifulSoup4 for web scraping, Microsoft Azure for Natural
                        Language Processing, and Watson for a chatbot interface.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img height={max_height} alt="Hacking Good Toronto" src={hackinggood} />
                    <Carousel.Caption>
                        <h3>Hacking Good Toronto 2017</h3>
                        <p>Building a financial literacy guide using IBM Conversation.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default Slideshow