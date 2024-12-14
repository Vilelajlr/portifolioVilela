import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './App.tsx'
import { RouterProvider } from 'react-router'

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'

// Importando o AOS e seus estilos
import AOS from 'aos'
import 'aos/dist/aos.css'

const App = () => {
  useEffect(() => {
    // Inicializando o AOS quando o componente for montado
    AOS.init({
      duration: 1000, // Duração da animação
      offset: 200,    // Distância do topo para ativar a animação
      delay: 100,     // Delay das animações
    })
  }, [])

  return (
    <StrictMode>
      <RouterProvider router={router} />
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </StrictMode>
  )
}

createRoot(document.getElementById('root')!).render(<App />)
