
import PageRouter from './assets/components/router/PageRouter'
import { BrowserRouter } from 'react-router-dom'

import { useEffect } from 'react';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.VITE_BASE} >
      <PageRouter />
    </BrowserRouter>
  )
}

export default App