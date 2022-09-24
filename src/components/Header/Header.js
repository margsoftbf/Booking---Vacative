import React from 'react'
import style from './Header.module.css'

function Header(props) {
    return (
        <div className={`${style.header}`}>
            <div className={`${style.headerContainer}`}>
                <div className={`${style.img}`}>
                    <div className={`${style.shadowImg}`}></div>
                    <div className={`${style.boxTitle}`}>
                        <h2 className={`${style.title}`}>Discover The Best Hotels & Resorts to Stay</h2>
                        <p className={`${style.description}`}>We provide a variety of the best lodging accommodations for those of you who need it.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Header
