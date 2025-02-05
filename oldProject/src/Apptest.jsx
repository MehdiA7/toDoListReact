import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoFilters from "./components/TodoFilters";
import useTodo from "./hooks/useTodo";
import "./App.css";

function App() {
    const {
        todos,
        addTask,
        toggleTask,
        deleteTask,
        filterUncompleted,
        filterCompleted,
        deleteCompleted,
        clearAll,
    } = useTodo();

    return (
        <div>
            <h1>My To-Do List</h1>
            <TodoForm onAddTask={addTask} />
            <h2>To-Do</h2>
            <TodoList
                todos={todos}
                onCheck={toggleTask}
                onDelete={deleteTask}
            />
            <TodoFilters
                onFilterUncompleted={filterUncompleted}
                onFilterCompleted={filterCompleted}
                onDeleteCompleted={deleteCompleted}
                onClearAll={clearAll}
            />
        </div>
    );
}

export default App;
