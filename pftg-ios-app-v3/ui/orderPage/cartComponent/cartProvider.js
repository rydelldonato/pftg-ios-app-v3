import React, { useState } from "react";
import CartContext from "./cartContext";

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const itemExists = cartItems.some((cartItem) => {
      return cartItem.name === item.name;
    });

    if (itemExists) {
      const updatedCartItems = cartItems.map((cartItem) => {
        if (cartItem.name === item.name) {
          return { ...cartItem, quantity: (cartItem.quantity || 0) + 1 };
        }
        return cartItem;
      });

      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, item]);
    }
  };

 // Function to update cart items in the context
const updateCartItems = (updatedCartItems) => {
  // Call a function from your CartContext to update the cart items
  setCartItems(updatedCartItems);
};

  const removeFromCart = (item) => {
    const updatedCartItems = cartItems.filter(
      (cartItem) => cartItem.name !== item.name
    );
    setCartItems(updatedCartItems);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateCartItems,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
