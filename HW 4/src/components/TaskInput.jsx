import React, {useState, useRef, memo, useCallback} from 'react'

function TaskInput({ addTask}) {
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef(null);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddTask = () => {
        if (inputValue.trim()) {
            addTask(inputValue);
            setInputValue('');
            inputRef.current.focus();
        }
    };

    return (
        <div>
            <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Add Task"
            />
            <button onClick={handleAddTask}>Добавить задачу</button>
        </div>
    );
}

export default memo(TaskInput);