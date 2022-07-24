import React, {useState} from 'react'

export const Input = ({value, onChange=undefined, onBlur=undefined, label}) => {
    const [inputValue, setValue] = useState(value)

    const handleChange = (e) => {
        setValue(e.target.value)
        onChange(value)
    }

    return (
        <label style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 5
        }}>
            {label}
        <input value={inputValue} onChange={handleChange} onBlur={onBlur} style={{width: 200, height: 40}} ></input>
        </label>
    )
}