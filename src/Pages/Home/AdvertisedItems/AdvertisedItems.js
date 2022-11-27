import React from 'react';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const AdvertisedItems = () => {
    return (
        <div className="mt-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary">
          All Advertised products
        </h1>
        <p>Choose your future laptop from our categories</p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-16">
        <div className="card lg:card-side bg-white shadow-xl">
          <figure className=" ">
            <img className="p-4" src="https://placeimg.com/400/400/arch" alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Category 1</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <PrimaryButton>Book Now</PrimaryButton>
          </div>
        </div>
        <div className="card lg:card-side bg-white shadow-xl">
          <figure>
            <img src="https://placeimg.com/400/400/arch" alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Category 1</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <PrimaryButton>Book Now</PrimaryButton>
          </div>
        </div>
        <div className="card lg:card-side bg-white shadow-xl">
          <figure>
            <img src="https://placeimg.com/400/400/arch" alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Category 1</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <PrimaryButton>Book Now</PrimaryButton>
          </div>
        </div>
        
       
      </div>
    </div>
    );
};

export default AdvertisedItems;