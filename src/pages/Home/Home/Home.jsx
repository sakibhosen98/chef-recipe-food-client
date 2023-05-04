// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Home.css'
import img from '../../../assets/banner-1.jpg'
import Category from '../Category/Category';
import DisplaySection from '../../../Sections/DisplaySection/DisplaySection';
import FeatureSection from '../../../Sections/FeatureSection/FeatureSection';
import DownloadPdf from '../../DownloadPdf/DownloadPdf';

const Home = () => {
  return (
    <div className='container bg'>
        <div className='d-flex flex-sm-column-reverse flex-md-row justify-content-center align-items-center mb-5'>
        <div className='w-50 text-center'>
          <h2 className='title'>The <span className='text-warning'>Recipe</span> Food</h2>
          <p>A recipe is the most fundamental <br></br> configuration element within the organization</p>
          <p>A recipe is the most fundamental <br /> configuration element within the organization</p>
          <p>A recipe is the most fundamental <br />configuration element within the organization</p>
        </div>
        <img className='img-fluid w-50' src={img} alt="" />
    </div>
      <Category></Category>
      <DisplaySection></DisplaySection>
      <FeatureSection></FeatureSection>
      <DownloadPdf></DownloadPdf>
    </div>
  );
};

export default Home;