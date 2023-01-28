import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../src/pages/Login/Login";
import Home from "../src/pages/Home/Home";
import RestaurentInfo from "./pages/RestaurentInfo/RestaurentInfo";
import Cart from "../src/pages/Cart/Cart";
import ProtectedRoutes from "./ProtectedRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoutes/>}>
            <Route path="/" element={<Home />} />
            <Route path="/restaurant/:id" element={<RestaurentInfo />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
