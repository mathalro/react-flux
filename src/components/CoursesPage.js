import React, { useState, useEffect } from "react";
import courseStore from "../Stores/courseStores";
import CourseList from "./CourseList.js";
import { Link } from "react-router-dom";
import { loadCourses, deleteCourse } from "../Actions/courseActions";

function CoursesPage() {
  const [courses, setCourses] = useState(courseStore.getCourses());

  useEffect(() => {
    courseStore.addchangeListener(onChange);
    if (courseStore.getCourses().length === 0) loadCourses();
    return () => {
      courseStore.removeChangeListener(onChange);
    };
  }, []);

  function onChange() {
    setCourses(courseStore.getCourses());
  }

  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-primary" to="/course">
        ADD
      </Link>
      <CourseList courses={courses} deleteCourse={deleteCourse} />
    </>
  );
}

export default CoursesPage;
