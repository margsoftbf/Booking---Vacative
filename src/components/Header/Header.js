import React from 'react'
import style from './Header.module.css'
import {
    faUserGroup,
    faCalendarDays,
    faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
                <div className={`${style.headerSearch}`}>
                    <div className={`${style.headerSearchItem}`}>
                        <FontAwesomeIcon className={`${style.searchIcon}`} icon={faMagnifyingGlass} /> <input type='text' placeholder='Where are you going?' className={`${style.headerSearchbar}`}></input>
                    </div>
                    <div className={`${style.headerSearchItem}`}>
                        <FontAwesomeIcon className={`${style.searchIcon}`} icon={faCalendarDays} /> <span className={`${style.headerSearchText}`}>Date to date</span></div>
                    <div className={`${style.headerSearchItem}`}>
                        <FontAwesomeIcon className={`${style.searchIcon}`} icon={faUserGroup} />
                        <span className={`${style.headerSearchText}`}>2 adults 2 children 1 room</span></div>
                    <div className={`${style.headerSearchItem}`}>
                        <button className={`${style.headerSearchBtn}`}>Search</button></div>
                </div>
            </div>
        </div>
    )
}



export default Header
