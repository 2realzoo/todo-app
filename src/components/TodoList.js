import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({todos}) => {
    return (
        <div>
            {todos.map((todo) => {
                <TodoItem key={todo.id} todo={todo}></TodoItem>
            })
            }
        </div>
    )
};

export default TodoList;