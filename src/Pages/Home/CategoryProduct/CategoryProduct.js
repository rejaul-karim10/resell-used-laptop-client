import React from "react";

const CategoryProduct = ({ detail }) => {
  const {
    _id,
    Condition,
    image,
    location,
    original_price,
    name,
    postedTime,
    productName,
    resale_price,
    sellerName,
    years_of_use,
  } = detail;
  return (
    <div className="card w-96 bg-white shadow-xl">
      <figure>
        <img className="p-4" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {productName}
          <div className="badge badge-primary">
            Resell Price: {resale_price}
          </div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions">
          <div className="badge badge-outline badge-secondary">
            Seller: {sellerName}
          </div>
          <div className="badge badge-outline">{years_of_use} Years of use</div>
          <div className="badge badge-outline">{postedTime} Years of use</div>
        </div>
        <label
          htmlFor="booking-modal"
          className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white border-0"
        >
          Book Now
        </label>
      </div>
    </div>
  );
};

export default CategoryProduct;
