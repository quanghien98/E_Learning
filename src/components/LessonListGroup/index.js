import React, { Component } from "react";

import { ListGroup, ListGroupItem } from "reactstrap";

class LessonListGroup extends Component {
  /* handleCollapseOnClick = () => {
    const collapsed = !this.state.collapsed;
    this.setState({ collapsed });
  }; */

  // getCurrentLesson = clickedLesson => {
  //   console.log(clickedLesson);

  //   this.setState({
  //     currentLesson: clickedLesson
  //   });
  // };

  render() {
    return (
      <div className="courseSyllabus__sidebar__syllabus">
        <ListGroup className="syllabusContent">
          {this.props.lessons.map((lesson, idx) => (
            <ListGroupItem
              className="listContentItem"
              // disabled={lesson.lessonNumber > 2}
              style={{ cursor: "pointer" }}
              action
              active={lesson.lessonNumber === this.props.currentLessonNum}
              key={idx}
              onClick={() =>
                this.props.setCurrentLessonNum(lesson.lessonNumber)
              }
            >
              <span>Lesson {lesson.lessonNumber}:</span>{" "}
              <span>{lesson.title}</span>
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
export default LessonListGroup;
