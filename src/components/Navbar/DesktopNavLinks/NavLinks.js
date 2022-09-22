import React from 'react'
import style from './NavLinks.module.css'


export function NavLinks(props) {
    return (
        <div className={`${style.navLinksContainer}`}>
            <ul className={`${style.navLinksWrapper}`}>
                <li className={`${style.navLinkItem}`}>
                    <a className={`${style.navLink}`} href='#'>Stays</a>
                </li>
                <li className={`${style.navLinkItem}`}>
                    <a className={`${style.navLink}`} href='#'>Flights</a>
                </li>
                <li className={`${style.navLinkItem}`}>
                    <a className={`${style.navLink}`} href='#'>Car rentals</a>
                </li>
                <li className={`${style.navLinkItem}`}>
                    <a className={`${style.navLink}`} href='#'>Attractions</a>
                </li>
                <li className={`${style.navLinkItem}`}>
                    <a className={`${style.navLink}`} href='#'>Airport taxis</a>
                </li>
            </ul>
        </div>
    )
}




