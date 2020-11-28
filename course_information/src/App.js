import React from "react"
import Course from "./components/Course"

const App = () => {

    const course = {
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10
        },
        {
          name: 'Using props to pass data',
          exercises: 7
        },
        {
          name: 'State of a component',
          exercises: 14
        }
      ]
    }
  
    console.log(course);
    console.log(course.parts);
    console.log(course.parts[0]);
  
  
  
    // return (
    //   <div>
    //     <Header name={course.name}></Header>
    //     <Content parts={course.parts}
    //     course={course}></Content>
    //     <Total parts={course.parts}></Total>
    //   </div>
    // )
    return <Course course={course} />
  }

  export default App