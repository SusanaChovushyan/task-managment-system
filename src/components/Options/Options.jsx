import React from 'react';

function Options({options, label = '', selectedOption, onChange }) {
    return(
        <>
        <label htmlFor={label}>{label}</label>
        <select
            value={selectedOption} 
            id={label}
            onChange={onChange}>
            { options.map(option => <option value={option}>{option}</option>) }
        </select>
        </> 
    )
}
export default Options