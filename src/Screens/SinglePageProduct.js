import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { AddToCart } from "./Redux/CartSlicer";
import toast from "react-hot-toast";
const SinglePageProduct = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const [data, setData] = useState({});
  async function SingleProduct() {
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products/${params.id}`
      );
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    SingleProduct();
  }, []);
  const DispatchProduct = (x) => {
    toast.success("Added to Cart successfully");
    dispatch(AddToCart(x));
  };
  return (
    <>
      <div className="maindiv container">
        <div className="row">
          <div className="col-lg-6 col-sm-12 col-md-6">
            <img src={data.image} className="image" />
          </div>
          <div className="col-lg-6 col-sm-12 col-md-6">
            <p className="DetailTitle">{data.title}</p>
            <p className="DetailDescription">{data.description}</p>
            <p className="price">$ {data.price}</p>
            <>
              <Link to="/cart">
                {" "}
                <button
                  onClick={() => DispatchProduct(data)}
                  className="ButtonProductPage"
                >
                  Add to Cart
                </button>
              </Link>
            </>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePageProduct;
