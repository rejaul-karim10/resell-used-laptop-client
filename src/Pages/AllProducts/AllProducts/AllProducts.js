import React, { useEffect, useState } from "react";
import BookingModal from "../../../Components/BookingModal/BookingModal";
import SingleProductCard from "../SingleProductCard/SingleProductCard";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-14">
      {products.map((product) => (
        <SingleProductCard
          key={product._id}
          product={product}
          setProductData={setProductData}
        ></SingleProductCard>
      ))}
      {productData && <BookingModal productData={productData}></BookingModal>}
    </div>
  );
};

export default AllProducts;
