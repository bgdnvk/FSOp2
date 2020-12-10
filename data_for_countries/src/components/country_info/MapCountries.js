import React from "react"
import ButtonShowCountry from "./ButtonShowCountry"

const MapCountries = ({countries}) => {
    return(
        <div>
            {countries.map(country => {
                return <div key={country.numericCode}> {country.name}
                <ButtonShowCountry country={country}></ButtonShowCountry>
                </div>
            } )}
        </div>
    )
}

export default MapCountries