import React, { Component } from "react";
import { connect } from "react-redux";
//router-dom
import { getCourseList } from "../../actions/course/courseActions";
//tools
//components
import { Button, Card, CardBody, CardTitle, CardImg } from "reactstrap";
import Icon from "@material-ui/core/Icon";

class CourseList extends Component {
  constructor(props) {
    super(props);
    this.sliderRef = React.createRef();
    this.state = {
      viewPortWidth: 0
    };
  }

  updateViewPortWidth = () => {
    const viewPortWidth = window.innerWidth;
    console.log(viewPortWidth);
    this.setState({
      viewPortWidth
    });
  };

  scrollNext = () => {
    let width = this.state.viewPortWidth;
    if (width >= 960) {
      this.sliderRef.current.scrollBy(600, 0);
    } else {
      this.sliderRef.current.scrollBy(250, 0);
    }
    /*   this.sliderRef.current.scrollBy(800, 0);
       default:
        break; */
  };

  scrollPrev = () => {
    let width = this.state.viewPortWidth;
    if (width >= 960) {
      this.sliderRef.current.scrollBy(-600, 0);
    } else {
      this.sliderRef.current.scrollBy(-250, 0);
    }
  };
  componentDidMount() {
    this.props.getCourseList();
    window.addEventListener("resize", this.updateViewPortWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateViewPortWidth);
  }

  render() {
    // console.log(this.state.sliderWidth);
    const courseCard = this.props.courses.map(course => {
      return (
        <div className="courseListSlideshow__wrapper">
          <Card className="courseListSlideshow__slide">
            <CardBody>
              <CardImg
                className="courseListSlideshow__slide__img"
                top
                src={course.hinhAnh}
                alt="demo"
              />
              <CardTitle>{course.tenKhoaHoc}</CardTitle>
              Body
            </CardBody>
          </Card>
        </div>
      );
    });

    return (
      <div className="courseListSlideshow__container">
        <div className="courseListSlideshow__ctrlBtn__wrapperRight">
          <Button
            onClick={this.scrollNext}
            className="courseListSlideshow__ctrlBtn next"
          >
            <Icon>keyboard_arrow_right</Icon>
          </Button>
        </div>
        <div className="courseListSlideshow__ctrlBtn__wrapperLeft">
          <Button
            onClick={this.scrollPrev}
            className="courseListSlideshow__ctrlBtn prev"
          >
            <Icon>keyboard_arrow_left</Icon>
          </Button>
        </div>
        <div className="courseListSlideshow" ref={this.sliderRef}>
          {courseCard}
         
          {/* <div className="courseListSlideshow__slide">2</div>
          <div className="courseListSlideshow__slide">3</div>
          <div className="courseListSlideshow__slide">4</div>
          <div className="courseListSlideshow__slide">1</div>
          <div className="courseListSlideshow__slide">2</div>
          <div className="courseListSlideshow__slide">3</div>
          <div className="courseListSlideshow__slide">4</div>
          <div className="courseListSlideshow__slide">1</div>
          <div className="courseListSlideshow__slide">2</div>
          <div className="courseListSlideshow__slide">3</div>
          <div className="courseListSlideshow__slide">4</div> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    courses: state.courseList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCourseList: () => {
      dispatch(getCourseList());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
