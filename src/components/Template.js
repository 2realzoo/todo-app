import React from "react";
import Header from "./header";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";
import { useState } from 'react';

const Template = () => {
    const weekday = ['일','월','화','수','목','금','토']
    const today = {
        fullDate: new Date(),
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
        date: new Date().getDate(),
        day: weekday[new Date().getDay()]
    }
    
    const [todos , setTodos] = useState({});
    const [currentDate, setCurrentDate] = useState(today);
    return (
        <div>
            <Header currentDate={currentDate} setCurrentDate={setCurrentDate}></Header>
            <TodoInsert></TodoInsert>
        </div>
    )
}

export default Template;