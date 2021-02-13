import React, { useEffect, useState } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [photos, setPhotos] = useState([]);
  console.log(photos);
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
  }, []);

  return (
    <Context.Provider value={{ photos, setPhotos }}>
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
