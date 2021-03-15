import React, { useEffect, useState } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [photos, setPhotos] = useState([]);
  const [cartItems, setcartItems] = useState([]);

  const url =
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error on retreiving data!!! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setPhotos(data));
    console.log("useEffect in ContextProvider has ended");
  }, []);

  const toggleFavorite = (id) => {
    const updatedArray = photos.map((photo) => {
      if (photo.id === id) {
        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });
    setPhotos(updatedArray);
  };

  const addToCart = (id) => {
    const addedItem = photos.find((photo) => photo.id === id);
    const updatedArray = [...cartItems, addedItem];
    setcartItems(updatedArray);
  };

  const handleRemoveFromCart = (id) => {
    const updatedArray = cartItems.filter((photo) => photo.id !== id);
    setcartItems(updatedArray);
  };

  return (
    <Context.Provider
      value={{
        photos,
        toggleFavorite,
        addToCart,
        cartItems,
        handleRemoveFromCart,
        setcartItems
      }}>
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
