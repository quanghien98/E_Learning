import { Nav, NavItem, NavLink } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import React, { Component } from 'react'
import Lyft from './../../../images/lyft-logo.svg';
import Pinterest from './../../../images/pinterest-logo.svg';
import Adidas from './../../../images/adidas-logo.svg';
import Eventbrite from './../../../images/eventbrite-logo.svg';
import Surveymonkey from './../../../images/surveymonkey-logo.svg';
import Booking from './../../../images/booking-logo.svg';
export default class Comment extends Component {
    render() {
        return (
            <div>
                <div>
                    <h4>What our students have to say</h4>

                    <Container>
                        <Row>
                            <Col className="" sm="4">
                                <div className="card p-0" style={{ width: 400 }}>
                                    <img className="card-img-top" src="img_avatar1.png" alt="Card image" />
                                    <div className="card-body">
                                        <h4 className="card-title">John Doe</h4>
                                        <p className="card-text">Some example text.</p>

                                    </div>
                                </div>

                            </Col>
                            <Col sm="4">
                                <div className="card p-0" style={{ width: 400 }}>
                                    <img className="card-img-top" src="img_avatar1.png" alt="Card image" />
                                    <div className="card-body">
                                        <h4 className="card-title">John Doe</h4>
                                        <p className="card-text">Some example text.</p>

                                    </div>
                                </div>

                            </Col>
                            <Col sm="4">
                                <div className="card p-0" style={{ width: 400 }}>
                                    <img className="card-img-top" src="img_avatar1.png" alt="Card image" />
                                    <div className="card-body">
                                        <h4 className="card-title">John Doe</h4>
                                        <p className="card-text">Some example text.</p>

                                    </div>
                                </div>

                            </Col>
                        </Row>
                    </Container>
                </div>
                <div>
                    <Container fluid>
                        <Row>
                            <Col>
                                Trusted by companies of all sizes
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className='ml-2 row'>
                                    <img src={Lyft} />
                                    <img src={Pinterest} />
                                    <img src={Adidas} />
                                    <img src={Eventbrite} />
                                    <img src={Surveymonkey} />
                                    <img src={Booking} />

                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm='6'>
                                <div className="card" style={{ width: 400 }}>
                                    <div className="card-body">
                                        <h4 className="card-title">John Doe</h4>
                                        <p className="card-text">Some example text.</p>
                                        <a href="#" className="btn btn-primary">See Profile</a>
                                    </div>
                                </div>
                            </Col>
                            <Col sm='6'>
                                <div className="card" style={{ width: 400 }}>
                                    <div className="card-body">
                                        <h4 className="card-title">John Doe</h4>
                                        <p className="card-text">Some example text.</p>
                                        <a href="#" className="btn btn-primary">See Profile</a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

            </div>
        )
    }
}
