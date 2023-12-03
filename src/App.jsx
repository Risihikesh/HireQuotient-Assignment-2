import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AdminDashboard from "./components/AdminDashboard";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PrimeReactProvider>
      <AdminDashboard />
    </PrimeReactProvider>
    </>
  )
}

export default App
