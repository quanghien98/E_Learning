import React, { Component } from "react";
import { connect } from "react-redux";
import {
  createNewCourse,
  updateCourse,
  deleteCourse
} from "../../actions/course/courseActions";
import {
  validateUrl,
  validateStringLength,
  validateId
} from "../../actions/form/formValidation";
import _ from "lodash";
import Icon from "@material-ui/core/Icon";
import {
  Card,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback
} from "reactstrap";
class AdminCourseForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      maKhoaHoc: "",
      biDanh: "",
      tenKhoaHoc: "",
      moTa: "",
      luotXem: 0,
      danhGia: 0,
      hinhAnh: "",
      maNhom: "GP09",
      ngayTao: "",
      maDanhMucKhoaHoc: "",
      taiKhoanNguoiTao: "",
      imgUrlError: "",
      idError: "",
      courseNameError: "",
      categoryIdError: "",
      userAccountError: "",
      isEditing: false
    };
  }

  /* --------------- methods --------------- */
  /*  validateInputLength = event => {
    let inputLengthError = "";
    if (event.target.value.length < 3 || event.target.value > 150) {
      inputLengthError = "error";
      this.setState({ inputLengthError });
    }
    this.setState(inputLengthError);
  }; */
  // validate image url
  validateImgUrl = () => {
    let imgUrl = this.state.hinhAnh;
    let imgUrlError = this.state.imgUrlError;
    let isEditing = this.state.isEditing;
    // let isAdding = this.props.isAdding
    if (isEditing) {
      imgUrlError = validateUrl(imgUrl);
      this.setState({ imgUrlError });
    }
  };
  // validate kinds of ids
  validateId = (id, error) => {
    let invalidLength = validateStringLength(id);
    console.log(invalidLength);
    let invalidIdFormat = validateId(id);
    let isEditing = this.props.isEditing;
    if (isEditing) {
      if (error === this.state.idError) {
        this.setState({
          idError: invalidLength + invalidIdFormat
        });
      }
    }
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addNewCourse = () => {
    this.props.setAdding(true);
    this.setState({
      maKhoaHoc: "",
      biDanh: "",
      tenKhoaHoc: "",
      moTa: "",
      hinhAnh: "",
      ngayTao: new Date().toLocaleString("vi-VN").split(", ")[1],
      maDanhMucKhoaHoc: "",
      taiKhoanNguoiTao: "",
      isEditing: true
    });
  };
  editCourse = () => {
    if (!_.isEmpty(this.props.courseDetails))
      this.setState({
        isEditing: true
      });
  };
  cancelEditing = () => {
    this.props.setAdding(false);
    this.setState({
      isEditing: false
    });
  };

  gatherCourseInfo = () => {
    let course = _.omit(this.state, [
      "imgUrlError",
      "idError",
      "courseNameError",
      "categoryIdError",
      "userAccountError",
      "isEditing"
    ]);
    return course;
  };

  submitChange = () => {
    const courseInfo = this.gatherCourseInfo();
    if (this.props.isAdding) {
      console.log("Running createNewCourse()");

      createNewCourse(courseInfo);
      this.props.setAdding(false);
    } else {
      console.log("Running updateCourse()");
      updateCourse(courseInfo);
    }
    this.setState({
      isEditing: false
    });
  };
  handleDeleting = () => {
    const id = this.state.maKhoaHoc;
    console.log(id);
    id === "" ? alert("Pick a course to delete") : deleteCourse(id);
  };
  /* --------------------------------------- */
  static getDerivedStateFromProps(props, state) {
    if (!_.isEmpty(props.courseDetails) && !props.isAdding) {
      const {
        maKhoaHoc,
        biDanh,
        tenKhoaHoc,
        moTa,
        hinhAnh,
        ngayTao
      } = props.courseDetails;
      const maDanhMucKhoahoc =
        props.courseDetails.danhMucKhoaHoc.maDanhMucKhoahoc;
      const taiKhoanNguoiTao = props.courseDetails.nguoiTao.taiKhoan;
      return {
        maKhoaHoc: maKhoaHoc,
        biDanh: biDanh,
        tenKhoaHoc: tenKhoaHoc,
        moTa: moTa,
        hinhAnh: hinhAnh,
        ngayTao: ngayTao,
        maDanhMucKhoaHoc: maDanhMucKhoahoc,
        taiKhoanNguoiTao: taiKhoanNguoiTao,
        imgUrlError: ""
      };
    } else {
      return { ...state };
    }
  }
  render() {
    // this.gartherCourseInfo()
    const {
      hinhAnh,
      maKhoaHoc,
      moTa,
      ngayTao,
      tenKhoaHoc,
      isEditing,
      idError
    } = this.state;
    const { isAdding } = this.props;
    // console.log(props.courseDetails);
    const courseThumbnail = hinhAnh;
    const courseId = maKhoaHoc;
    const courseDescription = moTa;
    const createdDate = ngayTao;
    const courseName = tenKhoaHoc;
    const courseCategoryId = this.state.maDanhMucKhoaHoc;
    const courseCreator = this.state.taiKhoanNguoiTao;

    const btnGroupConfirmSave = (
      <>
        <Button color="success" onClick={this.submitChange}>
          <Icon>save</Icon>
        </Button>
        <Button color="warning" onClick={this.cancelEditing}>
          <Icon>cancel</Icon>
        </Button>
      </>
    );

    const cardHeader = (
      <CardTitle className="wrapper__title">
        <div>
          <span>Course Details</span>
        </div>
        <div>
          {!isEditing ? (
            <Button color="success" onClick={this.addNewCourse}>
              <Icon>add</Icon>
            </Button>
          ) : (
            <></>
          )}
          {!isEditing ? (
            <Button color="warning" onClick={this.editCourse}>
              <Icon>edit</Icon>
            </Button>
          ) : (
            btnGroupConfirmSave
          )}
          <Button color="danger" onClick={this.handleDeleting}>
            <Icon>delete</Icon>
          </Button>
        </div>
      </CardTitle>
    );
    const cardBody = (
      <CardBody className="wrapper__body">
        <Form className="adminCourses__item__form">
          <FormGroup>
            <Label>Image URL: </Label>
            <Input
              invalid={this.state.imgUrlError === "" ? false : true}
              type="text"
              name="hinhAnh"
              value={courseThumbnail}
              disabled={!isEditing ? true : false}
              onChange={this.handleInputChange}
              onBlur={this.validateImgUrl}
            />
            <FormFeedback invalid="true">{this.state.imgUrlError}</FormFeedback>
          </FormGroup>
          <div className="adminCourses__item__form__imgPreview">
            <span
              style={{
                fontWeight: "bold",
                fontSize: 12
              }}
            >
              Preview:{" "}
            </span>
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
            <Input
              type="text"
              name="maKhoaHoc"
              value={courseId}
              disabled={!isEditing ? true : false}
              onChange={this.handleInputChange}
              onBlur={this.validateId}
            />
            <FormFeedback invalid="true">{this.state.idError}</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label>Course name: </Label>
            <Input
              type="text"
              name="tenKhoaHoc"
              value={courseName}
              onChange={this.handleInputChange}
              disabled={!isEditing ? true : false}
            />
          </FormGroup>
          <FormGroup>
            <Label>Category ID: </Label>
            <Input
              value={!isAdding ? courseCategoryId : ""}
              type="text"
              onChange={this.handleInputChange}
              disabled={!isEditing ? true : false}
            />
          </FormGroup>
          <FormGroup>
            <Label>Creator ID: </Label>
            <Input
              value={courseCreator}
              type="text"
              name="taiKhoanNguoiTao"
              //value={this.state.taiKhoanNguoiTao}
              onChange={this.handleInputChange}
              disabled={!isEditing ? true : false}
            />
          </FormGroup>
          <FormGroup>
            <Label>Date Created: </Label>
            <Input
              type="text"
              name="ngayTao"
              value={createdDate}
              onChange={this.handleInputChange}
              disabled={!isEditing ? true : false}
            />
          </FormGroup>
          <FormGroup>
            <Label>Description:</Label>
            <Input
              type="textarea"
              name="moTa"
              value={courseDescription}
              style={{ minHeight: 90 }}
              onChange={this.handleInputChange}
              disabled={!isEditing ? true : false}
            />
          </FormGroup>
        </Form>
      </CardBody>
    );

    const blank = (
      <div>
        <h6>
          No course is currently selected. Click any row on the table above to
          select a course, then click <Icon>edit</Icon> to modify, or click{" "}
          <Icon>delete</Icon> to delete selected course. Click <Icon>add</Icon>
          button if you want to create a new course.{" "}
        </h6>
      </div>
    );
    const isBlank = !isAdding && _.isEmpty(this.props.courseDetails);
    // console.log(isBlank);

    return (
      <>
        <Card className="item__wrapper">
          {cardHeader}
          {isBlank ? blank : cardBody}
        </Card>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    courseDetails: state.courseDetails
  };
};

export default connect(mapStateToProps)(AdminCourseForm);
