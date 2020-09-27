import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FaChevronDown } from 'react-icons/fa';


const Span = styled.span`
    font-size: 2em;
    color: white; 
    height: 20%;
`

const Div = styled.div`
    width: 6em;
    height: 6em;
    background-image: url(${props => props.backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center top;
    border-radius: 50%;  
    margin-bottom: 20px;     
`;

class Navigation extends Component {
    render(){
        if(!this.props.loggedUser.username){
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
                                    <Nav.Link href="/login">Login</Nav.Link>
                                    <Nav.Link eventKey={2} href="/">Signup</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                    <div className="sideNav sideNav-info">
                        <Span><a className="logo-link" href="/">| TodoIt</a></Span>
                        <div className="d-flex flex-column align-items-center links">
                            <span className="greeting mb-3">Welcome!</span>
                            <p>Want to access full features, like saving tasks and creating lists?</p>
                            <p><a href="/login">Login</a> or <a href="/">Signup</a></p>
                        </div>
                    </div>
                </div>
            )
        } else {
            return(
                <div>
                    <div className="top-nav">
                        <Navbar className="navbar-bg sideNav d-lg-block" collapseOnSelect expand="lg" variant="dark">
                            <Navbar.Brand href="/">| TodoIt</Navbar.Brand>      
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" /> 
                            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
                                <div className="d-flex flex-column align-items-center top-nav-style">
                                    <span className="greeting mb-3">Welcome, {this.props.loggedUser.username}!</span>
                                    <h6>My lists</h6>
                                    <ul>
                                        {this.props.loggedUser.lists.map(list => {
                                            return <li>{list.listName}</li>
                                        })}
                                    </ul>
                                </div>  
                                <Nav>
                                    <Nav.Link href="/login">Logout</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                    <div className="sideNav sideNav-info">
                        <Span><a className="logo-link" href="/">| TodoIt</a></Span>
                        <div className="d-flex flex-column align-items-center links">
                            <Div backgroundImage={this.props.loggedUser.profilePicture}></Div>
                            <span className="greeting mb-3">Welcome, {this.props.loggedUser.username}!</span>
                            <h6>My lists</h6>
                            <ul>
                                {this.props.loggedUser.lists.map(list => {
                                    return <li>
                                    {/* create rounded div to show color of the list */}
                                    {/* <div style={{backgroundColor: `${list.color}`, width: "20px" }}></div> */}
                                    {list.listName}
                                    </li>
                                })}
                            </ul>
                            <p><a href="/login">Logout</a></p>
                        </div>
                    </div>
                </div>
            )
        }
        
    }
}

const mapStateToProps = state => {
    return {
      loggedUser: state.loggedUser
    }
}

export default connect(mapStateToProps)(Navigation);
