//import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/Navbar/Navbar";
import Button from "./assets/components/Button/Button";
import Astros from './assets/components/Astros/Astros';
import BottomNav from "./assets/components/BottomNav/BottomNav";
import "./App.css"

function  App(){
  const btnText = "Login";

  const links = [
    {id: 1, name: "Home", href: "/"},
    {id: 2, name: "About", href: "/about"},
    {id: 3, name: "Astros", href: "/astros"},
  ]
return (
  <>
<Navbar links = {links} />
  <Routes>
    <Route
    path="/"
    element={<Button name={btnText} />}
    />
    <Route
    path="/about"
    element={<BottomNav />}
    />
  <Route
  path="/astros"
  element={<Astros />}
  />
  </Routes>
  </>
)
}

export default App



// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

