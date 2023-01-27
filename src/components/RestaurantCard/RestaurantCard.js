import React from "react";
import "./RestaurantCard.css"

function RestaurantCard({ restaurant }) {
  return (
    <div className="restaurant">
      <div className="restaurant_image_div">
        <img
          className="restaurant_image"
          src={restaurant.image_url}
          alt="dish"
        />
      </div>
      <div className="restaurant_content_div">
        <p className="restaurant_title">{restaurant.name}</p>
        <p className="restaurant_food_type">{restaurant.menu_type}</p>
        <p className="restaurant_rating">
          &#9733;{restaurant.user_rating.rating}
        </p>
      </div>
    </div>
  );
}

export default RestaurantCard;
