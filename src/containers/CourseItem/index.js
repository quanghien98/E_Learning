import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import { withRouter } from "react-router-dom";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
const CourseItem = (props) => {
  console.log(props);
  const _onCourseDetailRequest = () => {
    // props.requestCourseDetails(this.props.course.maKhoaHoc);
    props.history.push({pathname:`/course/${props.course.maKhoaHoc}`});
  };
  return (
      <Col sm="2">
        <Card>
          <CardImg top width="100%" height="126px" src={props.course.hinhAnh} alt="Card image cap" />
          <CardBody>
            <CardTitle>{props.course.tenKhoaHoc}</CardTitle>
            <CardSubtitle>{props.course.danhMucKhoaHoc.tenDanhMucKhoaHoc}</CardSubtitle>
            <CardText>{props.course.ngayTao}</CardText>
            <Button color="success"  onClick={_onCourseDetailRequest}> Course Details</Button>
           
          </CardBody>
        </Card>
      </Col>
  );
};

export default withRouter (CourseItem);