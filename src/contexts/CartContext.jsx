import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const setStorageEffect = useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
    console.log('localStorage ', cartItems);
  }, [cartItems]);

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
      }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider };
