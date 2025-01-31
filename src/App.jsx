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
        setTodos([...todos, {state: false, nameOfTask: inputTask}]);
        setInputTask("");
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleAddTask();
        }
    };

    const handleCheckBox = (event, task) => {
        console.log(task)
        task.state = event.target.checked;
        console.log(event)
        // Je me suis arrêter ici je dois validé le changement dans la liste 
    }

    const handleDeleteTask = (taskToDelete) => {
        setTodos(todos.filter((task) => task !== taskToDelete));
    };

    return (
        <div>
            <h1>My Todo App</h1>
            <input
                value={inputTask}
                type="text"
                onChange={(event) => setInputTask(event.target.value)}
                onKeyDown={handleKeyDown}
            />
            <br />
            <button onClick={handleAddTask}>Add Task</button>
            <h2>Todos</h2>
            <ul>
                {todos.map((task, index) => {
                    return (
                        <li key={index}>
                            <input type="checkbox" name="isComplete" onChange={(event) => handleCheckBox(event, task)} />
                            {task.nameOfTask}
                            <button
                                className="liButton"
                                onClick={() => handleDeleteTask(task)}
                            >
                                Delete
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default App;
