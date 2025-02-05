import { useState } from "react";

// set todo 
type Todo = {
    id: number;
    checked: boolean;
    name: string;
}

const useTodo = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [tempTodo, setTempTodo] = useState<Todo[]>([]);

    const addTask = (userInput: string) => {
        if(userInput.trim() === '')return;
        setTodos([...todos, {id: Date.now(), checked: false, name: userInput}]);
    }

    const deleteCompleteTask = () => {
        setTodos(todos.filter((task) => task.checked === false))
        setTempTodo(tempTodo.filter((task) => task.checked === false))
    }

    const deleteTask = (id: number) => {
        setTodos(todos.filter((task) => task.id !== id));
    }

    const toggleCheck = (id: number) => {
        let newList = [...todos];
        let toggle= newList.find(t => t.id === id) as Todo;
        if(toggle.checked === true){
            toggle.checked = false;
        }else{
            toggle.checked = true;
        };
        setTodos(newList);
    }

    const showUnComplete = () => {
        setTempTodo([...todos]);
        setTodos(todos.filter((task) => task.checked === false));
    };

    const showComplete = () => {
        setTempTodo([...todos]);
        setTodos(todos.filter((task) => task.checked === true));
    }

    const showAll = () => {
        console.log(tempTodo)
        if(tempTodo.length === 0){
            return;
        }
        setTodos([...tempTodo]);
    }

    return{
        todos,
        addTask,
        deleteTask,
        toggleCheck,
        deleteCompleteTask,
        showUnComplete,
        showComplete,
        showAll
    };
};

export default useTodo;
