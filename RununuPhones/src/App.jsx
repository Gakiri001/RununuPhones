import "./assets/global.css"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Header from "./components/Header/Header"
import Home from "./Pages/Home/Home"
import Admin from "./Pages/Admin/Admin"
import PhonesAdmin from "./Pages/Admin/PhonesAdmin"

function App() {


  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Admin" element={<Admin/>}/>
      <Route path="/PhonesAdmin" element={<PhonesAdmin/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
