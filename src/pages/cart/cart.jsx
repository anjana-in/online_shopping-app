/* eslint-disable array-callback-return */
import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import CartItem from "../cart/cartItem";
import "./cart.css";
import { useNavigate } from "react-router-dom";

export const Cart=()=>{
    const { cartItems,getTotalCartAmount } = useContext(ShopContext);
   const totalAmunt=getTotalCartAmount ()
   const Navigate= useNavigate()
    return(
        <> <div classname="cart"> 
        <div> <h1>Your cart is Hear</h1></div>
        <div className="cart">
            {PRODUCTS.map((product) => {
                if( cartItems[product.id]!==0){
                    return<CartItem data={product}/>;
                }

            })}
        </div>
        { totalAmunt >0?(
        <div className="checkout">
        <p> Subtotal:${ totalAmunt}</p>
        <button onClick={()=>Navigate ('/')}>Continu Shopping</button>
        <button> Checkout</button>
        </div>
            ) :(<h1>Your Cart is Empty.</h1> ) }         
            </div>
            </>
    )
} 
export default Cart;