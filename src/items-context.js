import React, { useContext, useState } from "react";
import { articleData } from "./data";

const ItemContext = React.createContext();

export const ContextProvider = (props) => {
  const [cartItemList, setCartItemList] = useState([]);
  const [totalCartQuantity, setTotalCartQuantity] = useState(0);

  const addItemToCartHandler = (item) => {
    const cartItemsArray = cartItemList.concat(item);
    setCartItemList(cartItemsArray);
    setTotalCartQuantity(totalCartQuantity + 1);
  };

  const removeItemFromCartHandler = (index) => {
    const removedItemArray = [...cartItemList];
    removedItemArray.splice(index, 1);
    setCartItemList(removedItemArray);
    setTotalCartQuantity(totalCartQuantity - 1);
  };

  const [filteredData, setFilteredData] = useState(articleData);

  const itemFilterHandler = (buttonCategory) => {
    if (buttonCategory !== "All") {
      const filteredItems = articleData.filter((filteredItem) => {
        return filteredItem.category === buttonCategory;
      });
      setFilteredData(filteredItems);
    } else {
      setFilteredData(articleData);
    }
  };

  return (
    <ItemContext.Provider
      value={{
        itemFilterHandler,
        filteredData,
        addItemToCartHandler,
        totalCartQuantity,
        cartItemList,
        removeItemFromCartHandler,
      }}
    >
      {props.children}
    </ItemContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(ItemContext);
};
