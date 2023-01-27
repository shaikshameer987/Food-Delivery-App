import React, { useState, useEffect } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import Carousal from "../../components/Carousal/Carousal";
import Footer from "../../components/Footer/Footer";
import Cookies from "js-cookie";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [restaurants, setRestaurants] = useState([]);
  // const [error, setError] = useState("");
  const cookie = Cookies.get("accessToken");
  const navigate = useNavigate();
  useEffect(() => {
    if (cookie) {
      fetch(
        `https://apis.ccbp.in/restaurants-list?offset=${
          (page - 1) * 9
        }&limit=${9}&sort_by_rating=${"HIGH"}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${cookie}`,
          },
        }
      )
        .then((res) => res.json())
        .then((res) => {
          setTotal(res.total);
          setRestaurants(
            res.restaurants.sort(
              (a, b) => b.user_rating.rating - a.user_rating.rating
            )
          );
        })
        .catch((error) => console.log(error.message));
    }
  }, [cookie, page]);
  useEffect(() => {
    if (!cookie) {
      navigate("/login");
    }
  });
  function handleSort(e) {
    if (e.target.value === "Sort by Lowest") {
      restaurants.sort((a, b) => a.user_rating.rating - b.user_rating.rating);
      setRestaurants([...restaurants]);
      return;
    } else if (e.target.value === "Sort by Highest") {
      restaurants.sort((a, b) => b.user_rating.rating - a.user_rating.rating);
      setRestaurants([...restaurants]);
    }
  }
  return (
    <main>
      <Header />
      <Carousal />
      <div className="home_restaurants_container">
        <div className="restauarnt_info">
          <div className="home_text">
            <p className="popular_restaurant">Popular Restaurants</p>
            <p className="restaurant_desc">
              Select Your favourite restaurant special dish and make your day
              happy...
            </p>
          </div>
          <div className="sort_div">
            <select className="sorting_list" onChange={(e) => handleSort(e)}>
              <option>Sort by Highest</option>
              <option>Sort by Lowest</option>
            </select>
          </div>
        </div>
        <hr />
        {restaurants.length > 0 ? (
          <>
            <div className="restaurants_list_container">
              {restaurants.map((item, index) => (
                <Link to={"/restaurant/" + item.id} key={item.id}>
                  <RestaurantCard restaurant={item} />
                </Link>
              ))}
            </div>
            <div className="pagination_div">
              {page > 1 && (
                <button
                  className="pagination_left_button"
                  onClick={() => {
                    setRestaurants([])
                    setPage(page - 1);
                  }}
                >
                  &#8810;
                </button>
              )}
              <p className="pages">
                {page} of {Math.ceil(total / 9)}
              </p>
              {page < Math.ceil(total / 9) && (
                <button
                  className="pagination_right_button"
                  onClick={() => {
                    setRestaurants([])
                    setPage(page + 1);
                  }}
                >
                  &#8811;
                </button>
              )}
            </div>
          </>
        ) : (
          <div className="spinner">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}

export default Home;
