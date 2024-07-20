import "./assets/global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import Admin from "./Pages/Admin/Admin";
import PhonesAdmin from "./Pages/Admin/PhonesAdmin";
import ViewPhones from "./Pages/Admin/ViewPhones";
import Phone from "./Pages/Phone/Phone";
import Cart from "./Pages/Cart/Cart";
import Footer from "./components/Footer/Footer";
import Contact from "./Pages/Contact/Contact";
import ContactAdmin from "./Pages/Admin/ContactAdmin";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Signup />} />

            <Route path="/Login" element={<Login />} />
            <Route path="/Home" element={<Home />} />

            <Route path="/Phone" element={<Phone />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Contact" element={<Contact />} />

            <Route path="/Admin" element={<Admin />} />
            <Route path="/PhonesAdmin" element={<PhonesAdmin />} />
            <Route path="/ViewPhones" element={<ViewPhones />} />
            <Route path="/ContactAdmin" element={<ContactAdmin />} />
          </Routes>

          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
