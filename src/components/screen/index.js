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
            engine: [],
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
                            <div className="row">
                            {buildCar.engine &&
                            buildCar.engine.items &&
                            buildCar.engine.items.map(item => (
                                        <div className="col-12">
                                            <span>{item.kwh} {item.type}</span>
                                            <span>{item.kwh} kWh</span>
                                            <span>{item.range} miles range</span>
                                        </div>
                                    ))}
                            </div>
                        </Col>
                    </div>
                </Container>
            </Router>
        )
    }
}

export default ContentApp;