import React, { useState, useEffect } from "react";
import "./Cart.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CartItem from "../../components/CartItem/CartItem";
import { useSelector } from "react-redux";

function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    function handleCartTotal() {
      for (let item of cartItems) {
        total += item.cost * item.qty;
      }
    }
    handleCartTotal();
    setCartTotal(total);
  }, [cartItems]);
  return (
    <main>
      <Header />
      <div className="cart_container">
        {cartItems.length > 0 ? (
          <>
            <div className="cart_headers">
              <p className="cart_heading">Item</p>
              <p className="cart_heading cart_heading_qty">Quantity</p>
              <p className="cart_heading">Rate</p>
            </div>
            {cartItems &&
              cartItems.length > 0 &&
              cartItems.map((item) => <CartItem item={item} key={item.id} />)}
            <hr />
            <div className="cart_order_total">
              <p>Order Total :</p>
              <p>&#8377; {Math.ceil(cartTotal)}</p>
            </div>
            <div className="place_order_div">
              <button className="place_order_button">Place Order</button>
            </div>
          </>
        ) : (
          <div className="cart_empty">
            <h2>Cart is Empty</h2>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}

export default Cart;
