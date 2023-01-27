import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../src/pages/Login/Login";
import Home from "../src/pages/Home/Home";
import RestaurentInfo from "./pages/RestaurentInfo/RestaurentInfo";
import Cart from "../src/pages/Cart/Cart";
import { Provider } from "react-redux";
import store from "../src/store/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/restaurant/:id" element={<RestaurentInfo />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
