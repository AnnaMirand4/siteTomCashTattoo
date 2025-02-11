import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Orçamento from "./pages/Orçamento"


const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="sobre" element={<Sobre />}/>
            <Route path="orçamento" element={<Orçamento />}/>

        </Routes>
    </BrowserRouter>
  )
}

export default Router