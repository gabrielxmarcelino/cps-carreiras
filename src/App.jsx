import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MenuBar from './components/MenuBar/MenuBar'
import { ResetStyles } from './components/GlobalStyles/GlobalStyles'
import PanelCentral from './components/PanelCentral/PanelCentral'
import Inicio from './pages/Inicio/Inicio'
import { Route, Routes } from 'react-router-dom'
import Perfil from './pages/Perfil/Perfil'
import Contato from './pages/Contato/Contato'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ResetStyles />
      <MenuBar />
      <PanelCentral >
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </PanelCentral>
    </>
  )
}

export default App
