import { Fragment, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const Tag = process.env.NODE_ENV === 'production' ? Fragment : StrictMode

createRoot(document.getElementById('root')).render(
  <Tag>
    <App />
  </Tag>,
)
