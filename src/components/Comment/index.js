import React, { Component, Fragment } from 'react'
import { Media } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';
export default class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: '',
            Comments: ['Very Nice', 'That is good'],
        };

    }
    onChange = (e) => {
        console.log(e.target.value);
        this.setState({ comment: e.target.value });
    }
    componentDidMount(){
       
        
    }
    addComment = () => {
        this.state.Comments.push(this.state.comment);
    }
    render() {
        const COMMENTS = this.state.Comments.map((item) => {
            return (<Fragment>
                <Row>
                    <Col xs="4">.col-3</Col>
                    <Col xs="8">{item}</Col>
                </Row>
            </Fragment>);
        });
        return (
            <div>
                <h3>Comment</h3>
                {COMMENTS}
                <div className='nqhLayout_body_Comments_Details'>
                    <InputGroup>
                        <Input placeholder="Comment" onChange={this.onChange} />
                        <InputGroupAddon addonType="append">
                            <Button color="danger" onClick={() => this.addComment()}>Post Comment</Button>
                        </InputGroupAddon>
                    </InputGroup>
                </div>

            </div>
        )
    }
}
