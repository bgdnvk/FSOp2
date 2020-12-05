import React from "react"
import Person from "./Person"
const Persons = ({displayPeople}) => {
    return(
        <div>
        {displayPeople.map(
            (person) => <Person key={person.id} person={person}
            ></Person>
          )}
       </div>
    )
}
export default Persons