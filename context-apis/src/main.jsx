import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Theme from './context/Theme.jsx'

import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Theme>
    <App />
    </Theme>
    </BrowserRouter>
)
