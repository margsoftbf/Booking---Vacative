import React from 'react'
import style from './MailList.module.css'

export const MailList = () => {
    return (
        <div className={`${style.container}`}>
            <div className={`${style.mailContainer}`}>
                <h1 className={`${style.mailTitle}`}>Newsletter</h1>
                <span className={`${style.mailDesc}`}>Sign up for Newsletter</span>
                <div className={`${style.mailInputContainer}`}>
                    <input type="text" placeholder='Your Email' />
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
    )
}
