import React from "react"
const Total = ({parts}) => {
    const total = parts.reduce((sum, x) => {
        return sum+x.exercises
    },0)

    return(
      <div>
          <p>Number of exercises {total}</p>
      </div>
    )
    }
export default Total