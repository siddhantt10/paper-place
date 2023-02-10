import React from "react";
import "./Checkout.css";
import { useParams } from "react-router-dom";

function Checkout() {
  const { id } = useParams();
  return(
    <div>{id}</div>
  )
  
}

export default Checkout;
