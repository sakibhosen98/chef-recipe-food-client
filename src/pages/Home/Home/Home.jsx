// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Home.css'
import img from '../../../assets/banner-1.jpg'
import Category from '../Category/Category';

const Home = () => {
  return (
    <div className='container'>
        <div className='d-flex justify-content-center align-items-center'>
        <div className='w-50 text-center'>
          <h2 className='title'>The <span className='text-warning'>Recipe</span> Food</h2>
          <p>A recipe is the most fundamental <br></br> configuration element within the organization</p>
          <p>A recipe is the most fundamental <br /> configuration element within the organization</p>
          <p>A recipe is the most fundamental <br />configuration element within the organization</p>
        </div>
        <img className='img-fluid w-50' src={img} alt="" />
    </div>
      {/* <Category></Category> */}
    </div>
  );
};

export default Home;