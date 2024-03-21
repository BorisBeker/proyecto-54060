import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBarComp from './components/NavBarComp'
import HomeComponent from './components/HomeComponent'
import ProductsComp from './components/ProductsComp'
import ProductComp from './components/ProductComp'

function App() {


  return (
    <>
      <BrowserRouter>
        <NavBarComp />
        <Routes>
          <Route exact path="/" element={<HomeComponent />} />
          <Route exact path="/products" element={<ProductsComp />} />
          <Route exact path="/product/:prodId" element={<ProductComp />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
