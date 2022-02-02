import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import App from './App'

ReactDOM.render(
// Same as video 80
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
