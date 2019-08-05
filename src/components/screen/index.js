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
            buildCar: {
                engine: [],
            },
            finalPrice: null,
        }
    }

    componentDidMount() {
        this.getBuildCar();
    }

    getBuildCar = async () => {
        try {
            const resp = await api.get();
            const buildingCar = resp.data.data;

            this.setState({
                buildCar: {
                    price: buildingCar.price,
                    engine: {
                        type: buildingCar.engine.items.type
                    }
                }
            })
        } catch (err) {
            this.setState({
              err: true,
            })
          }
    }


    render() {
        return (
            <Router>
                <Container>
                    <div className="row content-home">
                        <Col lg={6}>Foto</Col>
                        <Col lg={6}>Price: {}</Col>
                    </div>
                </Container>
            </Router>
        )
    }
}

export default ContentApp;