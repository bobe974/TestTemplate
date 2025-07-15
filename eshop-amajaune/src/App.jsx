import { useState } from 'react'
import './App.css'
import Header from './components/header'
import ProductCard from './components/productCard'
import Home from './pages/home'

function App() {
  const [count, setCount] = useState(0)

  
return (
    <div >
     <Home></Home>
    </div>
  );
}


export default App
