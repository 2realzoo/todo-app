import React from "react";

const TodoItem = ({ todo }) => {
    const { id, date, text, checked } = todo;
    return (
        <div className="todo_item">
            {checked? <div className="checked">✅</div> : <div className="not-checked">🟩</div>}
            <div className="todo_text">{text}</div>
        </div>
    )
}

export default TodoItem;