import { Nav, NavItem, NavLink } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import React, { Component } from 'react'
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import Lyft from './../../../images/lyft-logo.svg';
import Pinterest from './../../../images/pinterest-logo.svg';
import Adidas from './../../../images/adidas-logo.svg';
import Eventbrite from './../../../images/eventbrite-logo.svg';
import Surveymonkey from './../../../images/surveymonkey-logo.svg';
import Booking from './../../../images/booking-logo.svg';
import AnhPhu from './../../../images/avatar/AnhPhujpg.jpg';
import AnhThinh from './../../../images/avatar/AnhThinh.jpg';
import AnhTin from './../../../images/avatar/AnhTin.jpg';
export default class Comment extends Component {
    render() {
        return (
            <Container fluid className='nqhStyle'>
                <div className='nqhStyle__Comment'>
                    <h4 className='nqhStyle__Comment__Title'>What our students have to say</h4>
                    <Container fluid className='nqhStyle__Comment__Show'>
                        <Row className='nqhStyle__Comment__Show__Row'>
                            <Col className='nqhStyle__Comment__Show__Row__Col' md="4">
                                <div className="card p-0" >
                                    <div className='Infor d-flex'>
                                        <div className='Infor__Img'>
                                            <img src={AnhThinh} />
                                        </div>
                                        <div className='Infor__Name'>Thịnh Lê</div>
                                    </div>
                                    <div className='Comment'>
                                        <p className='Comment__P'>
                                            Udemy is a life saver. I don't have the time or money for a college education.
                                            My goal is to become a freelance web developer, and thanks to Udemy, I'm really close.
                                       </p>
                                    </div>
                                </div>
                            </Col>
                            <Col className='nqhStyle__Comment__Show__Row__Col' md="4">
                                <div className="card p-0">
                                    <div className='Infor d-flex'>
                                        <div className='Infor__Img'>
                                            <img src={AnhPhu} />
                                        </div>
                                        <div className='Infor__Name'>Dương Quốc Phú</div>
                                    </div>
                                    <div className='Comment'>
                                        <p className='Comment__P'>
                                            I believe in lifelong learning and Udemy is a great place to learn from experts.
                                            I've learned a lot and recommend it to all my friends.
                                       </p>
                                    </div>
                                </div>
                            </Col>
                            <Col className='nqhStyle__Comment__Show__Row__Col' md="4">
                                <div className="card p-0">
                                    <div className='Infor d-flex'>
                                        <div className='Infor__Img'>
                                            <img src={AnhTin} />
                                        </div>
                                        <div className='Infor__Name'>Tín Lê</div>
                                    </div>
                                    <div className='Comment'>
                                        <p className='Comment__P'>
                                            My children and I LOVE Udemy! The courses are fantastic and the instructors are so fun and knowledgeable.
                                            I only wish we found it sooner.
                                       </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div>
                    <Container fluid className='Partner'>
                        <Row className='Partner__Row'>
                            <Col className='Partner__Row__Col Partner__Row__Header'>
                                Trusted by companies of all sizes
                            </Col>
                        </Row>
                        <Row className='Partner__Row'>
                            <Col className='Partner__Row__Col'>
                                <div className='ml-2 Partner__Row__Col__PartnerLogo'>
                                    <img className='Partner__Row__Col__PartnerLogo__Item' src={Lyft} />
                                    <img className='Partner__Row__Col__PartnerLogo__Item' src={Pinterest} />
                                    <img className='Partner__Row__Col__PartnerLogo__Item' src={Adidas} />
                                    <img className='Partner__Row__Col__PartnerLogo__Item' src={Eventbrite} />
                                    <img className='Partner__Row__Col__PartnerLogo__Item' src={Surveymonkey} />
                                    <img className='Partner__Row__Col__PartnerLogo__Item' src={Booking} />

                                </div>
                            </Col>
                        </Row>
                        <Row className='Student'>
                            <Col sm='6 '>
                                <Card body className='Student__Card'>
                                    <CardTitle className='Student__Card__Title'>Teach on Udemy</CardTitle>
                                    <CardText className='Student__Card__Text'>Teach what you love. Udemy gives you the tools to create an online course.
</CardText>
                                    <Button className='Student__Card__Btn'>Start Teaching</Button>
                                </Card>
                            </Col>
                            <Col sm='6'>
                                <Card body className='Student__Card'>
                                    <CardTitle className='Student__Card__Title'>Udemy for Business</CardTitle>
                                    <CardText className='Student__Card__Text'>Get unlimited access to 3,500+ of Udemy’s top courses for your team.</CardText>
                                    <Button className='Student__Card__Btn'>Get Udemy For Business</Button>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>

            </Container>
        )
    }
}
