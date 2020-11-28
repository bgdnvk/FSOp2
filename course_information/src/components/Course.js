import React from "react"
import Header from "./Header"
import Content from "./Content"
import Total from "./Total"
const Course = ({course}) => {
    console.log("course from COURSE IS ",course);
    console.log("NAME IS ",course.name);

    return (
        <div>
          <Header name={course.name}></Header>
          <Content parts={course.parts}
          course={course}></Content>
          <Total parts={course.parts}></Total>

        </div>
      )
}

export default Course