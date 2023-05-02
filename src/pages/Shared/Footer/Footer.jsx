import React from 'react';
import './Footer.css'
import { Button } from 'react-bootstrap';
import { FaFacebook, FaGoogle, FaRegComment, FaTwitter } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className='bg-dark p-5'>
        <div className='text-center p-5'>
        <h3 className='text-white p-2 fw-semibold'>Let's talk! <span>support@chefrecipefood.com</span></h3>
        <Button className='btn-footer px-5' size="lg">
          Contact us
        </Button>
        <div className='p-3'>
            <FaFacebook className='icon'></FaFacebook>
            <FaTwitter className='icon'></FaTwitter>
            <FaRegComment className='icon'></FaRegComment>
            <FaGoogle className='icon'></FaGoogle>
        </div>
        <p className='text-white'><small>Copyright All rights resorved</small></p>
        </div>
    </div>
  );
};

export default Footer;