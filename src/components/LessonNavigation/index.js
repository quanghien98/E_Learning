import React from "react";

import { Button } from "reactstrap";
import Icon from "@material-ui/core/Icon";

const LessonNavigation = ({
  setNextLessonNum,
  setPrevLessonNum,
  currentLessonTitle
}) => {
  return (
    <div className="courseSyllabus__sidebar__lessonNav">
      <Button onClick={() => setPrevLessonNum()}>
        <Icon>skip_previous</Icon>
      </Button>
      <div className="lessonNav__title">
        <span>{currentLessonTitle}</span>
      </div>
      <Button onClick={() => setNextLessonNum()}>
        <Icon>skip_next</Icon>
      </Button>
    </div>
  );
};

export default LessonNavigation;
