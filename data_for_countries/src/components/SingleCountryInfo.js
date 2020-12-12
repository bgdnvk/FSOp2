import React from "react"
import CountryDetails from "./country_info/CountryDetails"
import CountryLanguages from "./country_info/CountryLanguages"
import Flag from "./country_info/Flag"

const SingleCountryInfo = ({country, weather}) => {
    return (
        <div>
            <CountryDetails country={country}></CountryDetails>
            <CountryLanguages languages={country.languages}></CountryLanguages>
            <Flag flag={country.flag}></Flag>

        </div>
    )
}
export default SingleCountryInfo