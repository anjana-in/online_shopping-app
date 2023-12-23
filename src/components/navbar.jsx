import { ShoppingCart,  } from "phosphor-react";
import React from "react";
import { Link } from "react-router-dom";
import "../components/navBar.css";
// import{ShoppingCart} from"phosphor-react;
export const NavBar=()=>{
    return(
        <>
       <div className="navbar">
       <div className="links">
       <Link className="links a" to="/"> Shop</Link>
       <Link className="links a" to="/cart"> Cart<ShoppingCart weight={10}/></Link>
       <Link className="links a" to="/cart"> <ShoppingCart size={32}/></Link>
       </div>
       </div>
        </>
    )
}
export default NavBar;