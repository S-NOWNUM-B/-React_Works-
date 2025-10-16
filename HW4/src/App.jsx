import React, { useState, useEffect, useCallback } from 'react';
import TaskInput from './components/TaskInput.jsx';
import TaskList from './components/TaskList.jsx';

export default function App() {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = useCallback((text) => {
        const newTask = {
            id: Date.now(),
            text,
            completed: false,
        };
        setTasks((prevTasks) => [...prevTasks, newTask]);
    }, []);

    const toggleTask = useCallback((id) => {
        setTasks((prevTasks) => prevTasks.map((task) => task.id === id ? {...task, completed: !task.completed} : task));
    }, []);

    const deleteTask = useCallback((id) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    }, []);

    return (
        <div>
            <TaskInput addTask={addTask} />
            <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
        </div>
    );
}