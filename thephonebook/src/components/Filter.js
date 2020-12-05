import React from "react"

const Filter = ({filterName, filterNames}) => {
    return(
        <form>
        <div>
          filter shown with: <input value={filterName}
          onChange={filterNames}></input>
        </div>
      </form>
    )
}

export default Filter