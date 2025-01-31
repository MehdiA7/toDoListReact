import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const [todos, setTodos] = useState([]);
    const [inputTask, setInputTask] = useState("");

    const handleAddTask = () => {
		setTodos([...todos, inputTask]);
		setInputTask("");
	};

    return (
        <div>
            <h1>My Todo App</h1>
            <input
				value={inputTask}
                type="text"
                onChange={(event) => setInputTask(event.target.value)}
            />
            <br />
            <button onClick={handleAddTask}>Add Task</button>
            <h2>Todos</h2>
			<ul>
            {todos.map((x) => {
                return <li key={x}><input type="checkbox" name="isComplete" />{x}<button className="liButton">Delete</button></li>;
            })}
        </ul>
        </div>
    );
}

export default App;
