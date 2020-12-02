import React, { useState } from 'react'
import Person from "./components/Person"

const checkName = (name, persons) => {
  return persons.find(person => name.toLowerCase() === person.name.toLowerCase())
}


const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',
      number: "12345",
      id: 1, }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')


  const handleNameChange = (e) => {
    console.log(newName);
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const addName = (e) => {
    e.preventDefault()
    console.log(e.target);

    if(checkName(newName,persons)){
      console.log("found");
      alert(`${newName} is already added to phonebook`)
      setNewName("")
    } else {
      const nameObj = {
        name: newName,
        number: newNumber,
        id: persons.length+1
      }

      setPersons(persons.concat(nameObj))
      setNewName("")
      setNewNumber("")
    }
  

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          number: <input value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit"
          >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
       {persons.map(
           (person) => <Person key={person.id} person={person}
           ></Person>
         )}
      </div>
    </div>
  )
}

export default App