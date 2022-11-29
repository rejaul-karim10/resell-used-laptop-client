import React from "react";
import { useLoaderData } from "react-router-dom";
import CategoryProduct from "../Home/CategoryProduct/CategoryProduct";

const CardDetails = () => {
  const details = useLoaderData();
  console.log(details);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-16">
      {details.map((detail) => (
        <CategoryProduct key={detail} detail={detail} />
      ))}
    </div>
  );
};

export default CardDetails;
