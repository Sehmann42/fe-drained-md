
import PageRouter from './assets/components/router/PageRouter'
import { BrowserRouter } from 'react-router-dom'

import { useEffect } from 'react';
import Overlay from './assets/components/overlay/Overlay';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.VITE_BASE} >
      <Overlay>
        <PageRouter />
      </Overlay>
    </BrowserRouter>
  )
}

export default App