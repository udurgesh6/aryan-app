import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { productId } = useParams();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }, []);

  console.log(productId);
  return <div>Product</div>;
};

export default Product;
