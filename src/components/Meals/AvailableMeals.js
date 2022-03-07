import React from "react";
import Card from "../UI/Card";

import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Rice 3 types meat",
    description: "Very delicious",
    price: 4.0,
  },
  {
    id: "m2",
    name: "Spaghetti",
    description: "Even more delicious",
    price: 4.0,
  },
  {
    id: "m3",
    name: "Chicken Burger",
    description: "American, raw, meaty",
    price: 4.5,
  },
  {
    id: "m4",
    name: "Teleshki ",
    description: "Healthy...and green...",
    price: 3.5,
  },
  {
    id: "m4",
    name: "French fries",
    description: "Healthy...and green...",
    price: 1.0,
  },
];

const AvailableMeals = (props) => {
  const mealItems = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealItems}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
