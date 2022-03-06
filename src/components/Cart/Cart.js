import React from "react";
import Modal from "../UI/Modal";

import classes from "./Cart.module.css";

const cartItems = (
  <ul>
    {[{ id: "c1", name: "Sushi", amount: 2, price: 24.56 }].map((item) => (
      <li key={item.id} className={classes["cart-items"]}>
        {item.name}
      </li>
    ))}
  </ul>
);

const Cart = (props) => {
  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
