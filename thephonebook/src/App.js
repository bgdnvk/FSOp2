import React, { useState, useEffect } from 'react'
import Filter from "./components/Filter"
import PersonForm from './components/PersonForm'
import Persons from "./components/Persons"
import contactService from './services/contacts'
import Notification from './components/Notification'

const checkName = (name, persons) => {
  return persons.find(person => name.toLowerCase() === person.name.toLowerCase())
}

const checkNumber = (number, persons) => {
  return persons.find(person => number === person.number)
}


const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterName, setFilterName ] = useState('')
  const [ displayPeople, setDisplayPeople ] = useState(persons)
  const [ message, setMessage ] = useState(null)
  const [ success, setSuccess ] = useState(null)

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

  const updateNumbers = (arr) => {
    setPersons(arr)
    setDisplayPeople(arr)
    setNewName("")
    setNewNumber("")
  }

  const makeNotification = (p, msg) => {
    setMessage(`person ${p.name} has been ${msg}!`)
    setTimeout( () => {
      setMessage(null)
    }, 5000)
  }

  const addName = (e) => {
    e.preventDefault()
    console.log(e.target);
    console.log(newName);
    console.log(newNumber);

    if (checkName(newName, persons) && !checkNumber(newNumber, persons)) {
      let updateContact = persons.find( p => p.name === newName)
      let changedPerson = {...updateContact, number: newNumber}
      contactService
        .update(updateContact.id, changedPerson)
        .then( returnedPerson => {
          let newArr = persons.map(person => person.name !== newName? person: returnedPerson )
          updateNumbers(newArr)
          //added
          // console.log('inside update', returnedPerson);
          // setMessage(`person ${returnedPerson.name} has been UPDATED!`)
          setSuccess(true)
          makeNotification(returnedPerson, 'UPDATED')
        })
    } else if (checkName(newName,persons)){
      console.log("found");
      alert(`${newName} is already added to phonebook`)
      setNewName("")
    }
     else {
      const nameObj = {
        name: newName,
        number: newNumber,
        id: persons.length+1
      }
      contactService
        .create(nameObj)
        .then(contact => {
          console.log('ADDING', contact);
          let newArr = persons.concat(contact)
          updateNumbers(newArr)

          // console.log('inside update', contact);
          // setMessage(`person ${contact.name} has been ADDED!`)
          setSuccess(true)
          makeNotification(contact, 'ADDED')
        })
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
      <Notification message={message}
      success={success}></Notification>
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
      persons={persons} setMessage={setMessage} setSuccess={setSuccess}
      ></Persons>
    </div>
  )
}

export default App