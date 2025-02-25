import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Orçamento from "./pages/Orçamento"
import Header from "./components/Header"
import Navbar from "./components/Navbar"


const Router = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Header />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="sobre" element={<Sobre />}/>
            <Route path="orçamento" element={<Orçamento />}/>

        </Routes>
    </BrowserRouter>
  )
}

export default Router