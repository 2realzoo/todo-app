import React, { useEffect, useState } from "react";
import Header from "./header";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";

const Template = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/todos')
            .then(res => res.json())
            .then(data => setTodos(data));
    },[])
    return (
        <div>
            <Header/>
            <TodoList todos={todos}/>
            <TodoInsert/>
        </div>
    )
}

export default Template;