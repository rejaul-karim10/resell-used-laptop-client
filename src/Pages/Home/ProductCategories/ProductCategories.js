import { useQuery } from "@tanstack/react-query";
import React from "react";
import CategoryCard from "../../Shared/CategoryCard/CategoryCard";
import Loading from "../../Shared/Loading/Loading";

const ProductCategories = () => {
  const { data: categories = [], isLoading, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/category");
      const data = await res.json();
      return data;
    },
  });

  if(isLoading){
    return <Loading/>
  }

  return (
    <div className="mt-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary">
          All Product categories :
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
