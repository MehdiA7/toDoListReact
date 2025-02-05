import React from "react";

// set type for todos
type Todo = {
    id: number;
    checked: boolean;
    name: string;
};

// set props type
type TodoListProps = {
    todos: Todo[];
    idDeleteTask: (id: number) => void;
    idCheckbox: (id: number) => void;
};

// component
const TodoList: React.FC<TodoListProps> = ({
    todos,
    idDeleteTask,
    idCheckbox,
}) => {

    // return the list (ul) map to generate (li) per element in todos
    return (
        <ul>
            {/* if todos is empty show 'No Task' else show element in todos */}
            {todos.length === 0 ? <p>No Task</p> : todos.map((todo) => (
                <li key={todo.id}>
                    <input
                        type="checkbox"
                        name=""
                        id=""
                        onChange={() => idCheckbox(todo.id)}
                        checked={todo.checked}
                    />
                    {todo.name}
                    <button
                        className="deleteButton"
                        onClick={() => idDeleteTask(todo.id)}
                    >
                        X
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
