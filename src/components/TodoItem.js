import React, { useEffect, useState } from "react";
import './TodoItem.css'

const TodoItem = ({ todo }) => {
    const { id, date, title, content, isDone } = todo;
    const [activeContent, setActiveContent] = useState(false);
    const handleHideContent = () => {
        setActiveContent(!activeContent);
    }

    const [check, setCheck] = useState(isDone);
    const handleClickCheck = () => {
        fetch(`http://localhost:3001/todos/${id}`, {
            method: "PATCH",
            body: JSON.stringify({
                isDone: !check
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        });
        setCheck(!check);
    };

    const handleDelete = () => {
        fetch(`http://localhost:3001/todos/${id}`, {
            method: "DELETE",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        });
        window.location.reload();
    };
    return (
        <div className="todo-item">
            <div className="todo-wrapper">
                <div className="title-wrapper" onClick={handleHideContent}>
                    <div className="pin-icon">📌</div>
                    <div className="title">{title}</div>
                </div> 
                {check ? <div className="checkbox" onClick={handleClickCheck}>✅</div> : <div className="checkbox" onClick={handleClickCheck}>🟩</div>}
                <div onClick={handleDelete}>❌</div>
            </div>
            <div className={`content ${activeContent ? '' : 'hide'}`}>{content}</div>
        </div>
    )
}

export default TodoItem;