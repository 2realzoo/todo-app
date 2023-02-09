import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
    return (
        <div className="todolist-wrapper">
            {todos.map(todo => 
                <TodoItem key={todo.id} todo={todo}/>
            )
            }
        </div>
    )
};

export default TodoList;