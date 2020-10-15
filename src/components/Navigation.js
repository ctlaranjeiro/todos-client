import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';
import { FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { logoutUserOnAPI } from '../actions/auth';
import ListName from './ListName';
import UserWelcome from './UserWelcome';


const Span = styled.span`
    font-size: 2em;
    color: white; 
    height: 12%;
`

const Div = styled.div`
    ${props => props.lists && css `
        @media (min-width: 992px) {
            width: 160px;
            display: flex;
            justify-content: center;
            max-height: 40vh;
            overflow: scroll;
        }
    `};
`;

const Ul = styled.ul`
    width: 100%;
`

const Li = styled.li`
    background-color: rgba(255,255,255,0.85);
    border-radius: 50px;
    padding: 5px 15px;
    color: rgba(0,0,0, 0.7);
    margin: 10px 0;
    cursor: pointer;
    font-size: 0.9em;
`

class Navigation extends Component {
    state = {
        currentSelectedList: this.props.loggedUser.username && this.props.loggedUser.lists[0]
    }

    // Need to send selected list to Redux - So i can display the current selected list on the page
    // I need to render this information in User Page, so it can't come from the Navigation component. Unless I lift the state up, but that's not the point, right?

    handleSelectedList = (id) => {
        const filtered = this.props.loggedUser.lists.filter(list => list._id === id);
        // console.log('filtered:', filtered[0]);

        this.setState({
            currentSelectedList: filtered[0]
        });

        this.props.selectedList(filtered[0]);
    }

    render(){
        if(!this.props.loggedUser.username){
            return(
                <div>
                    <div className="top-nav">
                        <Navbar className="navbar-bg sideNav d-lg-block" collapseOnSelect expand="lg" variant="dark">
                            <Link to="/"><Navbar.Brand >| TodoIt</Navbar.Brand></Link>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" /> 
                            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
                                <div className="d-flex flex-column align-items-center top-nav-style">
                                    <span className="greeting mb-3">Welcome!</span>
                                    <p>Want to access full features, like saving tasks and creating lists?</p>
                                    <p><FaChevronDown /></p>
                                </div>  
                                <Nav>
                                    <Link className="btn-nav" to="/login">Login</Link>
                                    <Link className="btn-nav" to="/signup">Signup</Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                    <div className="sideNav sideNav-info">
                        <Span><Link className="logo-link" to="/">| TodoIt</Link></Span>
                        <div className="d-flex flex-column align-items-center links">
                            <span className="greeting mb-3">Welcome!</span>
                            <p>Want to access full features, like saving tasks and creating lists?</p>
                            <Nav className="btn-size">
                                <Link className="btn-nav" to="/login">Login</Link>
                                <Link className="btn-nav" to="/signup">Signup</Link>
                                {/* <Nav.Link className="btn-nav" eventKey={2} href="/signup">Signup</Nav.Link> */}
                            </Nav>
                        </div>
                    </div>
                </div>
            )
        } else {
            return(
                <div>
                    <div className="top-nav">
                        <Navbar className="navbar-bg sideNav d-lg-block" collapseOnSelect expand="lg" variant="dark">
                        <Link to="/"><Navbar.Brand >| TodoIt</Navbar.Brand></Link>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" /> 
                            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
                                <div className="d-flex flex-column align-items-center top-nav-style">
                                    <span className="greeting mb-3">Welcome, {this.props.loggedUser.username}!</span>
                                    <h6>My lists</h6>
                                    <Div lists>
                                        <Ul>
                                            {this.props.loggedUser.lists.map(list => {
                                                return <Li onClick={() => this.handleSelectedList(list._id)}><ListName color={list.color} listName={list.listName} /></Li>
                                            })}
                                        </Ul>
                                    </Div>
                                    <Link to="/" className="btn-nav logout-btn" onClick={this.props.handleLogout}>Logout</Link>
                                </div>  
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                    <div className="sideNav sideNav-info">
                    <Span><Link className="logo-link" to="/">| TodoIt</Link></Span>
                        <div className="d-flex flex-column align-items-center links">
                            <UserWelcome profilePicture={this.props.loggedUser.profilePicture} username={this.props.loggedUser.username} />
                            <h6>My lists</h6>
                            <Div lists>
                                <Ul>
                                    {this.props.loggedUser.lists.map(list => {
                                        return <Li onClick={() => this.handleSelectedList(list._id)}><ListName color={list.color} listName={list.listName} /></Li>
                                    })}
                                    {/* <Li><ListName color="#f62878" listName="Test" /></Li> */}
                                </Ul>
                            </Div>
                            <Link to="/" className="btn-nav logout-btn" onClick={this.props.handleLogout}>Logout</Link>
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

const mapDispatchToProps = dispatch => ({
    handleLogout: () => dispatch(logoutUserOnAPI())
  });
  

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
