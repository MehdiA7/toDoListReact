import React, { useState } from "react";

function TodoForm({ onAddTask }) {
    const [inputTask, setInputTask] = useState("");

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            onAddTask(inputTask);
            setInputTask("");
        }
    };

    const handleAddTask = () => {
        onAddTask(inputTask);
        setInputTask("");
    };

    return (
        <div>
            <input
                value={inputTask}
                type="text"
                onChange={(event) => setInputTask(event.target.value)}
                onKeyDown={handleKeyDown}
            />
            <br />
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
}

export default TodoForm;
