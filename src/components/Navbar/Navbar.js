import React from 'react'
import style from './Navbar.module.css'


function Navbar(props) {
    return (
        <div className={`${style.navbar}`}>
            <div className={`${style.navbarContainer}`}></div>
        </div>
    )
}



export default Navbar
