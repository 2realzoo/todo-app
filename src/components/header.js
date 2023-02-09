import React from "react";
import './header.css'
import { useDispatch, useSelector } from "react-redux"
import { currentDate } from "../reducers/actions";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Header = () => {
    const dispatch = useDispatch();
    const weekday = ['일', '월', '화', '수', '목', '금', '토']
    const { dateReducer } = useSelector(state => state);
    const { year, month, date, day } = dateReducer;
    
    function handlePreClick() {
        let prevDate = {
            fullDate: new Date(year, month, date - 1),
            year: new Date(year, month, (date - 1)).getFullYear(),
            month: new Date(year, month, date - 1).getMonth(),
            date: new Date(year, month, date - 1).getDate(),
            day: weekday[new Date(year, month, date - 1).getDay()]
        }
        dispatch(currentDate(prevDate));
    } 
    function handleNextClick() {
        let nextDate = {
            fullDate: new Date(year, month, date + 1),
            year: new Date(year, month, (date + 1)).getFullYear(),
            month: new Date(year, month, date + 1).getMonth(),
            date: new Date(year, month, date + 1).getDate(),
            day: weekday[new Date(year, month, date + 1).getDay()]
        }
        dispatch(currentDate(nextDate));
    }
    return (
        <div className="header_wrapper">
            <button className="prev_day" onClick={handlePreClick}><FiChevronLeft /></button>
            <div>{`${year}.${month + 1}.${date} (${day})`}</div>
            <button className="next_day" onClick={handleNextClick}><FiChevronRight /></button>
        </div>
    )
}

export default Header;