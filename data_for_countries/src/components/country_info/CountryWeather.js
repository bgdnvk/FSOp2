import React from "react"
const CountryWeather = ({country, temperature, wind_degree, icon, wind_dir}) => {
    
    return(
        <div>
            <h2>Weather in {country}</h2>

            <p>
                <strong>temperature: </strong> {temperature} Celsius
            </p>

            <img src={icon} alt="flag" width='100' height='100'>
            </img>
           
            <p>
                <strong>wind:</strong> {wind_degree} direction {wind_dir}
            </p>
        
        </div>
    )
}
export default CountryWeather