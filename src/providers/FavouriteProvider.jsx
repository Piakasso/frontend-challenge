import { createContext, useState } from "react";

export const FavouriteContext = createContext({
  list: [],
});

export const FavouriteProvider = ({ children }) => {
  const [list, setList] = useState([]);
  const addFavourite = (newItem) => setList([...list, newItem]);
  const deleteFavourite = (id) =>
    setList(list.filter((item) => item.id !== id));

  return (
    <FavouriteContext.Provider value={{ list, addFavourite, deleteFavourite }}>
      {children}
    </FavouriteContext.Provider>
  );
};
