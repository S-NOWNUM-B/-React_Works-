import React, { memo } from 'react';

function TaskItem({ task, toggleTask, deleteTask }) {
    return (
        <div>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)}>Удалить</button>
        </div>
    );
}

export default memo(TaskItem);