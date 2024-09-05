import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css'
import ButtonUsage from './components/button';
import PrimarySearchAppBar from './components/AppBar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PrimarySearchAppBar/>
      <ButtonUsage/>
    </>
  )
}

export default App
