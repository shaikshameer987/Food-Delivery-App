import React, { useState } from "react";
import "./CartItem.css";
import { removeItem, changeQty } from "../../store/reducers/cartReducer";
import { useDispatch } from "react-redux";

function CartItem({ item }) {
  const [cartQty, setCartQty] = useState(item.qty);
  const dispatch = useDispatch();

  function hanldeQtyChange(newQty) {
    if (newQty <= 0) {
      setCartQty(0);
      dispatch(removeItem(item));
    } else {
      setCartQty(newQty);
      dispatch(changeQty([item, newQty]));
    }
  }
  return (
    <div className="cart_item">
      <div className="cart_dish_image_div">
        <img className="cart_dish_image" src={item.image_url} alt="" />
      </div>
      <div className="cart_item_content">
        <p className="name_format">{item.name}</p>
        <div className="cart_qty_div">
          <button
            className="desc_qty"
            onClick={() => {
              hanldeQtyChange(cartQty - 1);
            }}
          >
            –
          </button>
          <p className="dish_qty">{cartQty}</p>
          <button
            className="inc_qty"
            onClick={() => {
              hanldeQtyChange(cartQty + 1);
            }}
          >
            +
          </button>
        </div>
        <p className="dish_price">&#8377; {Math.ceil(cartQty * item.cost)}</p>
      </div>
    </div>
  );
}

export default CartItem;
