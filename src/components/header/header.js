import React from "react";
import { Navbar, Row } from 'react-materialize';
import { NavLink } from 'react-router-dom'


const Header = () => (
    <Row>
        <Navbar className="teal lighten-2">
            <li><NavLink to="/">HOME</NavLink></li>
            {/*    <li><NavLink to="contact">Contato</NavLink></li> */}
        </Navbar>
    </Row>
);

export default Header;