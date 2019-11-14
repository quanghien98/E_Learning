import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import { withRouter } from "react-router-dom";
import {getDetailCourseFromApi} from '../../actions/course/courseActions'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { connect } from "react-redux";
const CourseItem = (props) => {
  console.log(props);
  const _onCourseDetailRequest = () => {
    props.getDetailCourseFromApi(props.course.maKhoaHoc);
    props.history.push({ pathname: `/course/${props.course.maKhoaHoc}` });
  };
  return (
    <div style={{border:"solid transparent 1px" ,padding:0}} >
      <Card>
        <CardImg top width="100%" height="126px" src={props.course.hinhAnh} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.course.tenKhoaHoc}</CardTitle>
          <CardSubtitle>{props.course.danhMucKhoaHoc.tenDanhMucKhoaHoc}</CardSubtitle>
          <CardText>{props.course.ngayTao}</CardText>
          <Button color="success" onClick={_onCourseDetailRequest}> Course Details</Button>
        </CardBody>
      </Card>
    </div>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    getDetailCourseFromApi: (maKhoaHoc) => {
      dispatch(getDetailCourseFromApi(maKhoaHoc));
    }

  }
};

export default withRouter(connect(null,mapDispatchToProps)(CourseItem));