import React from "react";
import banner2 from "../../../assets/images/banner/banner2.jpg";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";

const Banner = () => {
  return (
    <div className="hero pb-24 pt-24 bg-white rounded-md">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={banner2} className="lg:w-1/2 rounded-lg shadow-lg" alt="" />
        <div>
          <h1 className="text-4xl font-bold text-primary">Get second hand laptop from trustable sellers</h1>
          <p className="py-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <PrimaryButton>Book Now</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
