import React from "react"
const CountryLanguages = ({languages}) => {
    return (
        <div>
            <h2>languages</h2>
            <ul>
                {languages.map(lang => <li key={lang.iso639_1}>{lang.name}</li>)}
            </ul>
        </div>
    )
}
export default CountryLanguages