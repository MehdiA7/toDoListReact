import { FC, useState } from "react";
// define type of list
type TodoFormProps = {
    onAddTodo:(todo: string) => void;
};

// component for the form we have the input and the add button to submit a new task
const TodoForm: FC<TodoFormProps> = ({onAddTodo}) => {
    const [userInput, setUserInput] = useState("");

    // set the useState
    const updateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(event.target.value);
    }

    // submit the input with Enter
    const submitEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === "Enter"){
            onAddTodo(userInput);
            setUserInput("");
        }
    }

    // submit with button
    const submitClick = () => {
        onAddTodo(userInput);
        setUserInput("");
    }

    // return an input with a button to submit the task
    return (
        <>
            <input type="text" value={userInput} onChange={updateInput} onKeyDown={submitEnter} />
            <button onClick={submitClick} style={{marginLeft: 15}}>Add</button>
        </>
    );
}

export default TodoForm;