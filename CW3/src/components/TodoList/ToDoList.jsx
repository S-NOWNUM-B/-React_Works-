import { useState, useEffect } from "react";
import './ToDoList.css';

const ToDoList = () => {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        if (tasks.length > 10) {
            alert('У вас более 10 задач для выполнения');
        }
    }, [tasks]);

    const addTask = () => {
        if (inputValue.trim() !== "") {
            const newTask = {
                id: Date.now(),
                text: inputValue.trim(),
                completed: false
            };
            setTasks([...tasks, newTask]);
            setInputValue("");
        }
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const toggleTask = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? {...task, completed: !task.completed} : task
        ));
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            addTask();
        }
    };

    return (
        <div className="todo-container">
            <h1>ToDo List</h1>

            <div className="input-section">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Введите новую задачу..."
                    className="task-input"
                />
                <button onClick={addTask} className="add-button">Добавить задачу</button>
            </div>

            <div className="tasks-count">
                Всего задач: {tasks.length}
            </div>

            <ul className="tasks-list">
                {tasks.map((task) => (
                    <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
                        <span
                            onClick={() => toggleTask(task.id)}
                            className="task-text"
                        >
                            {task.text}
                        </span>
                        <button
                            onClick={() => deleteTask(task.id)}
                            className="delete-button"
                        >
                            Удалить
                        </button>
                    </li>
                ))}
            </ul>

            {tasks.length === 0 && (
                <p className="empty-state">Нет задачю Добавьте первую задачу!</p>
            )}
        </div>
    );
};

export default ToDoList;