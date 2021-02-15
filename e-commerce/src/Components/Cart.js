import { useContext } from "react";
import { Context } from "../ContextProvider";
import Photo from "../Photo";
function Cart() {
  const { addToCart, cartItems } = useContext(Context);


  const cartContent = cartItems.map((item) => (
    <Photo
      key={item.id}
      url={item.url}
      isFavorite={item.isFavorite}
      photoId={item.id}
    />
  ));

  return (
    <>
      <h1>Cart Page</h1>;
      <div className="img-grid">{cartContent}</div>
    </>
  );
}

export default Cart;
