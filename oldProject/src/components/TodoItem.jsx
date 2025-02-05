import React from "react";

function TodoItem({ task, index, onCheck, onDelete }) {
    return (
        <li>
            <input
                type="checkbox"
                checked={task.checked}
                onChange={(event) => onCheck(event, index)}
            />
            <p>{task.nameOfTask}</p>
            <button className="liButton" onClick={() => onDelete(task)}>
                Delete
            </button>
        </li>
    );
}

export default TodoItem;
