import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const App = ({ cartItems, setCartItems }) => {
  const [id] = useEffect();
  // this is my current product count
  const [currentProductCount, setCurrentProductCount] = useState(0);
  const [currentProductDetail, setCurrentProductDetail] = useState(null);

  useEffect(() => {
    // logic to get the count of current product from cartItems
    // cartItems ==>  [{id:1, name:"test1", count: 1},{id:2, name:"test2", count: 2},{id:3, name:"test3", count: 4}]
    const currentProductDetail = cartItems.filter((item) => item.id === id)[0]; // {id:1, name:"test1", count: 1}
    setCurrentProductCount(currentProductDetail.count);
  }, [cartItems]);

  const addItemToCart = () => {
    const tempCartItems = [...cartItems];

    const indexOfCurrentProduct = cartItems.findIndex((item) => item.id === id);

    if (indexOfCurrentProduct === -1) {
      // this product is not yet present inside the cart
      setCartItems([...cartItems, { ...currentProductDetail, count: 1 }]);
    } else {
      // this item is already present, just increment the count by 1
      tempCartItems[indexOfCurrentProduct].count += 1;
      setCartItems(tempCartItems);
    }
  };

  return (
    <div className="flex flex-col">
      <p>+ {currentProductCount} -</p>
    </div>
  );
};

export default App;
