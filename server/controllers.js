var restaurants = require("../restaurants.json");

const controllers = {
  // TODO
  getAll: (req, res) => {
    // this is where you would get data from database!@!@%#$%#$%#$%
    // in express when we use .send() the response automatically ends
    res.status(200).send(restaurants);
  },
  getOne: (req, res) => {
    var restaurant = restaurants[req.params.id];
    if (restaurant) {
      res.status(200).send(restaurant);
    } else {
      res.status(404).send(`No restaurant with id of ${req.params.id}`);
    }
    // this is talking to database please imagin remember this its veryimporatant i cant stress enough
  },
  postRestaurant: ({ body }, res) => {
    // this is where we would add data to data base
    if (body.restaurant_name && body.rating) {
      restaurants.push({
        id: restaurants.length,
        restaurant_name: body.restaurant_name,
        rating: body.rating
      });
      res.status(201).send(`Added ${body.restaurant_name}`);
    } else {
      res.status(400).send("Invalid restaurant format");
    }
  },
  deleteRestaurant: ({ params }, res) => {
    // this is where you delete from database
    var restaurant = restaurants[params.id];
    if (restaurant) {
      restaurants.splice(params.id, 1);
      res.status(200).send(`Removed restaurant at id ${params.id}`);
    } else {
      res.status(404).send(`No restaurant at index ${params.id}`);
    }
  }
};

module.exports = controllers;
