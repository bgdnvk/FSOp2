import React from "react"

const FindCountryForm = ({country, handleChange}) => {
    return(
        <form>
            <div>
                find countries: <input value={country} onChange={handleChange}></input>
            </div>
        </form>
    )
}
export default FindCountryForm