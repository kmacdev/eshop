import React, { useContext } from 'react';
import CurrencyFormat from 'react-currency-format';
import CartContext from '../store/cart-context';
import './Subtotal.css';

const Subtotal = props => {
  const context = useContext(CartContext);
  const { cart } = context;
  const itemCount = cart.reduce(
    (count, item) => item.amount + count,
    0,
  );
  const subtotal = cart.reduce(
    (amount, item) => item.price + amount,
    0,
  );

  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={value => (
          <React.Fragment>
            <p>
              Subtotal ({itemCount} items):{' '}
              <strong>{`$${subtotal}`}</strong>
            </p>
            <small className='subtotal__gift'>
              <input type='checkbox' />
              This order contains a gift.
            </small>
          </React.Fragment>
        )}
        decimalScale={2}
        value={subtotal}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
