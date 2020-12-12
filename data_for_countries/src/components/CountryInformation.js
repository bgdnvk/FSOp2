import React from "react"
import SingleCountryInfo from "./SingleCountryInfo"
import MapCountries from "./country_info/MapCountries"
import FetchWeatherData from "./FetchWeatherData"


const CountryInformation = ({countries, showCountry, uniqueCountry}) => {
    

    if(countries.length === 1) {
        let country = countries[0]
        
        return (
            <div>
                <SingleCountryInfo country={country}></SingleCountryInfo>
                <FetchWeatherData uniqueCountry={uniqueCountry}></FetchWeatherData>
            </div>
        )
     } 
    else if(countries.length <= 10 && countries.length > 1){
        return(
            <div>
                <MapCountries countries={countries} showCountry={showCountry}></MapCountries>
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