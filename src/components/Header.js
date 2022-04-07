import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../store/cart-context';
import AuthContext from '../store/auth-context';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

import './Header.css';

const Header = props => {
  const context = useContext(CartContext);
  const auth = useContext(AuthContext);

  const { cart } = context;
  const { isLogin, logout } = auth;

  let itemCount = cart.reduce(
    (amount, item) => (amount += item.amount),
    0,
  );

  return (
    <div className='header'>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <div className='header__logo'>
          <StorefrontOutlinedIcon
            className='header__logoImage'
            fontSize='large'
          />
          <h2 className='header__logoTitle'>eSHOP</h2>
        </div>
      </Link>
      <div className='header__search'>
        <input type='text' className='header__searchInput' />
        <SearchOutlinedIcon className='header__searchIcon' />
      </div>
      <nav className='header__nav'>
        <div className='nav__item'>
          <span className='nav__itemLineOne'>Hello Guest</span>
          {!isLogin && (
            <Link
              to='/login'
              style={{ textDecoration: 'none', color: 'white' }}
            >
              <span className='nav__itemLineTwo'>Sign In</span>
            </Link>
          )}
          {isLogin && (
            <Link
              to='/'
              style={{
                textDecoration: 'none',
                color: 'white',
                fontWeight: '700',
              }}
              onClick={logout}
            >
              Sign Out
            </Link>
          )}
        </div>
        <div className='nav__item'>
          <span className='nav__itemLineOne'>Your</span>
          <span className='nav__itemLineTwo'>Shop</span>
        </div>

        <Link to='/checkout' style={{ textDecoration: 'none' }}>
          {
            <div className='nav__itemCart'>
              <ShoppingCartOutlinedIcon fontSize='large' />
              <span className='nav__itemLineTwo nav__cartCount'>
                {itemCount}
              </span>
            </div>
          }
        </Link>
      </nav>
    </div>
  );
};

export default Header;
