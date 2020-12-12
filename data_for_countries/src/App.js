import axios from "axios"
import FindCountryForm from "./components/FindCountryForm";
import CountryInformation from './components/CountryInformation'
import React, { useState, useEffect } from 'react'


function App() {
  const [countries, setCountries] = useState([])
  const [newCountry, setNewCountry] = useState('')
  const [displayCountries, setDisplayCountries] = useState([])
  const [uniqueCountry, setUniqueCountry] = useState('')

  const getCountryDataHook = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(res => {
        // console.log("data from promise", res.data);
        setCountries(res.data)
        setDisplayCountries(res.data)
      })

  }
  useEffect(getCountryDataHook, [])


  const getExistingCountries = (value) => {
    let newArr = [];
    for(let country of countries){
      country.name.toLowerCase().match(value.toLowerCase())
        ? newArr.push(country)
        : console.log("no match");
    }
    newArr.length >= 10
      ? setDisplayCountries([])
      : setDisplayCountries(newArr)

    if(newArr.length === 1){
      setUniqueCountry(newArr[0].name)
    }
  }

  const handleChange = (e) => {
    let value = e.target.value
    console.log(newCountry);
    setNewCountry(value)
    getExistingCountries(value)
  }


  
  return (
    <div className="App">
    <FindCountryForm
    handleChange={handleChange}
    country={newCountry}
    ></FindCountryForm>

    <CountryInformation countries={displayCountries} showCountry={getExistingCountries}
    uniqueCountry={uniqueCountry}
    ></CountryInformation>

    </div>
    
  );
}

export default App;
