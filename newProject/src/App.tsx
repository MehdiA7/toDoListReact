import "./styles/App.css";
import TodoForm from "./components/TodoForm";
import useTodo from "./hooks/useTodo";
import TodoList from "./components/TodoList";
import TodoActionButton from "./components/TodoActionButton";

function App() {
    // declare useodTodo
    const {
        todos,
        addTask,
        deleteTask,
        toggleCheck,
        deleteCompleteTask,
        showUnComplete,
        showComplete,
        showAll,
    } = useTodo();

    return (
        <>
            <header>
                <h1>To do list de Mehdi</h1>
            </header>
            <main>
                {/* input and add buttton */}
                <TodoForm onAddTodo={addTask} />
                <h2>To-do</h2>
                {/* list element (li) */}
                <TodoList
                    todos={todos}
                    idDeleteTask={deleteTask}
                    idCheckbox={toggleCheck}
                />
                {/* all button after the list */}
                <TodoActionButton 
                handleDeleteComplete={deleteCompleteTask}
                handleShowUnComplete={showUnComplete}
                handleShowComplete={showComplete}
                handleShowAll={showAll}
                />
            </main>
        </>
    );
}

export default App;
