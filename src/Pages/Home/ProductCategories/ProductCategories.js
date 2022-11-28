import React, { useEffect, useState } from "react";
import CategoryCard from "../CategoryCard/CategoryCard";

const ProductCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/product-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="mt-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary">
          All Product categories : {categories.length}
        </h1>
        <p>Choose your future laptop from our categories</p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-16">
        {categories.map((category) => (
          <CategoryCard key={category._id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
