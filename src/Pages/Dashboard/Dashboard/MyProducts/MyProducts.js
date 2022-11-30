import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../../Contexts/AuthProvider/AuthProvider";
import ConfirmationModal from "../../../Shared/ConfirmationModal/ConfirmationModal";
import Loading from "../../../Shared/Loading/Loading";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const [deletingProduct, setDeletingProduct] = useState(null);

  const closeModal = ()=>{
    setDeletingProduct(null)
  }

  const handleDeleteProduct = (product) => {
    fetch(`https://resell-used-laptop-server.vercel.app/productDelete/${product._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success(`${product.name} deleted successfully`);
        }
      });
  };



  const url = `https://resell-used-laptop-server.vercel.app/sellerProducts?email=${user?.email}`;

  const {
    data: myProducts = [],
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
              <th>Image</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myProducts?.map((product, i) => (
              <tr key={myProducts._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-20 rounded-full">
                      <img src={product.image} alt="" />
                    </div>
                  </div>
                </td>
                <td>{product.productName}</td>
                <td>{product.name}</td>
                <td>
                  <label
                    onClick={()=>setDeletingProduct(product)}
                    htmlFor="confirmation-modal"
                    className="btn btn-xs btn-error"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingProduct && <ConfirmationModal
      title={`Are you sure you want to delete?`}
      message={`If you delete ${deletingProduct.productName} you will not get the data back`}
      closeModal={closeModal}
      modalData={deletingProduct}
      successAction ={handleDeleteProduct}
      successButtonName = "Delete"
      ></ConfirmationModal>}
    </div>
  );
};

export default MyProducts;
