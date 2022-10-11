import React from 'react'
import style from './List.module.css'
import Navbar from '../../components/Navbar/Navbar';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';


function List(props) {
  const location = useLocation()
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options)


  return (
    <div>
      <Navbar />
      <div className={`${style.container}`}>
        <div className={`${style.wrapper}`}>
          <div className={`${style.listSearch}`}>
            <h1 className={`${style.listSearchTitle}`}>Search</h1>
            <div className={`${style.listSearchItem}`}>
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className={`${style.listSearchItem}`}>
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                  className={`${style.dateRange}`}
                />
              )}
            </div>
            <div className={`${style.listOptions}`}>
              <label>Options</label>
              <div className={`${style.listsOptionItem}`}>
                <span className={`${style.listOption}`}>Min price <small>per night</small></span>
                <input type="number" className={`${style.listOptionInput}`} />
              </div>
              <div className={`${style.listsOptionItem}`}>
                <span className={`${style.listOption}`}>Max price <small>per night</small></span>
                <input type="number" className={`${style.listOptionInput}`} />
              </div>
              <div className={`${style.listsOptionItem}`}>
                <span className={`${style.listOption}`}>Adult</span>
                <input min={1} type="number" className={`${style.listOptionInput}`} placeholder={options.adult} />
              </div>
              <div className={`${style.listsOptionItem}`}>
                <span className={`${style.listOption}`}>Children </span>
                <input min={0} type="number" className={`${style.listOptionInput}`} placeholder={options.children} />
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className={`${style.listResult}`}></div>
        </div>
      </div>
    </div>
  )
}



export default List
