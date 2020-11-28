import React from "react"
import Part from "./content/Part"
const Content = (props) => {
    const allParts = props.parts;
    console.log(allParts);
    const course = props
    console.log("course is",course);
  
  
  return(
    <div>
   
        <Part 
        name={allParts[0].name}
        exercises={allParts[0].exercises}
        >
        </Part>
        <Part 
        name={allParts[1].name}
        exercises={allParts[1].exercises}
        >
        </Part>
        <Part 
        name={allParts[2].name}
        exercises={allParts[2].exercises}
        >
        </Part>
  
    </div>
  )
  }

  export default Content