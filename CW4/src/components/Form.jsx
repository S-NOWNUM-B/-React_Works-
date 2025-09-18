import React, { useState, useRef, useCallback } from 'react';
import '../styles/styleForm.css';

export default function Form() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const lastNameRef = useRef(null);

    const handleFocusOnLastName = () => {
        lastNameRef.current.focus();
    };

    const showAlert = useCallback(() => {
        alert(`First Name: ${firstName}, Last Name: ${lastName}`);
    }, [firstName, lastName]);

    return (
        <div className="form-container">
            <div className="form-container-firstname">
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="input-block-firstName"
                />
                <button onClick={handleFocusOnLastName} className="button-block">
                    Фокус на фамилию
                </button>
            </div>

            <div className="form-container-lastname">
                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    ref={lastNameRef}
                    className="input-block-lastName"
                />
                <button onClick={showAlert} className="button-block-lastname">
                    Показать данные
                </button>
            </div>
        </div>
    );
}