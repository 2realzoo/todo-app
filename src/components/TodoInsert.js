import React, { useState } from "react";
import { useSelector } from "react-redux";
import './TodoInsert.css';

const TodoInsert = ({ todos }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const handleTypeTitle = e => {
        setTitle(e.target.value);
    }
    const handleTypeContent = e => {
        setContent(e.target.value);
    }

    const { dateReducer } = useSelector(state => state);
    const { fullDate, year, month, date, day } = dateReducer;
    const handleSubmit = e => {
        fetch(`http://localhost:3001/todos`, {
            method: 'POST',
            body: JSON.stringify({
                id: todos[todos.length - 1].id + 1,
                date: {
                    fullDate,
                    year,
                    month,
                    date,
                    day},
                title,
                content,
                isDone: false
                }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }, 
        })
    }
    return (
        <div>
            <form className="form-wrapper" onSubmit={handleSubmit}>
                <div className="input-wrapper">
                    <div className="title-input-wrapper">
                        <label>해야 할 일</label>
                        <input onChange={handleTypeTitle} type="text"></input>
                    </div>
                    <div className="content-input-wrapper">
                        <label>메모</label>
                        <input onChange={handleTypeContent} type="text"></input>
                    </div>
                </div>            
                <input className="submit-btn" type="submit" value="완료" onSubmit={handleSubmit}></input>
            </form>
            
        </div>
    )
}

export default TodoInsert;