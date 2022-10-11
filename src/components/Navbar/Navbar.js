import React from 'react'
import { useMediaQuery } from "react-responsive";
import style from './Navbar.module.css'
import { Logo } from '../Logo/Logo';
import { NavLinks } from './DesktopNavLinks/NavLinks';
import { MobileNavLinks } from './MobileNavLinks/MobileNavLinks';
import { Accessibility } from './Accessibility/Accessibility';

const DeviceSize = {
    mobile: 992,
}

function Navbar() {
    const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
    return (
        <div className={`${style.navbar}`}>
            <div className={`${style.navbarContainer}`}>
                <div className={`${style.leftSection}`}>
                    <Logo />
                </div>
                <div className={`${style.middleSection}`}>
                    {!isMobile && <NavLinks />}
                </div>
                <div className={`${style.rightSection}`}>
                    {!isMobile && <Accessibility />}
                    {isMobile && <MobileNavLinks />}
                </div>
            </div>
        </div>
    )
}



export default Navbar

