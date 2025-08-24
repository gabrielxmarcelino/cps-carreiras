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
import Cadastro from './pages/Cadastro/Cadastro'
import Login from './pages/Login/Login'

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
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </PanelCentral>
    </>
  )
}

export default App
