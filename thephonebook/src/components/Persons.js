import React from "react"
import Person from "./Person"
const Persons = ({displayPeople, setPersons, setDisplayPeople, persons,
    setMessage, setSuccess}) => {
    return(
        <div>
        {displayPeople.map(
            (person) => <Person key={person.id} person={person}
            setPersons={setPersons} setDisplayPeople={setDisplayPeople}
            displayPeople={displayPeople} persons={persons}
            setMessage={setMessage} setSuccess={setSuccess}
            ></Person>
          )}
       </div>
    )
}
export default Persons