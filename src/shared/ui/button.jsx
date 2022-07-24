import React from 'react'

export const Button = ({ onClick, children}) => (
    <button
     style={{
        width: 120,
        height: 40
        }} 
    onClick={onClick}
    >
    {children}
    </button>
)