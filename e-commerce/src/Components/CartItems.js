import { BsTrash } from "react-icons/bs";
import { Context } from "../ContextProvider";
import {useContext} from "react";
const CartItems = ({ item }) => {
  const { handleRemoveFromCart } = useContext(Context);

  const handleOpacity = (e) => {
    const { target } = e;
    target.classList.add("active");
  };
  return (
    <section className="cart-item">
      <div className="image-container">
        <img onLoad={handleOpacity} className="photo" src={item.url} alt="" />
      </div>
      <div className="price-container">
        <BsTrash className="trash-icon" onClick={()=>handleRemoveFromCart(item.id)} />
        <p className="price">$5.99</p>
      </div>
    </section>
  );
};

export default CartItems;
