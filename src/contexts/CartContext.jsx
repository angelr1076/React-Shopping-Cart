import { createContext, useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [itemAdded, setItemAdded] = useState(false);

  const totalPrice = useMemo(() => {
    return cartItems.reduce(
      (sum, item) => sum + item.quantity * item.product.price,
      0
    );
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, quantityToAdd) => {
    const numToAdd = Number(quantityToAdd);

    setCartItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(
        item => item.product.id === product.id
      );

      if (existingItemIndex !== -1) {
        return prevItems.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + numToAdd }
            : item
        );
      } else {
        return [...prevItems, { product, quantity: numToAdd }];
      }
    });
    setItemAdded(true);
  };

  const removeFromCart = productToRemove => {
    setCartItems(prevItems =>
      prevItems.filter(item => item.product.id !== productToRemove.id)
    );
  };

  const updateQuantity = (productToUpdate, newQuantity) => {
    const numToAdd = Number(newQuantity);
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.product.id === productToUpdate.id
          ? { ...item, quantity: numToAdd }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalPrice,
        itemAdded,
        setItemAdded,
      }}>
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export { CartProvider };
