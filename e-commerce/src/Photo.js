import { useState, useContext } from "react";
import { TiHeartOutline, TiHeartFullOutline } from "react-icons/ti";
import { RiShoppingCartLine } from "react-icons/ri";
import { FiPlus } from "react-icons/fi";
import { Context } from "./ContextProvider";
import PropTypes from "prop-types";

function Photo({ url, isFavorite, photoId, photo }) {
  const { toggleFavorite, addToCart, cartItems } = useContext(Context);
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

  const showCartIcon = () =>
    cartItems.some((obj) => obj.id === photoId) ? true : false;

  return (
    <div
      id={photoId}
      className="img-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      {isHovered && (
        <div>
          {showIfNotFavorite}
          {!showCartIcon() && (
            <FiPlus
              onClick={(e) => addToCart(photoId)}
              className="add-icon hover-icon"
            />
          )}
        </div>
      )}
      <div>{showIfFavorite}</div>
      {showCartIcon() && (
        <RiShoppingCartLine className="cart-add-icon hover-icon" />
      )}

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
