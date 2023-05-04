import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../assets/banner-1.jpg'
import img2 from '../../assets/banner-2.jpg'

const DisplaySection = () => {
  return (
   <div className='mb-5'>
      <h2 className='text-center'>This is display <span className='title'>recipe items</span> </h2>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Yotam Ottolenghi</h3>
          <p>Yotam Ottolenghi's vegetable sides are creative</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Julia Child</h3>
          <p>Preheat the oven to 350°F (180°C). Cream the butter.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Ina Garten</h3>
          <p>
          Ina Garten's perfect roast chicken is a classic comfort.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   </div>
  );
};

export default DisplaySection;