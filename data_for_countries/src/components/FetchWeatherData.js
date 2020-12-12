import React, { useState, useEffect } from 'react'
import axios from "axios"
import CountryWeather from './country_info/CountryWeather'


const FetchWeatherData = ({uniqueCountry}) => {

   const [weather, setWeather] = useState({})
   const [temperature, setTemperature] = useState(0)
   const [wind_dir, setWind_dir] = useState('')
   const [icon, setIcon] = useState('')
   const [wind_degree, setWind_degree] = useState(0)
   const [ isLoading, setIsLoading ] = useState(false)
   

   const getWeatherData = () => {
    console.log('GETWEATHERDATA', uniqueCountry);
    console.log(uniqueCountry);
    // let query = 'New%20York'
    setIsLoading(true)
    axios
    .get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHER_KEY}&query=${uniqueCountry}`)
    .then(res => {
        let data = res.data.current
     console.log("weather data", res.data);
     console.log("weather data", res.data.current.temperature);

     setWeather(res.data)
     setTemperature(data.temperature)
     setWind_degree(data.wind_degree)
     setWind_dir(data.wind_dir)
     setIcon(data.weather_icons[0])
    
        setIsLoading(false)
    })

    // document.title = weather.current.temperature

  }
  useEffect(getWeatherData, [])

    return isLoading? <div>LOADING</div>: <CountryWeather country={uniqueCountry} temperature={temperature}
    wind_degree={wind_degree} wind_dir={wind_dir} icon={icon}
    ></CountryWeather>
}
export default FetchWeatherData