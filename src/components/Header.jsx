import React from "react";
import { Link } from "react-router-dom";
import Burger from '../styled-components/Burger'

const Header = () => {
  return (
    <div className="menu bg-sky-200 fixed w-full top-0">
      <div className="container-menu flex justify-between container px-5 md:mx-auto py-5">
        <h2><Link to="/">Store TA</Link></h2>
        <Burger/>
      </div>
    </div>
  );
};

export default Header;
