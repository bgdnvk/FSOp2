import React from "react"
const MapCountries = ({countries}) => {
    return(
        <div>
            {countries.map(country => {
                return <div key={country.numericCode}> {country.name}</div>
            } )}
        </div>
    )
}

export default MapCountries