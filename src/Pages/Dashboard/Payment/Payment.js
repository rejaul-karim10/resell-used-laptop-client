import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const booking = useLoaderData();
 
  return (
    <div className="mt-2">
      <h2 className="text-xl">Payment</h2>
      <div className="p-24 bg-white rounded-md">
        <h1>
          Payment for <strong>{booking.productName}</strong>
        </h1>
        <h1>
          Please pay <strong>${booking.price}</strong> to proceed your order
        </h1>
        <div className="w-96 my-12">
          <Elements stripe={stripePromise}>
            <CheckoutForm 
            booking={booking}
            />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
