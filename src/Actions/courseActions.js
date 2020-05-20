import dispatcher from "../appDispatcher";
import * as courseApi from "../api/courseApi";
import actionType from "./actionTypes";

export function saveCourse(course) {
  return courseApi.saveCourse(course).then((savedCourse) => {
    // Hey dispatcher, go telll all the stores that a course was just created.
    dispatcher.dispatch({
      actionType: course.id
        ? actionType.UPDATE_COURSES
        : actionType.CREATE_COURSE,
      course: savedCourse,
    });
  });
}

export function loadCourses() {
  return courseApi.getCourses().then((courses) => {
    dispatcher.dispatch({
      actionType: actionType.LOAD_COURSES,
      courses: courses,
    });
  });
}

export function deleteCourse(id) {
  return courseApi.deleteCourse(id).then(() => {
    dispatcher.dispatch({
      actionType: actionType.DELETE_COURSES,
      id: id,
    });
  });
}
