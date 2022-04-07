import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../Database/Firebase';
import AuthContext from '../store/auth-context';
import StorefrontIcon from '@material-ui/icons/Storefront';

import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const context = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const { isLogin, login, logout } = context;

  const signIn = e => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        if(result) {
          setEmail('');
          setPassword('');
          login();
          navigate('/');
        }
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
        if (isLogin) {
          logout();
        };
        console.log(error);
      });
  };

  const register = e => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        if (userCredential) {
          setEmail('');
          setPassword('');
          login();
          navigate('/');
        }
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        if (isLogin) {
          logout();
        };
        console.log(error);
      });
  };

  return (
    <div className='login'>
      <div className='login__logo'>
        <StorefrontIcon
          className='login__logoImage'
          fontSize='large'
        />
        <h2 className='login__logoTitle'>eSHOP</h2>
      </div>
      <div className='login__container'>
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type='text'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <button
            type='submit'
            className='login__signInButton'
            onClick={signIn}
          >
            Sign In
          </button>
        </form>

        <p>
          By signing in, you agree to the eShop Website Conditions of
          Use & Sale. Please see our Privacy Notice, our Cookies
          Notice, and our Interest-Based Ads Notice.
        </p>

        <button className='login__registerButton' onClick={register}>
          Create your eShop Account
        </button>
      </div>
    </div>
  );
};

export default Login;