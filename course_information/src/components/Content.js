import React from "react"
import Part from "./content/Part"
const Content = (props) => {
    const allParts = props.parts;
    console.log("ALL PARTS", allParts);
    const course = props
    console.log("course is",course);
  
  
  return(
    <div>
        {allParts.map(
          
          (part) => <Part key={part.id} name={part.name} exercises={part.exercises}></Part>
        )}
    </div>
  )
  }

  export default Content