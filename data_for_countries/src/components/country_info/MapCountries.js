import React from "react"
import ButtonShowCountry from "./ButtonShowCountry"

const MapCountries = ({countries, showCountry}) => {
    return(
        <div>
            {countries.map(country => {
                return <div key={country.numericCode}> {country.name}
                <ButtonShowCountry country={country} showCountry={showCountry}></ButtonShowCountry>
                </div>
            } )}
        </div>
    )
}

export default MapCountries