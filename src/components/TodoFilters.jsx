import React from "react";

function TodoFilters({
    onFilterUncompleted,
    onFilterCompleted,
    onDeleteCompleted,
    onClearAll,
}) {
    return (
        <div>
            <button onClick={onFilterUncompleted}>Uncompleted</button>
            <button onClick={onFilterCompleted}>Completed</button>
            <button className="liButton" onClick={onDeleteCompleted}>
                Delete Completed
            </button>
            <button className="liButton" onClick={onClearAll}>
                Clear All
            </button>
        </div>
    );
}

export default TodoFilters;
