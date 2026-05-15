
import PageRouter from './assets/components/router/PageRouter'
import { BrowserRouter } from 'react-router-dom'

import { useEffect } from 'react';

function App() {

  useEffect(() => {
    
    console.log(import.meta.env);

    return () => {
      
    };
  }, []);

  return (
    <BrowserRouter >
      <PageRouter />
    </BrowserRouter>
  )
}

export default App