import { useContext, useState } from "react";
import { Context } from "../ContextProvider";
import CartItems from "./CartItems";
function Cart() {
  const { cartItems, setcartItems } = useContext(Context);
  const [order, setOrder] = useState(false);
  const totalCost = cartItems.length * 5.99;
  const displayCost = totalCost.toLocaleString("nl-NL", {
    style: "currency",
    currency: "EUR",
  });
  const cartContent = cartItems.map((item) => (     
    <CartItems className="cart-items" item={item} key={item.id} />
  ));
  console.log(cartItems === true);
  const handleOrder = () => {
    setOrder((prev) => !prev);
    setTimeout(() => {
      console.log("Order Placed");
      setcartItems([]);

      setOrder((prev) => !prev);
    }, 3000);
  };

  return (
    <>
      <h1 className="checkout">Checkout</h1>
      <div className="cart-items-grid">{cartContent}</div>
      <h2>Total: {displayCost}</h2>
      {cartItems.length > 0 && (
        <button onClick={handleOrder} className="btn-order">
          {order ? "Ordering..." : "Order Now"}
        </button>
      )}
    </>
  );
}

export default Cart;
