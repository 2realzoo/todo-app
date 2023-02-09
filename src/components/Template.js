import React from "react";
import './Template.css'
import useFetch from "../util/useFetch.js";
import Header from "./header.js";
import TodoInsert from "./TodoInsert.js";
import TodoList from "./TodoList.js";

const Template = () => {
    const todos = useFetch('http://localhost:3001/todos')
    return (
        <div>
            <Header todos={todos} />
            <TodoInsert todos={todos} />
            <TodoList todos={todos} />
        </div>
    )
}

export default Template;