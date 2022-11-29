import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const BookingModal = ({ productData, setProductData }) => {
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
  } = productData;

  const { user } = useContext(AuthContext);
  console.log(user);
  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const price = form.price.value;
    const location = form.location.value;
    console.log(name, phone, price);

    const booking = {
      buyerName: name,
      email,
      phone,
      price,
      productName,
      location
    };
    console.log(booking);
    
    fetch("http://localhost:5000/bookings", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(booking),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.acknowledged) {
     
        setProductData(null);
        toast.success("Booking Confirmed");
        // refetch()
      }
      else{
        toast.error(data.message);
      }
    });

  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{productName}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-4 mt-10"
          >
            <input
              defaultValue={user?.displayName}
              disabled
              name="name"
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full input-primary "
            />
            <input
              defaultValue={user?.email}
              disabled
              name="email"
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full input-primary "
            />
            <input
              name="price"
              type="text"
              defaultValue={resale_price}
              disabled
              className="input input-bordered w-full input-primary "
            />
            <input
              name="phone"
              type="text"
              placeholder="Your Phone"
              className="input input-bordered w-full input-primary"
            />
            <input
              name="location"
              type="text"
              placeholder="Your location"
              className="input input-bordered w-full input-primary"
            />
            <input
              className="w-full btn btn-primary"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
