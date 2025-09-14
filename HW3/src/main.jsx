import React from 'react'
import { createRoot } from 'react-dom/client'
import Timer from './Timer.jsx'
import './style.css'

const root = createRoot(document.getElementById('app'))
root.render(<Timer />)