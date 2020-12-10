import axios from "axios"
import FindCountryForm from "./components/FindCountryForm";
import CountryInformation from './components/CountryInformation'
import React, { useState, useEffect } from 'react'



function App() {
  const [countries, setCountries] = useState([])
  const [newCountry, setNewCountry] = useState('')
  const [displayCountries, setDisplayCountries] = useState([])

  const getDataHook = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(res => {
        console.log("data from promise", res.data);
        setCountries(res.data)

        setDisplayCountries(res.data)
      })
  }
  useEffect(getDataHook, [])

  const getExistingCountries = (value) => {
    // console.log("new country is", newCountry);
    // console.log("countries is ", countries);
    // console.log("display countries is ",displayCountries);

    // let countryToLook = [...newCountry];
    // console.log(countryToLook);
    let newArr = [];
    for(let country of countries){
      // if(country.name.toLowerCase().match(value.toLowerCase())){
      //   console.log("match!");
      //   console.log(country.name);
      //   // console.log(newCountry);
      //   newArr.push(country)
      // } else{
      //   console.log("no match");
      // }
      country.name.toLowerCase().match(value.toLowerCase())
        ? newArr.push(country)
        : console.log("no match");
    }

    // if(newArr.length >= 10){
    //   console.log("too many countries");
    //   setDisplayCountries([])
    // } else{
    //   setDisplayCountries(newArr)
    // }
    newArr.length >= 10
      ? setDisplayCountries([])
      : setDisplayCountries(newArr)

    if(newArr.length === 1){
      console.log(newArr[0]);
    }
  }

  const handleChange = (e) => {
    let value = e.target.value
    console.log(newCountry);
    setNewCountry(value)
    getExistingCountries(value)
    // console.log("newCountry",newCountry);
    // console.log("target val ", e.target.value);
    
  }
  
  return (
    <div className="App">
    <FindCountryForm
    handleChange={handleChange}
    country={newCountry}
    ></FindCountryForm>

    <CountryInformation countries={displayCountries}></CountryInformation>

    {/* <div>
      {displayCountries.map(
        country => {
          return <div key={country.numericCode}> {country.name} {country.numericCode} </div>
        }
      )}
    </div> */}

    </div>
    
  );
}

export default App;
