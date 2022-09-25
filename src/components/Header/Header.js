import React, { useState } from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import style from './Header.module.css'
import { format } from "date-fns"
import { DateRange } from 'react-date-range';

import {
    faUserGroup,
    faCalendarDays,
    faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header(props) {
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
    })

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
    };

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
                        <FontAwesomeIcon className={`${style.searchIcon}`} icon={faCalendarDays} /> <span onClick={() => setOpenDate(!openDate)} className={`${style.headerSearchText}`}>{`${format(date[0].startDate, "MM/dd")} to ${format(
                            date[0].endDate,
                            "MM/dd"
                        )}`}</span>
                        {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className={`${style.dateRange}`}
                        />}
                    </div>
                    <div className={`${style.headerSearchItem}`}>
                        <FontAwesomeIcon className={`${style.searchIcon}`} icon={faUserGroup} />
                        <span onClick={() => setOpenOptions(!openOptions)} className={`${style.headerSearchText}`}>{`${options.adult} adult · ${options.children} children`}</span>
                        {openOptions && <div className={`${style.options}`}>
                            <div className={`${style.optionsItem}`}>
                                <div className={`${style.leftSide}`}><span className={`${style.optionText}`}>Adult</span></div>
                                <div className={`${style.rightSide}`}><button className={`${style.optionCounterButton}`} onClick={() => handleOption("adult", "d")} disabled={options.adult <= 1}>-</button>
                                    <span className={`${style.optionCountNumber}`}>{options.adult}</span>
                                    <button className={`${style.optionCounterButton}`} onClick={() => handleOption("adult", "i")}>+</button></div>

                            </div>
                            <div className={`${style.optionsItem}`}>
                                <div className={`${style.leftSide}`}><span className={`${style.optionText}`}>Children</span></div>
                                <div className={`${style.rightSide}`}>
                                    <button className={`${style.optionCounterButton}`} onClick={() => handleOption("children", "d")} disabled={options.children <= 0}>-</button>
                                    <span className={`${style.optionCountNumber}`}>{options.children}</span>
                                    <button className={`${style.optionCounterButton}`} onClick={() => handleOption("children", "i")}>+</button>
                                </div>
                            </div>
                        </div>}
                    </div>
                    <div className={`${style.headerSearchItem}`}>
                        <button className={`${style.headerSearchBtn}`}>Search</button></div>
                </div>
            </div>
        </div>
    )
}



export default Header
