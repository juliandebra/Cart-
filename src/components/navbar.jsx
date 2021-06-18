/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


// stateless functional component
// snippet sfc

const NavBar = (props) => {
  console.log("navBar render");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
      <button className="backCart" onClick={() => console.log("Compra Realizada!")}><FontAwesomeIcon className="Cart" icon={faShoppingCart}  /></button>
        Shopping
        <span className="badge badge-pill badge-secondary">
          {props.totalCounters}
         
        </span>
        {/* Agrego un div para colocar el total en NavBar */}
        <div className="Total">Total: ${props.resultado}</div>
      </a>
    </nav>
  );
};



export default NavBar;
