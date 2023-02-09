import React from "react";
import { useSelector } from "react-redux";
import { dateFilter } from "./filters";
import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
    const { dateReducer } = useSelector(state => state);
    todos = dateFilter(todos , dateReducer)
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