import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import bgimage from "../../../images/5.jpg"; //($)

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          //"url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)",  //(o)
          `url(${bgimage})`, //($)
        backgroundSize: "cover", // This will make sure the background image covers the entire container ($)
        backgroundPosition: "center", // This will center the background image within the container ($)
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%] ml-20`}>
        {" "}
        {/*ml-20  //($) */}
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
        >
          best collection of <br /> raw materials
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
          Discover Ayurvedic remedies with <b>MediReach</b>, your premier platform
          connecting seekers and sellers of authentic herbal medicines.
          Whether you're seeking time-tested solutions or looking to share your expertise,<br />{" "}
           MediReach is here to empower your journey towards holistic
          wellness. <br /> Join us today and explore a world of traditional
          healing!
        </p>
        <Link to="/products" className="inline-block">
          <div className={`${styles.button} mt-5`}>
            <span className="text-[#fff] font-[Poppins] text-[18px]">
              Shop Now
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
