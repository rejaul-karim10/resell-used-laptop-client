import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Contexts/AuthProvider/AuthProvider";
import Loading from "../../../Shared/Loading/Loading";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const url = `https://resell-used-laptop-server.vercel.app/bookings?email=${user?.email}`;

  

  const {
    data: bookings = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  console.log(bookings);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h1>My Orders</h1>
      <div className="overflow-x-auto">
        <table className="table w-full mt-4">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((booking, i) => (
              <tr key={booking._id}>
                <th>{i + 1}</th>
                <td>{booking.email}</td>
                <td>{booking.productName}</td>
                <td>${booking.price}</td>
                <td>
                  {booking.price && !booking.paid && (
                    <Link to={`/dashboard/payment/${booking._id}`}>
                      <button className="btn btn-xs btn-secondary">Pay</button>
                    </Link>
                  )}
                  {booking.price && booking.paid && (
                    <span className="text-secondary">Pay</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
