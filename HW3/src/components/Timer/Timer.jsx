import React, { useState, useEffect } from 'react';

function Timer() {
    const [inputValue, setInputValue] = useState('');
    const [timeLeft, setTimeLeft] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval = null;

        if (isRunning && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft(prevTime => {
                    const newTime = prevTime - 1;

                    if (newTime === 0) {
                        alert('Время вышло');
                        setIsRunning(false);
                        return 0;
                    }

                    return newTime;
                });
            }, 1000);
        } else if (timeLeft === 0 && isRunning) {
            setIsRunning(false);
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [isRunning, timeLeft]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleStart = () => {
        const seconds = parseInt(inputValue, 10);

        if (isNaN(seconds) || seconds <= 0) {
            alert('Пожалуйста, введите положительное число');
            return;
        }

        setTimeLeft(seconds);
        setIsRunning(true);
    };

    const handleStop = () => {
        setIsRunning(false);
    };

    const handleReset = () => {
        setIsRunning(false);
        setTimeLeft(0);
        setInputValue('');
    };

    return (
        <div style={{
            textAlign: 'center',
            padding: '20px',
            maxWidth: '400px',
            margin: '0 auto',
            fontFamily: 'Arial, sans-serif',
        }}>
            <h1>Таймер судного дня</h1>

            <div style={{ marginBottom: '20px' }}>
                <input
                    type="number"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Введите количество секунд"
                    disabled={isRunning}
                    style={{
                        padding: '10px',
                        fontSize: '20px',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                        width: '250px',
                        marginBottom: '20px',
                    }}
                />
            </div>

            <div style={{
                fontSize: '48px',
                fontWeight: 'bold',
                margin: '20px 0',
                color: timeLeft <= 10 && timeLeft !== 0 ? 'red' : 'Grey',
            }}>
                {timeLeft} сек
            </div>

            <div style={{ marginBottom: '20px' }}>
                {!isRunning ? (
                    <button
                        onClick={handleStart}
                        disabled={!inputValue || timeLeft > 0}
                        style={{
                            padding: '10px 20px',
                            fontSize: '16px',
                            backgroundColor: 'green',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            marginRight: '10px',
                        }}
                        >
                        Старт
                    </button>
                ) : (
                    <button
                    onClick={handleStop}
                    style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    backgroundColor: 'red',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    marginRight: '10px',
                    }}
                    >
                      Стоп
                    </button>
                )}

                <button
                    onClick={handleReset}
                    style={{
                        padding: '10px 20px',
                        fontSize: '16px',
                        backgroundColor: '#9E9E9E',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                    >
                    Сброс
                </button>
            </div>

            <div style={{ fontSize: '14px', color: '#666' }}>
                Статус: {isRunning ? 'Запущен' : 'Остановлен'}
            </div>
        </div>
    );
}

export default Timer;