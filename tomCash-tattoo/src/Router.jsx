import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Orçamento from "./pages/Orçamento"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Galeria from "./pages/Galeria"
import Footer from "./components/Footer"
import WhatsAppButton from "./components/WhatsAppButton"


const Router = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Header />
    <WhatsAppButton />
    <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="sobre" element={<Sobre />}/>
            <Route path="galeira" element={<Galeria />}/>
            <Route path="orçamento" element={<Orçamento />}/>

        </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default Router