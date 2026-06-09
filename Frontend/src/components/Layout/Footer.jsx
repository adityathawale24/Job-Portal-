import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

function Footer() {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Team 44</div>
      <div>
        <Link >
          <FaFacebookF />
        </Link>
        <Link >
          <FaYoutube />
        </Link>
        <Link
         
        >
          <FaLinkedin />
        </Link>
        <Link
          
        >
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
