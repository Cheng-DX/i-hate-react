import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './container/App'

console.log(App)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

