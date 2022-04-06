import React from 'react';
import { Products } from '../store/products';
import Product from '../components/Product';
import homeBG from '../images/homeBG.jpg';
import './Home.css';

const Home = props => {

  return (
    <div className='home'>
      <img
        src={homeBG}
        alt='online store background'
        className='home__image'
      />
      <div className='grid__container'>
        <div className='home__grid'>
          {Products.map(product => (
            <Product
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              rating={product.rating}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
