import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Aos from "aos";
export const Products = () => {
  Aos.init({
    offset: 200,
    duration: 600,
    easing: "ease-in-sine",
    delay: 100,
  });
  const [data, setData] = useState([]);
  async function getProducts() {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getProducts();
  }, [data]);
  return (
    <>
      <h2 className="list">List of Products</h2>
      <div className=" maindiv container mt-3 ">
        <div className="row">
          {data.map((x) => {
            return (
              <>
                <div
                 
                  className="col-lg-3 col-sm-12 col-md-6 "
                >
                  <img src={x.image} className="image mt-5" alt="..." />
                  <div className="card-body">
                    <h5 className="title">{x.title}</h5>
                    <p className=" desc">{x.description.slice(0, 100)}</p>
                    <p className="price">$ {x.price}</p>
                    <Link
                      to={`/detail/${x.id}`}
                      className="ButtonProductPage text-decoration-none"
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
