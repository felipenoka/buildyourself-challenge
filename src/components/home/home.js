import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import {
    Container,
} from 'react-bootstrap';
import './home.css';

import carHome from '../../images/car-home.png';
import arrow from '../../images/arrow.svg'

// Style //
const descriptionSubtitle = {
    fontSize: '15px',
};

const description = {
    fontSize: '18px',
    fontWeight: '300',
    borderBottom: '3px solid #AB1725',
}

const arrowF = {
    textTransform: 'uppercase',
    letterSpacing: '10.5px',
    fontWeight: '400',

}


function Home() {
    return (
        <React.Fragment>
        <Container>
            <div className="row content-home">
                <div className="content-car col-lg-12">
                    <div className="">
                        <h1 className="title">Build your</h1>
                        <h1 className="subtitle">Model <span className="model">R</span></h1>
                    </div>
                    <img className="img-car responsive" src={carHome} />
                </div>
                <Link to='/modelr' className="btn col-lg-12"  align="center" style={arrowF} >begin <img src={arrow} /></Link>
            </div>
        </Container>
        <Container className="fixed-bottom">
            <div className="d-flex justify-content-between">
                <div>
                    <h1 className="description-title">2.5<spam style={descriptionSubtitle}>s</spam></h1>
                    <h2 style={description} >From 0 to 100</h2>
                </div>
                <div>
                    <h1 className="description-title">420<spam style={descriptionSubtitle}>mi</spam></h1>
                    <h2 style={description}>Miles range</h2>
                </div>
                <div>
                    <h1 className="description-title">250<spam style={descriptionSubtitle}>mp/h</spam></h1>
                    <h2 style={description}>Max speed</h2>
                </div>
            </div>
        </Container>
        </React.Fragment>
    );
}

export default Home;