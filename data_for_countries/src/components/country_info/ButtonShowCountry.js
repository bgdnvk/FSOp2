import React from "react"
import SingleCountryInfo from "../SingleCountryInfo"



const ButtonShowCountry = ({country}) => {
    const handleClick = (e) => {
        console.log("clicked");
        console.log(country);
        e.preventDefault();
        return(
            <div>
                <SingleCountryInfo country={country}></SingleCountryInfo>
                
            {console.log("inside")}
            </div>
        )
    }

    return(
        <div>
            <button onClick={handleClick}>show</button>
            
        </div>
    )

}

export default ButtonShowCountry