import React from "react";

const TodoItem = ({ todo }) => {
    const { id, date, title, content, isDone } = todo;
    return (
        <div className="todo_item">
            <h5 className="title">{title}</h5>
            {isDone? <div className="checked">✅</div> : <div className="not-checked">🟩</div>}
            <div className="todo_text">{content}</div>
        </div>
    )
}

export default TodoItem;