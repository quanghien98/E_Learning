import React, { Component } from "react";

import { lessons } from "../../variables/lessons";

import LessonListGroup from "../../components/LessonListGroup";
import LessonNavigation from "../../components/LessonNavigation";

class CourseSyllabus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lessons,
      currentLessonNum: 1
    };
  }
  setCurrentLessonNum = clickedLesson => {
    this.setState({
      currentLessonNum: clickedLesson
    });
  };
  setPrevLessonNum = () => {
    const prevLessonNum = this.state.currentLessonNum - 1;
    if (prevLessonNum > 0) {
      this.setState({
        currentLessonNum: prevLessonNum
      });
    }
  };

  setNextLessonNum = () => {
    const nextLessonNum = this.state.currentLessonNum + 1;
    if (nextLessonNum <= this.state.lessons.length) {
      this.setState({
        currentLessonNum: nextLessonNum
      });
    }
  };

  showCurrentLessonTitle = () => {
    const title = this.state.lessons.filter(lesson => {
      if (lesson.lessonNumber === this.state.currentLessonNum) {
        return lesson.title;
      }
      return null;
    });
    return title[0].title;
  };
  showCurrentLessonVideo = () => {
    const link = this.state.lessons.filter(lesson => {
      if (lesson.lessonNumber === this.state.currentLessonNum) {
        return lesson.link;
      }
      return null;
    });
    return link[0].link;
  };

  componentDidMount() {}
  render() {
    const currentVideo = this.showCurrentLessonVideo();
    console.log(currentVideo);

    return (
      <>
        <div className="courseSyllabus">
          <aside className="courseSyllabus__sidebar">
            <div className="courseSyllabus__sidebar__header">
              <h5>COURSE CONTENT</h5>
            </div>
            <div className="courseSyllabus__sidebar__syllabus">
              <LessonNavigation
                currentLessonTitle={this.showCurrentLessonTitle()}
                setNextLessonNum={this.setNextLessonNum}
                setPrevLessonNum={this.setPrevLessonNum}
              />
              <LessonListGroup
                lessons={this.state.lessons}
                setCurrentLessonNum={this.setCurrentLessonNum}
                currentLessonNum={this.state.currentLessonNum}
              />
            </div>
          </aside>
          <div className="courseSyllabus__main">
            <div className="courseSyllabus__main__video">
              <iframe
                width="700"
                height="394"
                title="demo"
                src={currentVideo}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CourseSyllabus;
