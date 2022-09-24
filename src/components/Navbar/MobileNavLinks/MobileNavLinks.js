import React, { useState } from 'react'
import style from './MobileNavLinks.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Hamburger from 'hamburger-react'

export function MobileNavLinks(props) {


    const [showMenu, setShowMenu] = useState(false)
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
                </ul>
            </div>
    }
    return (
        <nav>
            <Hamburger toggled={isOpen} toggle={setOpen} />
            <span className="text-xl">
                <FontAwesomeIcon
                    icon={faBars}
                    onClick={() => setShowMenu(!showMenu)}
                />
            </span>

            {menu}
        </nav>

    )
}


{/* <div className={`${style.navLinksContainer}`}>
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
</div> */}