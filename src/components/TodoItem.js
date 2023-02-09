import React, { useEffect, useState } from "react";
import './TodoItem.css'

const TodoItem = ({ todo }) => {
    const { id, date, title, content, isDone } = todo;
    const [activeContent, setActiveContent] = useState(false);
    const [check, setCheck] = useState(isDone);
    const handleClickCheck = () => {
        check ?
            setCheck(!check)
            : setCheck(!check)
    };
    
    useEffect(() => {
        fetch(`http://localhost:3001/todos/${id}`, {
            method: "PATCH",
            body: JSON.stringify({
                isDone: false
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
    }, [check]);

    const handleDelete = () => {

    };
    return (
        <div className="todo_item">
            <div className="todo_wrapper">
                <h5 className="title">{title}</h5>
                {check ? <div className="checked" onClick={handleClickCheck}>✅</div> : <div className="not-checked" onClick={handleClickCheck}>🟩</div>}
                <div onClick={handleDelete}>❌</div>
            </div>
            <div className={`content ${activeContent ? '' : 'hide'}`}>{content}</div>
        </div>
    )
}

export default TodoItem;