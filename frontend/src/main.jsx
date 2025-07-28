import React from 'react'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'

const TestMessage = () => <div style={{ color: 'red' }}>If you see this, React is rendering.</div>;

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <TestMessage />
    <App />
  </BrowserRouter>
)
