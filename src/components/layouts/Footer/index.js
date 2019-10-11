import React, { Component } from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import Icon from '@material-ui/core/Icon';

const Footer = () => {
    return (
        <footer>
            <Container fluid className='nqhLayOut'>
                <Row className='nqhLayOut__Row'>
                    <Col sm="3" className='nqhLayOut__Row__Col'>
                        <Nav vertical className='nqhLayOut__Row__Col__Nav'>
                            <NavLink className='nqhLayOut__Row__Col__Nav__Link' href="#">Udemy for Business</NavLink>
                            <NavLink className='nqhLayOut__Row__Col__Nav__Link' href="#">Teach on Udemy</NavLink>
                            <NavLink className='nqhLayOut__Row__Col__Nav__Link' href="#">Udemy app</NavLink>
                            <NavLink className='nqhLayOut__Row__Col__Nav__Link' href="#">About Us</NavLink>
                        </Nav>
                    </Col>
                    <Col sm="3" className='nqhLayOut__Row__Col'>
                        <Nav vertical className='nqhLayOut__Row__Col__Nav'>
                            <NavLink className='nqhLayOut__Row__Col__Nav__Link' href="#">Careers</NavLink>
                            <NavLink className='nqhLayOut__Row__Col__Nav__Link' href="#">Blog</NavLink>
                            <NavLink className='nqhLayOut__Row__Col__Nav__Link' href="#">Help and Support </NavLink>
                            <NavLink className='nqhLayOut__Row__Col__Nav__Link' href="#">Affiliate</NavLink>
                        </Nav>
                    </Col>
                    <Col sm="3" className='nqhLayOut__Row__Col'>
                        <Nav vertical className='nqhLayOut__Row__Col__Nav'>
                            <NavLink className='nqhLayOut__Row__Col__Nav__Link' href="#">Sitemap</NavLink>
                            <NavLink className='nqhLayOut__Row__Col__Nav__Link' href="#">Popular courses</NavLink>
                        </Nav>
                    </Col>
                    <Col sm="3" className='nqhLayOut__Row__Col nqhSytle' >
                        <UncontrolledButtonDropdown className='nqhLayOut__Row__Col__UnDropDown'>
                            <DropdownToggle caret className='nqhLayOut__Row__Col__UnDropDown__DropTonggle'>
                                <Icon className='mr10 ml10 textIcon'>language</Icon>
                                <span className='mr10 text'>English</span>
                            </DropdownToggle>
                            <DropdownMenu className='nqhLayOut__Row__Col__UnDropDown__DropMenu'>
                                <DropdownItem className='nqhLayOut__Row__Col__UnDropDown__DropMenu__Item' header>Deutsch</DropdownItem>
                                <DropdownItem className='nqhLayOut__Row__Col__UnDropDown__DropMenu__Item' header>Italiano</DropdownItem>
                                <DropdownItem className='nqhLayOut__Row__Col__UnDropDown__DropMenu__Item' header>Polski</DropdownItem>
                                <DropdownItem className='nqhLayOut__Row__Col__UnDropDown__DropMenu__Item' header>Việt Nam</DropdownItem>

                            </DropdownMenu>
                        </UncontrolledButtonDropdown>
                    </Col>
                </Row>
                <hr/>
                <div>
                    <Container fluid>
                        <Row className='nqhLayOut__Row display'>
                            <Col xs="6" className='display__col'>
                                <Row className='nqhPading'>
                                    <div className='logo'>LOGO</div>
                                    <div>
                                        <span className='copy'>Copyright © 2019 Udemy, Inc.</span>
                                    </div>
                                </Row>
                            </Col>
                            <Col xs="6" className='display__col'>
                                <Nav className='nqhPading myStyle display__col__nav'>
                                    <NavLink href="#" className='display__col__nav__link'>Terms</NavLink>
                                    <NavLink href="#" className='display__col__nav__link'>Privacy Policy and Cookie Policy</NavLink>
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