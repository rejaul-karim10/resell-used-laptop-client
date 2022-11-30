import React from "react";
import { Link } from "react-router-dom";
import banner2 from "../../../assets/images/banner/banner2.jpg";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";

const Banner = () => {
  return (
    <div className="hero pb-24 pt-24 bg-white rounded-md">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={banner2} className="lg:w-1/2 rounded-lg shadow-lg" alt="" />
        <div>
          <h1 className="text-4xl font-bold text-primary">
            Get second hand laptop from trustable sellers
          </h1>
          <p className="py-6">
            We supply Grade A used Computer & Laptop with best Service for you
          </p>
          <Link to="/allProducts">
            {" "}
            <PrimaryButton>All Products</PrimaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
