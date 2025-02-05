import { useState } from "react";

function useTodo() {
    const [todos, setTodos] = useState([]);

    const addTask = (inputTask) => {
        if (inputTask.trim() === "") return;
        setTodos([...todos, { checked: false, nameOfTask: inputTask }]);
    };

    const toggleTask = (index) => {
        const newList = [...todos];
        newList[index].checked = !newList[index].checked;
        setTodos(newList);
    };

    const deleteTask = (taskToDelete) => {
        setTodos(todos.filter((task) => task !== taskToDelete));
    };

    const filterUncompleted = () => {
        setTodos(todos.filter((todo) => !todo.checked));
    };

    const filterCompleted = () => {
        setTodos(todos.filter((todo) => todo.checked));
    };

    const deleteCompleted = () => {
        setTodos(todos.filter((todo) => !todo.checked));
    };

    const clearAll = () => {
        setTodos([]);
    };

    return {
        todos,
        addTask,
        toggleTask,
        deleteTask,
        filterUncompleted,
        filterCompleted,
        deleteCompleted,
        clearAll,
    };
}

export default useTodo;
