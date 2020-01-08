import React, { Component } from "react";
import { connect } from "react-redux";
import {
  createNewCourse,
  updateCourse,
  deleteCourse
} from "../../actions/course/courseActions";
import {
  validateUrl,
  validateStringLength
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
      altNameError: "",
      categoryIdError: "",
      dateError: "",
      desError: "",
      isEditing: false
    };
  }

  /* --------------- methods --------------- */

  // validate image url
  validateImgUrl = () => {
    let imgUrl = this.state.hinhAnh;
    let imgUrlError = this.state.imgUrlError;
    let isEditing = this.state.isEditing;
    if (isEditing) {
      imgUrlError = validateUrl(imgUrl);
      this.setState({ imgUrlError });
    }
  };
  // validate input length
  validateInputLength = (input, maxLength, inputName) => {
    let invalidLength = validateStringLength(input, maxLength);
    // console.log(invalidLength);
    switch (inputName) {
      case "idError":
        this.setState({
          idError: invalidLength
        });
        break;
      case "courseNameError":
        this.setState({
          courseNameError: invalidLength
        });
        break;
      case "altNameError":
        this.setState({
          altNameError: invalidLength
        });
        break;
      case "dateError":
        this.setState({
          dateError: invalidLength
        });
        break;
      case "desError":
        this.setState({
          desError: invalidLength
        });
        break;

      default:
        return { ...this.state };
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
      "altNameError",
      "desError",
      "isEditing"
    ]);
    console.log(course);

    return course;
  };

  submitChange = () => {
    const courseInfo = this.gatherCourseInfo();
    if (this.props.isAdding) {
      createNewCourse(courseInfo);
      console.log("Running createNewCourse()");

      this.props.setAdding(false);
    } else {
      console.log("Running updateCourse()");
      updateCourse(courseInfo);
    }
    this.setState({
      isEditing: false
    });
  };
  // handleDeleting = () => {
  //   const id = this.state.maKhoaHoc;
  //   // console.log(id);
  //   id === ""
  //     ? alert("Pick a course to delete")
  //     : deleteCourse(id).then(this.props.reloadCourseList);
  // };
  /* --------------------------------------- */

  /* static getDerivedStateFromProps(props, state) {
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
        ...state,
        maKhoaHoc: maKhoaHoc,
        biDanh: biDanh,
        tenKhoaHoc: tenKhoaHoc,
        moTa: moTa,
        hinhAnh: hinhAnh,
        ngayTao: ngayTao,
        maDanhMucKhoaHoc: maDanhMucKhoahoc,
        taiKhoanNguoiTao: taiKhoanNguoiTao
      };
    }
    return { ...state };
  } */

  render() {
    // this.gatherCourseInfo();
    // const { isEditing } = this.state;
    const {
      hinhAnh,
      maKhoaHoc,
      moTa,
      ngayTao,
      tenKhoaHoc,
      biDanh,
      isEditing
      // idError
    } = this.state;
    const { isAdding, categories, currentAdminAccount } = this.props;

    const maDanhMucKhoaHoc = this.state.maDanhMucKhoaHoc;
    const taiKhoanNguoiTao = this.state.taiKhoanNguoiTao;

    const categoryOptions = categories.map(item => {
      return <option>{item.maDanhMuc}</option>;
    });
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
          <Button
            color="danger"
            onClick={() => this.props.handleDeletion(this.state.maKhoaHoc)}
          >
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
              value={
                hinhAnh !== "" ? hinhAnh : this.props.courseDetails.hinhAnh
              }
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
              src={hinhAnh}
              className="imgPreview__square"
            />
            <img
              alt="course thumbnail"
              src={hinhAnh}
              className="imgPreview__stretch"
            />
          </div>
          <FormGroup>
            <Label>Course ID: </Label>
            <Input
              type="text"
              name="maKhoaHoc"
              value={maKhoaHoc}
              disabled={!isEditing ? true : false}
              onChange={this.handleInputChange}
              onBlur={() => this.validateInputLength(maKhoaHoc, 50, "idError")}
              invalid={this.state.idError === "" ? false : true}
            />
            <FormFeedback invalid="true">{this.state.idError}</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label>Course name: </Label>
            <Input
              type="text"
              name="tenKhoaHoc"
              value={tenKhoaHoc}
              disabled={!isEditing ? true : false}
              onChange={this.handleInputChange}
              onBlur={() =>
                this.validateInputLength(tenKhoaHoc, 150, "courseNameError")
              }
              invalid={this.state.courseNameError === "" ? false : true}
            />
            <FormFeedback invalid="true">
              {this.state.courseNameError}
            </FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label>Alt. Name: </Label>
            <Input
              type="text"
              name="biDanh"
              value={biDanh}
              onChange={this.handleInputChange}
              onBlur={() =>
                this.validateInputLength(biDanh, 150, "altNameError")
              }
              invalid={this.state.altNameError === "" ? false : true}
              disabled={!isEditing ? true : false}
            />
            <FormFeedback invalid="true">
              {this.state.altNameError}
            </FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label>Category ID: </Label>
            <Input
              // value={!isEditing ? maDanhMucKhoaHoc : ""}
              type="select"
              name="maDanhMucKhoaHoc"
              placeholder="Select an ID"
              onChange={this.handleInputChange}
              disabled={!isEditing ? true : false}
            >
              <option value="" disabled selected>
                {!isEditing ? maDanhMucKhoaHoc : "Select a category code"}
              </option>
              {categoryOptions}
            </Input>
          </FormGroup>
          <FormGroup>
            <Label>Creator ID: </Label>
            <Input
              value={isAdding ? currentAdminAccount : taiKhoanNguoiTao}
              type="text"
              name="taiKhoanNguoiTao"
              //value={this.state.taiKhoanNguoiTao}
              onChange={this.handleInputChange}
              disabled
            />
          </FormGroup>
          <FormGroup>
            <Label>Date Created: </Label>
            <Input
              type="text"
              name="ngayTao"
              value={ngayTao}
              onChange={this.handleInputChange}
              onBlur={() => this.validateInputLength(ngayTao, 10, "dateError")}
              disabled={!isEditing ? true : false}
              invalid={this.state.dateError === "" ? false : true}
            />
            <FormFeedback invalid="true">{this.state.dateError}</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label>Description:</Label>
            <Input
              type="textarea"
              name="moTa"
              value={moTa}
              style={{ minHeight: 90 }}
              onChange={this.handleInputChange}
              onBlur={() => this.validateInputLength(moTa, 1000, "desError")}
              invalid={this.state.desError === "" ? false : true}
              disabled={!isEditing ? true : false}
            />
            <FormFeedback invalid="true">{this.state.desError}</FormFeedback>
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
