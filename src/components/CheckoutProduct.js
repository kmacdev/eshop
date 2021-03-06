import React, { useContext } from 'react';
import CartContext from '../store/cart-context';
import { Rating } from 'react-simple-star-rating';
import './CheckoutProduct.css';

const CheckoutProduct = ({
  id,
  image,
  title,
  rating,
  price,
  alt,
  amount,
}) => {

  const context = useContext(CartContext);
  const {removeProductFromCart} = context;
  
  const removeFromCartHandler = () => {
    removeProductFromCart(id);
  }

  const capsTitle = title
    .split(' ')
    .map(word => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(' ');

  return (
    <div id={id} className='checkoutProduct'>
      <img src={image} alt={alt} />
      <div className='checkoutProduct__info'>
        <div className='checkoutProduct__heading'>
          <p className='checkoutProduct__title'>{`${capsTitle} x${amount}`}</p>
          <p className='checkoutProduct__price'>{`$${price}`}</p>
        </div>
        <div className='checkoutProduct__rating'>
          <Rating
            initialValue={rating}
            size={24}
            readonly={true}
            emptyColor={'#ECECEC'}
            allowHalfIcon={true}
          />
        </div>
        <button
          className='checkoutProduct__button'
          onClick={removeFromCartHandler}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
