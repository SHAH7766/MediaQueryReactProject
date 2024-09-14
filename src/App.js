import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Home } from "./Screens/Home";
import { Products } from "./Screens/Products";
import { Login } from "./Screens/Login";
import Cart from "./Screens/Cart";
import ProtectedRoutes from "./Components/ProtectedRoutes";
import SinglePageProduct from "./Screens/SinglePageProduct";
import Contact from "./Screens/Contact";
function App() {
  return (
    <>
       <BrowserRouter>
            <Navbar />
            <Routes>
                
                <Route path="/login" element={<Login />} />
                <Route element={<ProtectedRoutes />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/pro" element={<Products />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/con" element={<Contact />} />
                    <Route path="/detail/:id" element={<SinglePageProduct />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
