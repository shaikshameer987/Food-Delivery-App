import React, { useState, useEffect } from "react";
import "./RestaurentInfo.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import DishCard from "../../components/DishCard/DishCard";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";

function RestaurentInfo() {
  const [restaurantInfo, setRestaurantInfo] = useState("");
  let dishes = restaurantInfo.food_items;
  const params = useParams();
  const id = params.id;
  const cookie = Cookies.get("accessToken");

  useEffect(() => {
    if (cookie) {
      fetch("https://apis.ccbp.in/restaurants-list/" + id, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${cookie}`,
        },
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          res.food_items.forEach((i) => (i.qty = 0));
          setRestaurantInfo(res);
        });
    }
  }, [cookie, id]);
  return (
    <main className="restaurant_info_page">
      <Header />
      <div className="restaurant_banner">
        <div className="restaurant_banner_left">
          <img
            className="banner_image"
            src={restaurantInfo.image_url}
            alt="food"
          />
        </div>
        <div className="restaurant_banner_right">
          <p className="restaurant_title_info">{restaurantInfo.name}</p>
          <p className="food_type_info">{restaurantInfo.cuisine}</p>
          <p className="restaurant_location">{restaurantInfo.location}</p>
          <div className="rating_info">
            <div className="rating_info_left">
              <p className="restaurant_rating">
                &#9733; {restaurantInfo.rating}
              </p>
              <p className="restaurant_rating_count">
                {restaurantInfo.reviews_count}+ ratings
              </p>
            </div>
            <div className="rating_info_right">
              <p className="restaurant_food_price">
                &#8377; {restaurantInfo.cost_for_two}
              </p>
              <p className="people_count">cost for two</p>
            </div>
          </div>
        </div>
      </div>
      <div className="dishes_list">
        {dishes &&
          dishes.length > 0 &&
          dishes.map((dish) => (
            <DishCard dish={dish} key={dish.id + dish.name} />
          ))}
      </div>
      <Footer />
    </main>
  );
}

export default RestaurentInfo;
