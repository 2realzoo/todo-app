import React, { createRef } from "react";
import './header.css'

const Header = ({ currentDate, setCurrentDate }) => {
    const weekday = ['일','월','화','수','목','금','토']
    const { fulldate ,year, month, date, day } = currentDate;
    function handlePreClick() {
        let prevDate = {
            fullDate: new Date(year, month, day - 1),
            year: new Date(year, month, day - 1).getFullYear(),
            month: new Date(year, month, day - 1).getMonth() + 1,
            date: new Date(year, month, day - 1).getDate(),
            day: weekday[new Date(year, month, day - 1).getDay()]
        }
        setCurrentDate(prevDate);
        console.log(prevDate.fullDate)
    } 
    function handleNextClick() {

    }
    return (
        <div className="header_wrapper">
            <button className="prev_day" onClick={handlePreClick}>&lt;</button>
            <div>{`${year}.${month}.${date} (${day})`}</div>
            <button className="next_day" onClick={handleNextClick}>&gt;</button>
        </div>
    )
}

export default Header;