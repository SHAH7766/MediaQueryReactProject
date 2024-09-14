import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import {
  DecrementQuantity,
  GetTotalCart,
  IncrementQuantity,
  RemoveCart,
} from "./Redux/CartSlicer";

const Cart = () => {
  const dispatch = useDispatch();
  const { Cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.name
  );
  useEffect(()=>{
    dispatch(GetTotalCart())
  },[Cart])
  return (
    <>
      <div className="maindiv container">
        <div className="row mt-4">
          <div className="col-lg-6 col-sm-12 col-md-6">
            {Cart.length===0 ? (
              <h2 className="noproduct">No product exists</h2>
            ) : (
              <>
                {Cart.map((x) => {
                  return (
                    <>
                      <div>
                        <img src={x.image} className="image mt-3 4" alt="..." />
                        <div className="card-body">
                          <h5 className="DetailTitle">{x.title}</h5>
                          <h5 className="price">$ {x.price}</h5>
                          <>
                            <button
                              className="increment mx-2"
                              onClick={() => dispatch(IncrementQuantity(x))}
                            >
                              +
                            </button>
                            <span>{x.quantity}</span>
                            <button
                              className="decrement mx-2"
                              onClick={() => dispatch(DecrementQuantity(x))}
                            >
                              -
                            </button>
                            <button
                              className="delete mx-2"
                              onClick={() => dispatch(RemoveCart(x))}
                            >
                              <i class="fa-solid fa-trash "></i>
                            </button>
                          </>
                        </div>
                      </div>
                    </>
                  );
                })}
              </>
            )}
          </div>
          <div className="col-lg-6 col-sm-12 col-md-6">
            <div className="cartTotal">
              <h4 className="tQuantity">Total Quantity : {totalQuantity}</h4>
              <h4 className="tPrice">Total Price : $ {totalPrice}</h4>
              
            </div>
          </div>
            <Link className="mt-3 text-decoration-none" to='/pro'>Return to Products</Link>
        </div>
      </div>
    </>
  );
};

export default Cart;
