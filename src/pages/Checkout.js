import React, { useContext } from 'react';
import Banner from '../images/banner.jpg';
import CheckoutProduct from '../components/CheckoutProduct';
import Subtotal from '../components/Subtotal';
import CartContext from '../store/cart-context';
import './Checkout.css';

const Checkout = props => {
  const context = useContext(CartContext);
  const { cart } = context;


  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img src={Banner} alt='banner ad' className='checkout__ad' />
        <div>
          <div className='checkout__labels'>
            <h2 className='checkout__title'>Your Shopping Cart</h2>
            <p className='checkout__priceLabel'>Price</p>
          </div>
          <hr />
          <div>
            {cart ? (
              cart.map(item => {
                return (
                  <CheckoutProduct
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                    image={item.image}
                    amount={item.amount}
                    alt={item.imageAlt}
                  />
                );
              })
            ) : (
              <p>Your cart is empty</p>
            )}
          </div>
        </div>
      </div>
      <div className='checkout__right'>
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
