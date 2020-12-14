import React from "react"
import contactService from '../services/contacts'


const Person = ({person, setPersons, setDisplayPeople, displaypeople, persons}) => {

    
    // console.log('inside person', persons);

    
    const handleDelete = (e) =>{
        e.preventDefault()
        console.log('clicked delete', e);
        console.log('person is', person);
        if(window.confirm('Are you sure you want to delete the user?')){
            let newArr = persons.filter( x => x !== person)
            console.log('newArr is', newArr);
            contactService
                .remove(person.id)
                .then(deletedP => {
                    console.log('deletedP is', deletedP);
                    setPersons(newArr)
                    setDisplayPeople(newArr)
                })
        }
      }

    return(
        <div>
            {person.name} {person.number}  
            <button onClick={handleDelete}>delete</button>
        </div>
        
    )
}

export default Person