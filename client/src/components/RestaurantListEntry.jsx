import React from "react";
// we can't not use the "key", so we must use index!!!!!
const RestaurantListEntry = ({ restaurant, index, deleteRestaurant }) => (
  <div className="entry">
    <div className="name">{restaurant.restaurant_name}</div>
    <div className="rating">
      {restaurant.rating}/5⭐️
      <span
        onClick={() => {
          deleteRestaurant(index);
        }}
        className="delete"
      >
        x
      </span>
    </div>
  </div>
);

export default RestaurantListEntry;
