import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MenuBar from './components/MenuBar/MenuBar'
import { ResetStyles } from './components/GlobalStyles/GlobalStyles'
import PanelCentral from './components/PanelCentral/PanelCentral'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ResetStyles />
      <MenuBar />
      <PanelCentral />
    </>
  )
}

export default App
