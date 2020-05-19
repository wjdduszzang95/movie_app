import React from "react";
import PropTypes from "prop-types";

const MyFavFood = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.rZJVEsBI1USF0cn92cUOMAHaEK%26pid%3DApi&f=1",
    rating: 5
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Mz1Q9GnOjEBnQgBQ4c6plwHaEK%26pid%3DApi&f=1",
    rating: 4.9
  }
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h1>I Love {name}</h1>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}></img>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};

function App() {
  return (
    <div>
      {MyFavFood.map(dish => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
