import React from "react";
import { RxAvatar } from "react-icons/rx";
import { RiArrowDownSLine } from "react-icons/ri";
import img from "../assements/logo.webp";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <img src={img} alt="logo" />
      <div className="navItem">
        <Link to={"/"} className="ass">
          My Assignment
        </Link>
        <Link to={"/"} className="ass">
          Chat with Mentor
        </Link>
        <Link to={"/"} className="pronav">
          <RxAvatar />
          ProfileName
          <RiArrowDownSLine />
        </Link>
      </div>
    </nav>
  );
};

export default Header;
