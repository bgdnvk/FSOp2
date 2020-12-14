import React, { useState, useEffect } from 'react'
import Filter from "./components/Filter"
import PersonForm from './components/PersonForm'
import Persons from "./components/Persons"
import axios from "axios"
import contactService from './services/contacts'

const checkName = (name, persons) => {
  return persons.find(person => name.toLowerCase() === person.name.toLowerCase())
}


// const promise = axios.get("http://localhost:3001/persons")
// promise.then( res => {
//   console.log(res.data);
// })

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterName, setFilterName ] = useState('')
  const [ displayPeople, setDisplayPeople ] = useState(persons)

  // useEffect(()=>{
  //   axios
  //     .get("http://localhost:3001/persons")
  //     .then(res => {
  //       console.log(res.data);
  //       setPersons(res.data)
  //       setDisplayPeople(res.data)
  //     })
  // }, [])
  useEffect( () => {
    contactService
      .getAll()
      .then(initialContacts => {
        console.log('getting contacts', initialContacts);
        setPersons(initialContacts)
        setDisplayPeople(initialContacts)
      })
  }, [])


  const handleNameChange = (e) => {
    console.log(newName);
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  // const handleDelete = (e) =>{
  //   e.preventDefault()
  //   console.log('clicked delete', e);
  //   console.log('this is', this);
  // }

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
      contactService
        .create(nameObj)
        .then(contact => {
          console.log('ADDING', contact);
          setPersons(persons.concat(contact))
          setNewName("")
          setNewNumber("")
          setDisplayPeople(persons.concat(contact))
        })

      // setPersons(persons.concat(nameObj))
      // setNewName("")
      // setNewNumber("")
      // setDisplayPeople(persons.concat(nameObj))
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
      <Persons displayPeople={displayPeople}
      setPersons={setPersons} setDisplayPeople={setDisplayPeople}
      persons={persons}
      ></Persons>
    </div>
  )
}

export default App