import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory] = useState ('All')

  function changeFilter(e) {
    setSelectedCategory (e.target.value)
  }

  // function filterItems () {    this is if we don't use 'All' in line 6
  //     if (selectedCategory === "All")
  

  const filteredItems = items.filter(item => item.category === selectedCategory || selectedCategory === "All") //29 to 

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange = {changeFilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => ( // change from items to filteredItems
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
