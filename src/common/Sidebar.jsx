import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link} from 'react-router-dom';
import './Sidebar.css'

export default () => {
  return (
    <>
    <Menu>
      <Link to='/home'>
         Home
      </Link>
      <Link to='/home'>
         Contact Us
      </Link>
      <Link to='/home'>
          About Us
      </Link>
      <Link to='/home'>
         Careers
      </Link>
      <Link to='/home'>
         
      Privacy Policy
      </Link>
      
    </Menu>
    </>
  );
};