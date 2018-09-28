import React from 'react';
import { Row, Col, Card } from 'react-materialize';
import avatar from '../../images/avatar.png';

const UserProfile = () => (
    <Card>
        <Row>
            <Col s={8} m={8} offset="s2 m2">
                <img src={avatar} className="circle responsive-img" />
            </Col>
            <Row className="center-align">
                <h5>
                    Tainá
                </h5>
                <p className="teal lighten-2 white-text"> Front End Developer</p>
            </Row>
        </Row>
    </Card>
);

export default UserProfile;
