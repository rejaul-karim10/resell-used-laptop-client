import React from "react";

const SingleProductCard = ({ product, setProductData }) => {
  const {
    _id,
    Condition,
    image,
    location,
    original_price,
    descriptions,
    name,
    postedTime,
    postedDate,
    productName,
    resale_price,
    sellerName,
    years_of_use,
  } = product;
  return (
    <div>
      <div className="card w-96 bg-white shadow-xl">
        <figure>
          <img className="h-70 p-2" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {productName}
            <div className="badge badge-primary">
              Resell Price: {resale_price}
            </div>
          </h2>
          <p>Original Price: ${original_price}</p>
          <p>{descriptions}</p>
          <div className="card-actions">
            <div className="badge badge-outline badge-secondary">
              Seller Name: {sellerName}
            </div>
            <div className="badge badge-outline">{years_of_use} Years</div>
            <div className="badge badge-outline">Posted {postedDate}</div>
            <div className="badge badge-outline">Location {location}</div>
          </div>
          <label
            onClick={() => setProductData(product)}
            htmlFor="booking-modal"
            className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white border-0"
          >
            Book Now
          </label>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCard;
