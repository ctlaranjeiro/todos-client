import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import styled from 'styled-components';
import { FaChevronDown } from 'react-icons/fa';


const Span = styled.span`
    font-size: 2em;
    color: white; 
    height: 20%;
`



class Navigation extends Component {
    render(){
        return(
            <div>
                <div className="top-nav">
                    <Navbar className="navbar-bg sideNav d-lg-block" collapseOnSelect expand="lg" variant="dark">
                        <Navbar.Brand href="/">| TodoIt</Navbar.Brand>      
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" /> 
                        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
                            <div className="d-flex flex-column align-items-center top-nav-style">
                                <span className="greeting mb-3">Welcome!</span>
                                <p>Want to access full features, like saving tasks and creating lists?</p>
                                <p><FaChevronDown /></p>
                            </div>  
                            <Nav>
                                <Nav.Link href="/">Login</Nav.Link>
                                <Nav.Link eventKey={2} href="/">Signup</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div className="sideNav sideNav-info">
                    <Span >| TodoIt</Span>
                    <div className="d-flex flex-column align-items-center ">
                        <span className="greeting mb-3">Welcome!</span>
                        <p>Want to access full features, like saving tasks and creating lists?</p>
                        <p><a href="/">Login</a> or <a href="/">Signup</a></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navigation;