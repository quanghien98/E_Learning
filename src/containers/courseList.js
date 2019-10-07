import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCourse } from "../actions/coursesAction"
import CourseItem from './CourseItem'
class CoursesList extends Component {



    componentDidMount() {
        this.props.getCourse()

    }


    render() {
        const { courses } = this.props
        const elmCourse = courses.map((course, index) => {
            return <CourseItem key={index} course={course} />
        })
        return (
            <div>
                <h2>POPULAR COURSES</h2>
                {elmCourse}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCourse: () => {
            dispatch(getCourse())
        }
    }
}

const mapStateToProps = (state) => {
    return {
        courses: state.courses
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesList)