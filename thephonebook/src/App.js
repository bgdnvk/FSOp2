import React, { useState } from 'react'
import Filter from "./components/Filter"
import PersonForm from './components/PersonForm'
import Persons from "./components/Persons"

const checkName = (name, persons) => {
  return persons.find(person => name.toLowerCase() === person.name.toLowerCase())
}


const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',
      number: "12345",
      id: 1, },
      { name: 'Arto Hellas',
      id: 2,
       number: '040-123456' },
    { name: 'Ada Lovelace',
    id:3,
     number: '39-44-5323523' },
    { name: 'Dan Abramov',
    id:4,
     number: '12-43-234345' },
    { name: 'Mary Poppendieck',
    id:5,
     number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterName, setFilterName ] = useState('')
  const [ displayPeople, setDisplayPeople ] = useState(persons)


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
      setDisplayPeople(persons.concat(nameObj))
    }
  }

  const filterNames = (e) => {
    const name = e.target.value.toLowerCase();
    console.log(name);
    let newArr = []


    console.log("persons are ", persons);
    for(let person of persons){
      let [first, ...second] = person.name.toLowerCase().split(" ")
      second = second.join("")
      // console.log(first, second);
      if( first.includes(name)  || second.includes(name)){
        console.log("includes!!");
        console.log(first,second, "<- includes");
        console.log("person is", person);
        newArr.push(person)
      } else {
        console.log("doesnt");
      }
    }

    console.log("newarr is", newArr);
    console.log("SETTTING");
    setDisplayPeople(newArr)
    setFilterName(name)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterName={filterName} filterNames={filterNames}></Filter>

      <h2>Add new</h2>
      <PersonForm
      addName={addName}
      newName={newName}
      newNumber={newNumber}
      handleNameChange={handleNameChange}
      handleNumberChange={handleNumberChange}
      ></PersonForm>
      
      <h2>Numbers</h2>
      <Persons displayPeople={displayPeople}></Persons>
    </div>
  )
}

export default App