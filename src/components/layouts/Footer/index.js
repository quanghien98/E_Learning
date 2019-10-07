import React, { Component } from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import Icon from '@material-ui/core/Icon';
import Lyft from './../../../images/lyft-logo.svg';
import Pinterest from './../../../images/pinterest-logo.svg';
import Adidas from './../../../images/adidas-logo.svg';
import Eventbrite from './../../../images/eventbrite-logo.svg';
import Surveymonkey from './../../../images/surveymonkey-logo.svg';
import Booking from './../../../images/booking-logo.svg';



const Footer = () => {
    return (
        <footer>
            <Container fluid>
                <Row>
                    <Col sm="3">
                        <Nav vertical>
                            <NavLink href="#">Udemy for Business</NavLink>
                            <NavLink href="#">Teach on Udemy</NavLink>
                            <NavLink href="#">Udemy app</NavLink>
                            <NavLink href="#">About Us</NavLink>
                        </Nav>
                    </Col>
                    <Col sm="3">
                        <Nav vertical>
                            <NavLink href="#">Careers</NavLink>
                            <NavLink href="#">Blog</NavLink>
                            <NavLink href="#">Help and Support </NavLink>
                            <NavLink href="#">Affiliate</NavLink>
                        </Nav>
                    </Col>
                    <Col sm="3">
                        <Nav vertical>
                            <NavLink href="#">Sitemap</NavLink>
                            <NavLink href="#">Popular courses</NavLink>
                        </Nav>
                    </Col>
                    <Col sm="3">
                        <UncontrolledButtonDropdown>
                            <DropdownToggle caret>
                                <Icon>language</Icon>English
                        </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem header>Header</DropdownItem>
                                <DropdownItem disabled>Action</DropdownItem>
                                <DropdownItem>Another Action</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Another Action</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledButtonDropdown>
                    </Col>
                </Row>
                <hr />
                <div>
                    <Container fluid>
                        <Row>
                            <Col xs="6">
                                <Row>
                                    <div>LOGO</div>
                                    <div>
                                        <span>Copyright © 2019 Udemy, Inc.</span>
                                    </div>
                                </Row>
                            </Col>
                            <Col xs="6">
                                <Nav>
                                    <NavLink href="#">Link</NavLink>
                                    <NavLink href="#">Link</NavLink>
                                    <NavLink href="#">Another Link</NavLink>
                                    <NavLink disabled href="#">Disabled Link</NavLink>
                                </Nav>
                            </Col>

                        </Row>
                    </Container>
                </div>
            </Container>
        </footer>
    )
};

export default Footer;