import React from 'react';
import { 
    Container,
} from 'react-bootstrap';

import carHome from '../../images/car-home.png';

const Home = () => (
    <Container fluid>
        <div>
            Build your
        </div>
        <img src={carHome} />
    </Container>
)

export default Home;