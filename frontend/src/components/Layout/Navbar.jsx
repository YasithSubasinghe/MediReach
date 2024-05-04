import React from "react";
import { Link } from "react-router-dom";
import { navItems } from "../../static/data";
import styles from "../../styles/styles";

const Navbar = ({ active }) => {
  return (
    <div className={`block 800px:${styles.noramlFlex}`}>
      {navItems &&
        navItems.map((i, index) => (
          <div key={index} className="flex">   {/* <div className="flex"> was original and new is <div key={index} className="flex"> for console key atribute error*/ }
            <Link
              to={i.url}
              className={`${
                active === index + 1
                  ? "text-[#19451b]"
                  : "text-black 800px:text-[#ffffff]"
              } pb-[30px] 800px:pb-0 font-[500] px-6 cursor-pointer}`}
            >
              {i.title}
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Navbar;
