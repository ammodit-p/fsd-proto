import React, {useState} from 'react'

export const Input = ({value, onChange=undefined, onBlur=undefined, label}) => {
    const [inputValue, setValue] = useState(value)

    const handleChange = (e) => {
        
        setValue(e.target.value)
        onChange(e)
    }

    return (
        <label style={{
            width: 'fit-content',
            display: 'flex',
            flexDirection: 'column',
            gap: 5,
            alignItems: 'start'
        }}>
            {label}
        <input value={inputValue} onChange={handleChange} onBlur={onBlur} style={{width: 200, height: 40}} ></input>
        </label>
    )
}