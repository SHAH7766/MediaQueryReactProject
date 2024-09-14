import React from "react";
import Slider from "../Components/Slider";
import { Typewriter } from "react-simple-typewriter";
import { Products } from "./Products";
import Aos from "aos";
export const Home = () => {
    Aos.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100,
      });
  return (
    <>
      <div className="container">
        <Slider />
        <div className="mt-4">
          <span className="typewriter ">
            <Typewriter
              words={[
                "Welcome to Michael Fabrics",
                "The most trusted website of the community",
                "Pakistan's No 1 E-commerce based platform",
              ]}
              loop={5}
              cursor
              typeSpeed={90}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </div>
      </div>
      <Products/>
    </>
  );
};
