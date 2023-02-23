import React, { useContext } from "react";
import AppContext from "@context/AppContext";
import close from "@icons/icon_close.png";
import "@styles/OrderItem.scss";

const OrderItem = ({ product }) => {
  const { removeFromCart } = useContext(AppContext);

  return (
    <div className="OrderItem">
      <figure>
        <img src={product.images[0]} alt="product" />
      </figure>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <img
        src={close}
        alt="close"
        onClick={() => {
          removeFromCart(product);
        }}
      />
    </div>
  );
};

export default OrderItem;
