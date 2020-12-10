import React from "react"
import SingleCountryInfo from "./SingleCountryInfo"
import MapCountries from "./country_info/MapCountries"


const CountryInformation = ({countries}) => {

    if(countries.length === 1) {
        let country = countries[0]
        return (
            <div>
                <SingleCountryInfo country={country}></SingleCountryInfo>
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