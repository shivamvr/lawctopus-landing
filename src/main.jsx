import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { cssVars } from './theme'

// Inject the single colour palette onto :root so both inline styles and
// index.css read every colour from one place (src/theme.js).
const rootEl = document.documentElement
for (const [name, value] of Object.entries(cssVars)) {
  rootEl.style.setProperty(name, value)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
