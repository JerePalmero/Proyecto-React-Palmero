import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import carrito from "../../assets/images/carrito.png";
import CartWidget from "../CartWidget/CartWidget";


function NavBar() {
  return( 
    <nav class="nav-cont">
        <div>
            <img src={logo} alt="logo" class="logo-nav" width="150px"/>
        </div>
        <ul class="cont-nav">
        <Link to="/"><li>
                <a href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Viajes
                </a>
            </li>
            </Link>
            <li>
                <a href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Nosotros
                </a>
            </li>
            <li>
                <a href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Contactos
                </a>
            </li>
        </ul>
        <Link to="/cart"><img src={carrito} width="25px" alt="" /></Link>
    </nav>
  

      )

}

export default NavBar;
