import React, {useState} from "react";

function Item({ name, category }) {

  const [inTheCart, setInTheCart] = useState(false)

  const liClass = inTheCart ? "in-cart" : ""

  const buttonText = inTheCart ? "Remove From Cart" : "Add to Cart"

  function toggleInTheCart(){
    setInTheCart(!inTheCart)
  }

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
      className="add"
      onClick = {toggleInTheCart}
      >
          {buttonText}
      </button>
    </li>
  );
}

export default Item;
