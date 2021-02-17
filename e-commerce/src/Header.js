import { RiShoppingCartLine, RiShoppingCartFill } from "react-icons/ri";

import { FcGallery } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./ContextProvider";
function Header() {
  const { cartItems } = useContext(Context);

  const displayCart = () => {
    const emptyCart = cartItems.length === 0 ? true : false;

    if (emptyCart) {
      return (
        <Link to="/cart">
          <span>CART</span>
          <RiShoppingCartLine className={"cart-icon icon"} />
        </Link>
      );
    }
    return (
      <Link to="/cart">
        <span>CART</span>
        <span className="amount-items-in-cart ">
          <div>{cartItems.length}</div>
        </span>
        <RiShoppingCartFill className={"cart-icon icon"} />
      </Link>
    );
  };

  console.log(cartItems.length);

  return (
    <header className="header">
      <Link to="/">
        <h1>Pix</h1>
      </Link>

      <div className="icon-container">
        <div className="cart-container ">{displayCart()}</div>
        <div className="gallery-container ">
          <Link to="/">
            <span>GALLERY</span>
            <FcGallery className={"gallery-icon icon"} />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
