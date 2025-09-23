import React, { useState, memo } from 'react';
import TaskItem from './TaskItem.jsx';

function TaskList({ tasks, toggleTask, deleteTask }) {
    const [filter, setFilter] = useState('all');

    const filteredTasks = tasks.filter((task) => {
        if (filter === 'all') return true;
        if (filter === 'active') return !task.completed;
        if (filter === 'completed') return task.completed;
        return true;
    });

    const totalTasks = tasks.length;
    const completedTasks = tasks.filter((task) => task.completed).length;

    return (
        <div>
            <div>
                <button onClick={() => setFilter("all")}>Все</button>
                <button onClick={() => setFilter("active")}>Активные</button>
                <button onClick={() => setFilter("completed")}>Выполненные</button>
            </div>

            <div>
                <p>Всего задач: {totalTasks}</p>
                <p>Выполнено: {completedTasks}</p>
            </div>

            <div>
                {filteredTasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        toggleTask={toggleTask}
                        deleteTask={deleteTask}
                    />
                ))}
            </div>
        </div>
    );
}

export default memo(TaskList);