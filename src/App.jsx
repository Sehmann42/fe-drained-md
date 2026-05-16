
import PageRouter from './assets/components/router/PageRouter'
import { BrowserRouter } from 'react-router-dom'

import { useEffect } from 'react';

function App() {
  return (
    <BrowserRouter >
      <PageRouter />
    </BrowserRouter>
  )
}

export default App