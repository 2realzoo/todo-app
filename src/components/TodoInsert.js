import React, { useState } from "react";
import { useSelector } from "react-redux";

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
        e.preventDefault();
        fetch(`http://localhost:3001/todos`, {
            method: 'POST',
            body: JSON.stringify({
                id: todos.length + 2,
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
            <form onSubmit={handleSubmit}>
                <>
                    <label>해야 할 일</label>
                    <input onChange={handleTypeTitle} type="text"></input>
                </>
                <>
                    <label>메모</label>
                    <input onChange={handleTypeContent} type="text"></input>
                </>
                <input type="submit" value="완료" onSubmit={handleSubmit}></input>
            </form>
            
        </div>
    )
}

export default TodoInsert;