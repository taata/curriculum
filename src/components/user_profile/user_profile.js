import React from 'react';
import { Row, Col, Card } from 'react-materialize';
import avatar from '../../images/avatar.png';
import iconFace from '../../images/social_media/face.jpg';
import iconInsta from '../../images/social_media/insta.jpg';
import iconLinkedin from '../../images/social_media/linkedin.png';

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

                <h4 className="sub-title  c-lighten-2"> Redes Sociais</h4>
                <div className="center-align">
                    <a href="https://www.linkedin.com/in/tainarenata/" target="_blank" rel="Linkedin Tainá Renata" className="icon-social-media">
                        <img src={iconLinkedin} className="circle responsive-img" />
                    </a>
                    <a href="https://www.instagram.com/tainarenatafotos/" target="_blank" rel="Instagram Tainá Renata" className="icon-social-media">
                        <img src={iconInsta} className="circle responsive-img" />
                    </a>
                    <a href="https://www.facebook.com/TainaRenata" target="_blank" rel="Facebook Tainá Renata" className="icon-social-media">
                        <img src={iconFace} className="circle responsive-img" />
                    </a>
                </div>
            </Row>
        </Row>
    </Card>
);

export default UserProfile;
