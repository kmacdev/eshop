import React, { useContext } from 'react';
import { Rating } from 'react-simple-star-rating';
import CartContext from '../store/cart-context';
import './Product.css';

const Product = ({ id, title, image, imageAlt, price, rating }) => {
  const context = useContext(CartContext);
  const { addProductToCart } = context;
  
  let zero = 0;
  let dollar = Math.floor(price) || 0;
  let cents =
  (price - dollar).toFixed(2).split('.')[1] || zero.toFixed(2);
  
  const addToCartHandler = () => {
    addProductToCart(id);
  };

  return (
    <div id={id} className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <div className='product__price'>
          <small>$</small>
          <strong>{dollar}</strong>
          <small>{cents}</small>
        </div>
        <div className='product__rating'>
          <Rating
            initialValue={rating}
            size={24}
            readonly={true}
            emptyColor={'#ECECEC'}
            allowHalfIcon={true}
          />
        </div>
      </div>
      <img src={image} alt={imageAlt} />
      <button onClick={addToCartHandler}>Add to cart</button>
    </div>
  );
};

export default Product;
