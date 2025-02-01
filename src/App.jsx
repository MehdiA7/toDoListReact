import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const [todos, setTodos] = useState([]);
    const [inputTask, setInputTask] = useState("");

    const handleAddTask = () => {
        if (inputTask.trim() === "") {
            return;
        }
        setTodos([...todos, { checked: false, nameOfTask: inputTask }]);
        setInputTask("");

        console.log(todos)
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleAddTask();
        }
    };

    const handleCheckBox = (event, index) => {
        let newList = [...todos];
        newList[index].checked = event.target.checked;
        setTodos(newList);
    };

    const handleDeleteTask = (taskToDelete) => {
        setTodos(todos.filter((task) => task !== taskToDelete));
    };

    return (
        <div>
            <h1>My To-Do List</h1>
            <input
                value={inputTask}
                type="text"
                onChange={(event) => setInputTask(event.target.value)}
                onKeyDown={handleKeyDown}
            />
            <br />
            <button onClick={handleAddTask}>Add Task</button>
            <h2>To-Do</h2>
            <ul>
                {todos.map((task, index) => {
                    return (
                        <li key={index}>
                            <input
                                type="checkbox"
                                name="isComplete"
                                onChange={(event) =>
                                    handleCheckBox(event, index)
                                }
                            />
                            <p>{task.nameOfTask}</p>
                            <button
                                className="liButton"
                                onClick={() => setTodos(todos.filter((element) => element !== task))}
                            >
                                Delete
                            </button>
                        </li>
                    );
                })}
            </ul>
            <button onClick={() => setTodos(todos.filter(todo => todo.checked === false))}>Uncompleted</button>
            <button onClick={() => setTodos(todos.filter(todo => todo.checked === true))}>Complete</button>
            <button className="liButton">Delete Completed</button>
            <button className="liButton">Clear All</button>
        </div>
    );
}

export default App;
