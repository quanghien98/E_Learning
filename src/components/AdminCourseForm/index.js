import React from "react";
import { connect } from "react-redux";
// import { requestCourseDetails } from "../../actions/course/courseActions";

import Icon from "@material-ui/core/Icon";
import {
  Card,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
const AdminCourseForm = props => {
  const cardHeader = (
    <CardTitle className="wrapper__title">
      <div>
        <span>Course Details</span>
      </div>
      <div>
        <Button color="success">
          <Icon>add</Icon>
        </Button>
        <Button color="warning">
          <Icon>edit</Icon>
        </Button>
        <Button color="danger">
          <Icon>delete</Icon>
        </Button>
      </div>
    </CardTitle>
  );
  const {
    hinhAnh,
    maKhoaHoc,
    moTa,
    ngayTao,
    tenKhoaHoc,
    nguoiTao,
    danhMucKhoaHoc
  } = props.courseDetails;
  console.log(props.courseDetails);
  const courseThumbnail = hinhAnh;
  const courseId = maKhoaHoc;
  const courseDescription = moTa;
  const createdDate = ngayTao;
  const courseName = tenKhoaHoc;
  const isCourseCategory = () => {
    return danhMucKhoaHoc === undefined ? "" : danhMucKhoaHoc.tenDanhMucKhoaHoc;
  };
  const courseCategory = isCourseCategory();
  const isCourseCreator = () => {
    return nguoiTao === undefined ? "" : nguoiTao.hoTen;
  };
  const courseCreator = isCourseCreator();
  console.log(
    courseName,
    courseId,
    courseDescription,
    createdDate,
    courseThumbnail
  );

  return (
    <>
      <Card className="item__wrapper">
        {cardHeader}
        <CardBody className="wrapper__body">
          <Form className="adminCourses__item__form">
            <FormGroup>
              <Label>Image URL: </Label>
              <Input defaultValue={courseThumbnail} />
            </FormGroup>
            <div className="adminCourses__item__form__imgPreview">
              <img
                alt="course thumbnail"
                src={courseThumbnail}
                className="imgPreview__square"
              />
              <img
                alt="course thumbnail"
                src={courseThumbnail}
                className="imgPreview__stretch"
              />
            </div>
            <FormGroup>
              <Label>Course ID: </Label>
              <Input defaultValue={courseId} />
            </FormGroup>
            <FormGroup>
              <Label>Course name: </Label>
              <Input defaultValue={courseName} />
            </FormGroup>
            <FormGroup>
              <Label>Category: </Label>
              <Input defaultValue={courseCategory} />
            </FormGroup>
            <FormGroup>
              <Label>Created By: </Label>
              <Input defaultValue={courseCreator} />
            </FormGroup>
            <FormGroup>
              <Label>Date Created: </Label>
              <Input defaultValue={createdDate} />
            </FormGroup>
            <FormGroup>
              <Label>Description:</Label>
              <Input
                type="textarea"
                name="text"
                style={{ minHeight: 90 }}
                value={courseDescription || ""}
              />
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    </>
  );
};

const mapStateToProps = state => {
  return {
    courseDetails: state.courseDetails
  };
};

export default connect(mapStateToProps)(AdminCourseForm);
