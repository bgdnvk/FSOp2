import React from "react"
import Course from "./Course"
const Courses = ({courses}) => {
    console.log("courses are",courses);
    return (
        <div>
        {courses.map(
            (course) => {
                console.log(course)
                console.log(course.name)

                return (
                    <Course key={course.id} course={course}></Course>
                )
            }
        )}


        </div>
      )
}

export default Courses