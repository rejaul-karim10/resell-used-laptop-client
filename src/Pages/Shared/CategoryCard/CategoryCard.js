import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";

const SingleCard = ({ category }) => {
  const { name, image, _id } = category;

  return (
    <div>
      <div className="card lg:card-side bg-white shadow-xl">
        <figure className=" w-48 ">
          <img className="p-4" src={image} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <Link to={`/category/${name}`}>
            <PrimaryButton>View More</PrimaryButton>
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default SingleCard;
