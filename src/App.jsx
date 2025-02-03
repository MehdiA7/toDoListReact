import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

function App() {
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("theList")) || []);
    const [tempTodos, setTempTodos] = useState([]);
    const [inputTask, setInputTask] = useState("");

    useEffect(() => {
        const saveLocal = () => {
            localStorage.setItem("theList", JSON.stringify(todos));
            console.log(localStorage.getItem("theList"));
        };
        saveLocal();
    }, [todos]);

    const handleAddTask = () => {
        if (inputTask.trim() === "") {
            return;
        }
        setTodos([
            ...todos,
            { id: Date.now(), checked: false, nameOfTask: inputTask },
        ]);
        setInputTask("");

        console.log(todos);
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

    const handleFilter = (bool) => {
        if (bool === true) {
            if (tempTodos.length === 0) {
                setTempTodos([...todos]);
            }
            setTodos(todos.filter((todo) => todo.checked === true));
        } else if (bool === false) {
            if (tempTodos.length === 0) {
                setTempTodos([...todos]);
            }
            setTodos(todos.filter((todo) => todo.checked === false));
        } else {
            if (tempTodos.length !== 0) {
                setTodos([...tempTodos]);
                setTempTodos([]);
            }
            console.log(todos);
        }
    };

    const handleDeleteCompletedTask = () => {
        setTodos(todos.filter((todo) => todo.checked === false));
    };

    const handleClearAll = () => {
        setTodos([]);
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
                        <li key={task.id}>
                            <input
                                type="checkbox"
                                name="isComplete"
                                checked={task.checked}
                                onChange={(event) =>
                                    handleCheckBox(event, index)
                                }
                            />
                            <p>{task.nameOfTask}</p>
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
            <button onClick={handleFilter}>Show All</button>
            <button onClick={() => handleFilter(false)}>Uncompleted</button>
            <button onClick={() => handleFilter(true)}>Complete</button>
            <button onClick={handleDeleteCompletedTask} className="liButton">
                Delete Completed
            </button>
            <button onClick={handleClearAll} className="liButton">
                Clear All
            </button>
        </div>
    );
}

export default App;
