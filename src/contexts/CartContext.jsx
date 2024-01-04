import { createContext, useState } from 'react';

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantityToAdd) => {
    setCartItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(
        item => item.product.id === product.id
      );

      if (existingItemIndex !== -1) {
        return prevItems.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + quantityToAdd }
            : item
        );
      } else {
        return [...prevItems, { product, quantity: quantityToAdd }];
      }
    });
  };

  const removeFromCart = productToRemove => {
    setCartItems(prevItems =>
      prevItems.filter(item => item.product.id !== productToRemove.id)
    );
  };

  const updateQuantity = (productToUpdate, newQuantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.product.id === productToUpdate.id
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider };
