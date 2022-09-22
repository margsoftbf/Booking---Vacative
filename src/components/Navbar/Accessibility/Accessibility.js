import React from 'react'
import style from './Accessibility.module.css'

export function Accessibility(props) {
    return (
        <div className={`${style.container}`}>
            <button className={`${style.buttonLogin}`}>Login</button>
            <button className={`${style.buttonRegister}`}>Sign up</button>
        </div>
    )
}

