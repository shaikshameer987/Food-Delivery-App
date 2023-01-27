import React, { useState } from "react";
import "./DishCard.css";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  addItem,
  changeQty,
} from "../../store/reducers/cartReducer";

function DishCard({ dish }) {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartDish = cartItems.find((item) => dish.id === item.id);
  let initailQty = cartDish ? cartDish.qty : dish.qty
  const [qty, setQty] = useState(initailQty);
  const dispatch = useDispatch();

  function handleQtyChange(newqty) {
    if (newqty === 1) {
      dispatch(addItem(dish));
    } else if (newqty <= 0) {
      dispatch(removeItem(dish));
    }
    dispatch(changeQty([dish, newqty]));
  }

  return (
    <div className="dish_container">
      <div className="dish_image_container">
        <img className="dish_image" src={dish.image_url} alt="dish" />
      </div>
      <div className="dish_content_container">
        <p className="dish_title">{dish.name}</p>
        <p className="dish_price">&#8377; {dish.cost}</p>
        <p className="dish_rating">&#9733; {dish.rating}</p>
        {qty <= 0 && (
          <button
            className="dish_add_button"
            onClick={() => {
              handleQtyChange(qty + 1);
              setQty(qty + 1);
            }}
          >
            Add
          </button>
        )}
        {qty >= 1 && (
          <div className="qty_div">
            <button
              className="desc_qty"
              onClick={() => {
                handleQtyChange(qty - 1);
                if (qty >= 1) {
                  setQty(qty - 1);
                }
              }}
            >
              –
            </button>
            <p className="dish_qty">{qty}</p>
            <button
              className="inc_qty"
              onClick={() => {
                handleQtyChange(qty + 1);
                setQty(qty + 1);
              }}
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default DishCard;
