import React from "react";
import { useLoaderData } from "react-router-dom";

const Payment = () => {
  const booking = useLoaderData();
  console.log(booking);
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
      </div>
    </div>
  );
};

export default Payment;
