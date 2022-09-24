import React, { useState } from 'react'
import style from './MobileNavLinks.module.css'
import Hamburger from 'hamburger-react'
import { Accessibility } from '../Accessibility/Accessibility'

export function MobileNavLinks(props) {


    const [isOpen, setOpen] = useState(false)
    let menu

    if (isOpen) {

        menu =
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
                <Accessibility />
                </ul>
            </div>
    }
    return (
        <>
            <Hamburger toggled={isOpen} toggle={setOpen} />
            {menu}

        </>

    )
}


