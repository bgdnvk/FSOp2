import React from "react"



const ButtonShowCountry = ({country, showCountry}) => {
    const handleClick = (e) => {
        console.log("clicked");
        console.log(country);
        e.preventDefault();
        showCountry(country.name)
    }

    return(
            <button onClick={handleClick}>show</button>
    )

}

export default ButtonShowCountry