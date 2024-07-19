import "./assets/global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import Admin from "./Pages/Admin/Admin";
import PhonesAdmin from "./Pages/Admin/PhonesAdmin";
import ViewPhones from "./Pages/Admin/ViewPhones";
import Phone from "./Pages/Phone/Phone";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/PhonesAdmin" element={<PhonesAdmin />} />
          <Route path="/ViewPhones" element={<ViewPhones />} />
          <Route path="/Phone" element={<Phone />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
