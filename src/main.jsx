import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/reset.css'
import './styles/fonts.css'
import './styles/variables.css'
import './styles/index.css'
import { DataProvider } from './context/DataContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
      
      <App />
    </DataProvider>
  </StrictMode>,
)
