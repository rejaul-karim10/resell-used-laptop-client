import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";

const CategoryCard = ({ category }) => {
  // console.log(category);
  const { name, image, _id } = category;
  return (
    <div className="card lg:card-side bg-white shadow-xl">
      <figure className="">
        <img className="p-4 w-60" src={image} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <PrimaryButton>
          <Link to={`/category/${_id}`}>Browse</Link>
        </PrimaryButton>
      </div>
    </div>
  );
};

export default CategoryCard;
