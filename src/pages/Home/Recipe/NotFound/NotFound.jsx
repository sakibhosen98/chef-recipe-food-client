import React from 'react';
import img from '../../../../assets/error.jpg'

const NotFound = () => {
  return (
    <div>
        <div className='text-center mt-5'>
          <h1 className='fw-bold text-danger'>404 Not Found</h1>
          <img className='w-50' src={img} alt="" />
        </div>
    </div>
  );
};

export default NotFound;