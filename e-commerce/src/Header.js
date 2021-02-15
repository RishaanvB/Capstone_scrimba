import { FaShoppingCart } from "react-icons/fa";
import { FcGallery } from "react-icons/fc";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <h1>Pictures</h1>
      </Link>

      <div className="icon-container">
        <div className="cart-container ">
          <Link to="/cart">
            <span>CART</span>
            <FaShoppingCart className={"cart-icon icon"} />
          </Link>
        </div>
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
