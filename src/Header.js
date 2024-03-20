import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import './App.css';
import AYJ from './assets/AYJ.png';

const Header = () => {
    return (
        <Navbar className="custom-navbar">
            <img src={AYJ} alt="AYJ" style={{marginLeft: '200px'}}/>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto" style={{ marginRight: '200px'}}>
                    <Nav.Link href="#Home">About</Nav.Link>
                    <Nav.Link href="#Blog">Background</Nav.Link>
                    <Nav.Link href="#Contact" className="btn btn-primary" active>Contact</Nav.Link>
                </Nav>
                <Nav>
                   
                </Nav>
            </Navbar.Collapse> 
        </Navbar>

    );//return
};//Header


export default Header;