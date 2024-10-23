import React, { useEffect, useState } from "react";
import "./Allproducts.css";
import SingleProduct from "../SingleProduct/SingleProduct";

const Allproducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);
  return (
    <div>
      <h1 className="text-2xl font-bold">AllProducts.jsx</h1>
      <SingleProduct></SingleProduct>
      {products.map((p) => (
        <SingleProduct product={p} key={p.id}></SingleProduct>
      ))}
    </div>
  );
};

export default Allproducts;
