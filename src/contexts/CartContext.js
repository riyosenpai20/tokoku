import React, {createContext, useState, useEffect} from 'react';

export const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [itemAmount, setItemAmount] = useState(0);
    
    const addToCart = (product, id) => {
        const newItem = { ...product, amount: 1 };
        const cartItem = cart.find(item => {
            return item.id === id;
        } );
        
        if (cartItem) {
            const newCart = [...cart].map((item) => {
                if (item.id === id) {
                    return { ...item, amount:cartItem.amount + 1};
                } else {
                    return item;
                }
            });
            setCart(newCart);
        } else {
            setCart([...cart, newItem])
        }
    };

    // remove from cart
    const removeFromCart = (id) => {
        const newCart = cart.filter((item) => {
            return item.id !== id;
        });
        setCart(newCart);
    };

    // Clear Cart
    const clearCart = () => {
        setCart([]);
    };

    // Increase Ammount
    const increaseAmount = (id) => {
        const cartItem = cart.find((item) => item.id === id);
        addToCart(cartItem, id);
    };

    // Decrease Ammount
    const decreaseAmount = (id) => {
        const cartItem = cart.find((item) => {
            return item.id === id;
        });
        if (cartItem) {
            const newCart = cart.map((item) => {
                if (item.id === id) {
                    return {...item, amount: cartItem.amount - 1};
                } else {
                    return item;
                }
            });
            setCart(newCart);
        } 

        if (cartItem.amount < 2) {
                removeFromCart(id);
            }
    };

  return <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart, increaseAmount, decreaseAmount, itemAmount}}> {children}
  </CartContext.Provider>;
};

export default CartProvider;