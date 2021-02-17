import { useState, useContext } from "react";
import { TiHeartOutline, TiHeartFullOutline } from "react-icons/ti";
import { RiShoppingCartLine } from "react-icons/ri";
import { FiPlus } from "react-icons/fi";
import { Context } from "./ContextProvider";
import PropTypes from "prop-types";

function Photo({ url, isFavorite, photoId, photo }) {
  const {
    toggleFavorite,
    addToCart,
    cartItems,
    handleRemoveFromCart,
  } = useContext(Context);
  const [isHovered, setIsHovered] = useState(false);

  const handleOpacity = (e) => {
    const { target } = e;
    target.classList.add("active");
  };

  const showIfNotFavorite = !isFavorite && (
    <TiHeartOutline
      onClick={(e) => toggleFavorite(photoId)}
      className="heart-icon hover-icon"
    />
  );

  const showIfFavorite = isFavorite && (
    <TiHeartFullOutline
      onClick={(e) => toggleFavorite(photoId)}
      className="heart-full-icon hover-icon"
    />
  );

  const showCartIcon = () => {
    const isItemAdded = cartItems.some((photo) => photo.id === photoId);

    if (isItemAdded) {
      return (
        <RiShoppingCartLine
          onClick={() => handleRemoveFromCart(photoId)}
          className="cart-add-icon hover-icon"
        />
      );
    } else if (isHovered) {
      return (
        <FiPlus
          onClick={() => addToCart(photoId)}
          className="add-icon hover-icon"
        />
      );
    }
  };
  return (
    <div
      id={photoId}
      className="img-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      {isHovered && <div>{showIfNotFavorite}</div>}
      <div>
        {showIfFavorite}
        {showCartIcon()}
      </div>
      <img onLoad={handleOpacity} className="photo" src={url} alt="" />
    </div>
  );
}

Photo.propTypes = {
  url: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool,
  photoId: PropTypes.string.isRequired,
};

export default Photo;
