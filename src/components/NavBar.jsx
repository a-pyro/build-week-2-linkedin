import React from 'react'
import { Navbar, Nav, Form, FormControl, Dropdown, Col, Container, Row, DropdownButton, Button } from 'react-bootstrap'
import { SiLinkedin } from 'react-icons/si'
import { FaSearch } from 'react-icons/fa'
import { ImHome3 } from 'react-icons/im'
import { BsBriefcaseFill } from 'react-icons/bs'
import { AiFillMessage } from 'react-icons/ai'
import { IoNotificationsSharp } from 'react-icons/io5'
import { CgMenuGridR } from 'react-icons/cg'
import logo from './images/my-space-logo1.png'
import fine from './images/fine2.jpg'
import fined from './images/fine4.jpg'
// import './Navbar.css'
import styled from 'styled-components'
const NavBar = () => {
    const ImHome = {
        fontSize: "1.3rem"
    }
    const ImContainer = {
        fontSize: "0.5rem",
        marginLeft: "20px"
    }
    const CircleSize = {
        borderRadius: "50%",
        marginLeft: "35px"

    }
    const insideDropdown = {
        borderRadius: "50%",
        width: "55px",
        height: "55px",
        margin: "0px"
    }
    const menu = {
        fontSize: "1rem",
        fontWeight: "400",
        justifyContent: "center",
        // lineHeight: "1.5",
        minHeight: "35px",
        minWidth: "40px",
        marginLeft: "20px",
        marginTop: "0",
        marginBottom: "0"

    }
    const Icons = {
        marginLeft: "20px",
        fontSize: "1.3rem"
    }
    const inputField = {
        width: "100%",
        borderRadius: "2px",
        lineHeight: "1.75",
        fontWeight: "400",
        fontSize: "14px",
        height: "34px",
        borderColor: "#e1e9ee",
        backgroundColor: "#e1e9ee"
    }

    return (

        <StyledNavbar bg="light" variant="light">

            <Navbar.Brand href="#home" style={{ paddingLeft: "60px" }}><SiLinkedin className="linkedin" ></SiLinkedin></Navbar.Brand>
            <Form inline>
                <Button variant="outline-info"><FaSearch /></Button>
                <FormControl style={inputField} type="text" placeholder="Search" className="mr-sm-2" />

            </Form>
            <Nav className="Iconic-Menu">
                <div>
                    <Col xs={12} style={{ paddingLeft: "30px" }}>  <ImHome3 style={ImHome}></ImHome3>
                    </Col>
                    <Col xs={12}> <Nav.Link href="#home" >Home</Nav.Link>

                    </Col>
                </div>
                <div>
                    <Col xs={12} style={{ paddingLeft: "30px" }}>
                        <img src={logo} style={ImContainer} alt='Logo'></img>
                    </Col>
                    <Col xs={12}> <Nav.Link href="#home" >MyNetwork</Nav.Link>

                    </Col>
                </div>
                <div>
                    <Col xs={12} style={{ paddingLeft: "30px" }}>
                        <BsBriefcaseFill style={ImHome}></BsBriefcaseFill>
                    </Col>
                    <Col xs={12}> <Nav.Link href="#home">Jobs</Nav.Link>

                    </Col>
                </div>
                <div>
                    <Col xs={12} style={{ paddingLeft: "30px" }}>
                        <AiFillMessage style={Icons}></AiFillMessage>
                    </Col>
                    <Col xs={12}> <Nav.Link href="#home">Messaging</Nav.Link>

                    </Col>
                </div>
                <div>
                    <Col xs={12} style={{ paddingLeft: "30px" }}>
                        < IoNotificationsSharp style={Icons}></ IoNotificationsSharp>
                    </Col>
                    <Col xs={12}> <Nav.Link href="#home">Notifications</Nav.Link>

                    </Col>
                </div>
                <div>
                    <Col xs={12} ><img src={fine} style={CircleSize} alt="circle" />
                    </Col>
                    <Col xs={12}>
                        <DropdownButton className="mt-1"
                            menuAlign="right"
                            title="Me"
                            id="dropdown-basic"

                        >
                            <div className="d-flex">
                                <img src={fined} style={insideDropdown} alt="circle" />
                                <div className="d-flex flex-direction-column">
                                    <div className="d-block ml-3">
                                        <h6>Baxtiyor Abdivaitov</h6>

                                        <h6>Student at WSB</h6>
                                    </div>
                                </div>
                            </div>

                            <Dropdown.Item href="#/action-1">
                                <Container>
                                    <Row>

                                        <Col xs={12}>
                                            <Button id="profile" variant="outline-primary rounded-pill" size="sm" block>View Profile</Button>{' '}
                                        </Col>
                                    </Row>
                                </Container>
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <h6 className="account">Account</h6>
                            <div><a href="#">Settings & privacy</a></div>
                            <div><a href="#">Help</a></div>
                            <div><a href="#">Language</a></div>
                            <Dropdown.Divider />
                            <h6 className="account">Manage</h6>
                            <div><a href="#">Posts & Activities</a></div>
                            <div><a href="#">Job Posting Account</a></div>
                            <Dropdown.Divider />
                            <a href="#">Sign out</a>

                        </DropdownButton>
                    </Col>
                </div>
                <hr />
                <div className="divider" >
                    <Col xs={12} ><CgMenuGridR style={menu}></CgMenuGridR>
                    </Col>
                    <Col xs={12}>
                        <DropdownButton
                            menuAlign="right"
                            title="Work"
                            id="dropdown-basic"

                        >
                            <div className="d-flex">
                                <img src={fined} style={insideDropdown} alt="circle" />
                                <div className="d-flex flex-direction-column">
                                    <div className="d-block ml-3">
                                        <h6>Baxtiyor Abdivaitov</h6>

                                        <h6>Student at WSB</h6>
                                    </div>
                                </div>
                            </div>

                            <Dropdown.Item href="#/action-1">
                                <Container>
                                    <Row>

                                        <Col xs={12}>
                                            <Button id="profile" variant="outline-primary rounded-pill" size="sm" block>View Profile</Button>{' '}
                                        </Col>
                                    </Row>
                                </Container>
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <h6 className="account">Account</h6>
                            <div><a href="#">Settings & privacy</a></div>
                            <div><a href="#">Help</a></div>
                            <div><a href="#">Language</a></div>
                            <Dropdown.Divider />
                            <h6 className="account">Manage</h6>
                            <div><a href="#">Posts & Activities</a></div>
                            <div><a href="#">Job Posting Account</a></div>
                            <Dropdown.Divider />
                            <a href="#">Sign out</a>

                        </DropdownButton>
                    </Col>
                </div>
                < a href="#" className="premium">Try Premium Free For 1 Month</a>



            </Nav>
        </StyledNavbar >

    )


}
const StyledNavbar = styled(Navbar)`
    & Form{
        display: flex;
        flex-direction:row;
        flex-wrap:nowrap;
        
    }
    & .linkedin{
    color: #0a66c2;
    height: 2.4rem;
    width: 2.4rem;
    }
    & .divider{
        border-left: 1px solid black;
    }
    & .Iconic-Menu{
        margin-left: 150px
    }
    & .premium{
        font-size: 0.8rem;
    }
    & #circle{
        padding: 10;

        display: "inline-block";
        background-image: url("./images/fine4.jpg");
        border-radius: "50%";
        width: 15;
        height: 15;
        left: 0;
        top: 0;
    }
    & Dropdown.item{
        min-width:150px
    }
    & .circle{
        padding: 10;
        display: "inline-block";
        background-image: url("./images/fine2.jpg");
        border-radius: "50%";
        width: 35;
        height: 35;
        left: 0;
        top: 0;
    }
    & #profile{
        width: 200px;
    }
    & #profile:hover {
        background-color: lightblue !important;
      }
      
    & a{
        color:grey;
        font-size: 0.9rem;
       }
    &  a:hover {
        border-bottom: 1px solid grey;
      }
    & #dropdown-basic {
        background-color: white;
        color: black;
        border: white;
      }

    & .links{

    }

    `
export default NavBar