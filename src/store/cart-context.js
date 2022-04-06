import React, { useEffect, useState } from 'react';
import { Products } from './products';

const CartContext = React.createContext({
  cart: [],
  addProductToCart: (id) => {},
  removeProductFromCart: id => {},
});
 
export const CartContextProvider = props => {
  const [cartProducts, setCartProducts] = useState([]);

  const addProductToCartHandler = id => {
    const addProduct = Products.filter(obj => obj.id === id);//[{}]
    const addProductCopy = Object.assign({}, ...addProduct);//{}
    setCartProducts(prev => {
      const existingProductObj = prev.filter(obj => obj.id === id);//[{}]
      const remainingProductsObj = prev.filter(obj => obj.id !== id);//[{}]
      if (existingProductObj.length) {
        existingProductObj[0].amount += 1;
        if (remainingProductsObj.length) {
          return [...remainingProductsObj, ...existingProductObj];
        } else {
          return existingProductObj;
        }
      } else {
        return [...prev, addProductCopy];
      }
    });
  };

  useEffect(() => {
    console.log(cartProducts)
  }, [cartProducts])

  const removeProductFromCartHandler = ({ id }) => {
    setCartProducts(prev => prev.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cart: cartProducts,
        addProductToCart: addProductToCartHandler,
        removeProductFromCart: removeProductFromCartHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
