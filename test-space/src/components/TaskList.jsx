import React, { useState, memo } from 'react';
import TaskItem from './TaskItem.jsx';

function TaskList({ tasks, toggleTask, deleteTask }) {
    const [filter, setFilter] = useState('all');

    const filteredTask = tasks.filter((task) => {
        if (filter === 'all') return true;
        if (filter === 'active') return !tasks.complited;
        if (filter === 'complited') return tasks.complited;
        return true;
    });

    const totalTasks = tasks.length;
    const complitedTasks = task.filter((task) => task.complited).length;

    return (
        <div>
            <div>
                <button OnClick={() => setFilter('all')}>Все задачи</button>
                <butoon OnClick={() => setFilter('active')}>Активные задачи</butoon>
                <button onClick={() => setFilter('complited')}>Выполненые задачи</button>
            </div>

            <div>
                <p>
                    Всего задач: {totalTasks}
                    Выполненные задачи: {complitedTasks}
                </p>
            </div>

            <div>
                {filteredTask.map((task) => (
                    <TaskItem
                        key={tasks.id}
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