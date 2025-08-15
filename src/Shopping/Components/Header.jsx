import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Header.css";

const Header = () => {
  return (
    <div className="HeaderSection">
      <div className="left">
        <h4>shoppify</h4>
      </div>

      <div className="centre">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search Items Here"
        />
        <ul>
          <li>Men</li>
          <li>Woman</li>
          <li>Kid</li>
          <li>Family</li>
        </ul>
      </div>

      <div className="right">
        <div className="signin">
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div className="cart">
          <FontAwesomeIcon className="button" icon={faCartShopping} />
        </div>
      </div>
    </div>
  );
};

export default Header;
