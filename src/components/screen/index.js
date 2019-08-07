import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import {
    Container,
    Col,
} from 'react-bootstrap';
import api from '../../service/api';

class ContentApp extends Component {
    constructor() {
        super();
        this.state = {
            correntEngine: null,
            correntColor: null,
            correntWheel: null,
            engine: 0,
            color: [],
            wheels: [],
            finalPrice: null,
        }
    }

    componentDidMount() {
        this.fetchBuildCar();
    }

    fetchBuildCar = async () => {
        const response = await api.get();
        const buildCar = response.data.data;
        this.setState({
            engine: buildCar.engine, 
            color: buildCar.color, 
            wheels: buildCar.wheels
        })
    }


    render() {
        const buildCar = this.state;
        return (
            <Router>
                <Container>
                    <div className="row content-home">
                        <Col lg={6}>Foto</Col>
                        <Col lg={6}>
                            {this.state.engine.items.map(item => (
                                        <h1>{item.type}</h1>
                                    ))}
                        </Col>
                    </div>
                </Container>
            </Router>
        )
    }
}

export default ContentApp;