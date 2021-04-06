import React from 'react'
import { Navbar, Nav, Form, FormControl, Dropdown, Col, Container, Row, DropdownButton, Button } from 'react-bootstrap'
import { SiLinkedin } from 'react-icons/si'
import { FaSearch } from 'react-icons/fa'
import { ImHome3 } from 'react-icons/im'
import { BsBriefcaseFill } from 'react-icons/bs'
import { AiFillMessage } from 'react-icons/ai'
import { IoNotificationsSharp } from 'react-icons/io5'
import logo from './images/my-space-logo1.png'
import fine from './images/fine2.jpg'
import fined from './images/fine4.jpg'
import './Navbar.css'
const NavBar = () => {
    const ImHome = {
        fontSize: "1.5rem"
    }
    const ImContainer = {
        fontSize: "0.5rem"
    }
    const CircleSize = {
        borderRadius: "50%",
        marginLeft: "35px"

    }
    const insideDropdown = {
        borderRadius: "50%",
        margin: "0px"
    }
    return <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home" style={{ paddingLeft: "60px" }}><SiLinkedin ></SiLinkedin></Navbar.Brand>
        <Form inline>
            <FaSearch></FaSearch>
            <FormControl style={{ paddingRight: "300px" }} type="text" placeholder="Search" className="mr-sm-2" />

        </Form>
        <Nav className="ml-auto">
            <div>
                <Col xs={12} style={{ paddingLeft: "30px" }}>  <ImHome3 style={ImHome}></ImHome3>
                </Col>
                <Col xs={12}> <Nav.Link href="#home" style={{ paddinRight: "100px" }}>Home</Nav.Link>

                </Col>
            </div>
            <div>
                <Col xs={12} style={{ paddingLeft: "30px" }}>
                    <img src={logo} style={ImContainer} alt='Logo'></img>
                </Col>
                <Col xs={12}> <Nav.Link href="#home" style={{ paddinRight: "100px" }}>MyNetwork</Nav.Link>

                </Col>
            </div>
            <div>
                <Col xs={12} style={{ paddingLeft: "30px" }}>
                    <BsBriefcaseFill style={ImHome}></BsBriefcaseFill>
                </Col>
                <Col xs={12}> <Nav.Link href="#home" style={{ paddinRight: "100px" }}>Jobs</Nav.Link>

                </Col>
            </div>
            <div>
                <Col xs={12} style={{ paddingLeft: "30px" }}>
                    <AiFillMessage style={ImHome}></AiFillMessage>
                </Col>
                <Col xs={12}> <Nav.Link href="#home" style={{ paddinRight: "100px" }}>Messaging</Nav.Link>

                </Col>
            </div>
            <div>
                <Col xs={12} style={{ paddingLeft: "30px" }}>
                    < IoNotificationsSharp style={ImHome}></ IoNotificationsSharp>
                </Col>
                <Col xs={12}> <Nav.Link href="#home" style={{ paddinRight: "100px" }}>Notifications</Nav.Link>

                </Col>
            </div>
            <div>
                <Col xs={12} ><img src={fine} style={CircleSize} alt="circle" />
                </Col>
                <Col xs={12}>
                    <DropdownButton
                        menuAlign="right"
                        title="Me"
                        id="dropdown-basic"

                    >
                        <div className="d-flex">
                            <img src={fined} style={insideDropdown} alt="circle" />
                            <div className="d-flex flex-direction-column">
                                <div className="d-block">
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
                        <Nav.Link className="links" href="#">Settings & privacy</Nav.Link>
                        <Nav.Link className="links" href="#">Help</Nav.Link>
                        <Nav.Link className="links" href="#">Language</Nav.Link>
                        <Dropdown.Divider />
                        <h6 className="account">Manage</h6>
                        <Nav.Link className="links" href="#">Posts & Activities</Nav.Link>
                        <Nav.Link className="links" href="#">Job Posting Account</Nav.Link>
                        <Dropdown.Divider />
                        <Nav.Link className="links" href="#">Sign out</Nav.Link>

                    </DropdownButton>
                </Col>
            </div>



        </Nav>

    </Navbar >

}
export default NavBar