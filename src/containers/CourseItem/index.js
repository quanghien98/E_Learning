import React, { Component } from 'react'

export default class CourseItem extends Component {
  render() {
    return (
      <div>
        {this.props.course.tenKhoaHoc}
      </div>
    )
  }
}

