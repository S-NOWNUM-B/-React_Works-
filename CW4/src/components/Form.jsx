import React, { useState, useRef, useCallback } from 'react'

export default function Form() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const lastNameRef = useRef(null)

  const handleFocusOnLastName = () => {
    lastNameRef.current.focus()
  }

  const showAlert = useCallback(() => {
    alert(`Ваше имя: ${firstName}\nВаша фамилия: ${lastName}`)
  }, [firstName, lastName])

  return (
    <div className="form-wrapper">
      <h2 className="form-title">Информация о пользователе</h2>
      
      <div className="input-group">
        <label className="input-label">Имя</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="input-field"
        />
        <button
          onClick={handleFocusOnLastName}
          className="btn btn-primary"
        >
          Фокус на фамилию
        </button>
      </div>

      <div className="input-group">
        <label className="input-label">Фамилия</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          ref={lastNameRef}
          className="input-field"
        />
        <button
          onClick={showAlert}
          className="btn btn-success"
        >
          Показать данные
        </button>
      </div>
    </div>
  )
}