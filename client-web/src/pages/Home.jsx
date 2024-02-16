// src/Dashboard.js
import React from 'react';
import {  Container } from '@mui/material';

// import Category from '../components/Category';
// import SubCategory from '../components/SubCategory';
import Navbar from '../components/Navbar';
import CustomCarousel from '../components/CustomCarousel';
// import Category2 from '../components/Category2';
import FourCardGridCategory from '../components/FourCardGridCategory';
import FourCardGridSubCategory from '../components/FourCardGridSubCategory';


const Home = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <CustomCarousel />
        {/* <Category /> */}
        {/* <Category2 /> */}
        {/* <SubCategory /> */}
        <FourCardGridCategory />
        <FourCardGridSubCategory />
      </Container>
    </div>
  );
};

export default Home;
