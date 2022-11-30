import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();


  const imageHostKey = process.env.REACT_APP_IMAGEBB_Key;

  const { data: categories = [], isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/categoryName");
      const data = await res.json();
      return data;
    },
  });

  const handleAddProduct = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);
          const product = {
            name: data.name,
            email: data.email,
            productName: data.productName,
            image: imgData.data.url,
            postedDate: data.postedDate,
            location: data.location,
            resale_price: data.resale_price,
            original_price: data.original_price,
            years_of_use: data.years_of_use,
            condition: data.condition,
            descriptions: data.descriptions,
          };
          console.log(product);
          //   save product to the database
          fetch("http://localhost:5000/products", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${data.productName} is added successfully`);
              navigate("/dashboard/myProducts");
            });
        }
      });
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="bg-white p-10">
      <h2 className="text-xl font-bold text-primary">Add A Product</h2>
      <form onSubmit={handleSubmit(handleAddProduct)}>
        <div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("productName", {
                required: "Name is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.productName && (
              <p className="text-red-500">{errors.productName.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: true,
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              {...register("postedDate", {
                required: true,
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.postedDate && (
              <p className="text-red-500">{errors.postedDate.message}</p>
            )}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Description</span>
            </label>
            <input
              type=""
              {...register("descriptions", {
                required: true,
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">location</span>
            </label>
            <input
              type="text"
              {...register("location", {
                required: true,
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Resale Price</span>
            </label>
            <input
              type="number"
              {...register("resale_price", {
                required: true,
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Original Price</span>
            </label>
            <input
              type="number"
              {...register("original_price", {
                required: true,
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Years of Use</span>
            </label>
            <input
              type="number"
              {...register("years_of_use", {
                required: true,
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Choose Category</span>
            </label>
            <select
              {...register("name")}
              className="select input-bordered w-full max-w-xs"
            >
              {categories.map((category) => (
                <option key={category._id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Photo</span>
            </label>
            <input
              className="file-input w-full max-w-xs"
              type="file"
              {...register("image", {
                required: "Photo is Required",
              })}
            />

            {errors.img && <p className="text-red-500">{errors.img.message}</p>}
            <input
              className="btn btn-primary w-full mt-4"
              value="Add Product"
              type="submit"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
