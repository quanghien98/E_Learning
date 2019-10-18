import React, { Component } from 'react'
import { connect } from "react-redux";
import { getSingleCourse } from "../../actions/course/courseActions";
class SingleCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            a:'hiencute'
        }
    }
    componentDidMount() {
        this.props.getCourse();
    }
    render() {
        const {course} =this.props;

        // console.log(this.props);
        // console.log(this.state);
        return (
            <div>
                {course.tenKhoaHoc}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        course: state.course
        // Get Data From Store
    };
};
const mapDispatchToProps = dispatch => {
    return {
        getCourse: () => {
            dispatch(getSingleCourse());
            // Get Data From API And Set To Store
        }
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps)(SingleCourse);
