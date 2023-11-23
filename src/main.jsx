import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { firestoreInit } from './firebase/config';

firestoreInit();

ReactDOM.createRoot(document.getElementById('root')).render(<App />
)
