import React from 'react'
import style from './Logo.module.css'
import logoHeader from '../../assets/logo.png'


export function Logo(props) {
    return (
        <div className={`${style.logoWrapper}`}>
            <div className={`${style.logoImg}`}>
                <img src={logoHeader} alt='world logo' />
            </div>
            <h2 className={`${style.logoText}`}>Vaca<span>tive</span></h2>
        </div>
    )
}




