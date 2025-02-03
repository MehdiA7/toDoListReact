import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, onCheck, onDelete }) {
    return (
        <ul>
            {todos.map((task, index) => (
                <TodoItem
                    key={index}
                    task={task}
                    index={index}
                    onCheck={onCheck}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
}

export default TodoList;
