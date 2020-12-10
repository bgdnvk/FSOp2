import React from "react"
import CountryDetails from "./country_info/CountryDetails"
import CountryLanguages from "./country_info/CountryLanguages"
import Flag from "./country_info/Flag"
import MapCountries from "./country_info/MapCountries"


const CountryInformation = ({countries}) => {

    if(countries.length === 1) {
        let country = countries[0]
        return (
            <div>
                <CountryDetails country={country}></CountryDetails>
                <CountryLanguages languages={country.languages}></CountryLanguages>
                <Flag flag={country.flag}></Flag>
    
            </div>
        )
     } 
    else if(countries.length <= 10 && countries.length > 1){
        return(
            <div>
                <MapCountries countries={countries}></MapCountries>
            </div>
        )
    }
    else {
        return (
            <div>Too many matches, specify another filter</div>
            )
    }
}

export default CountryInformation