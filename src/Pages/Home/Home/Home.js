import React from 'react';
import Banner from '../Banner/Banner';
import ProductCategories from '../ProductCategories/ProductCategories';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
           <Banner/>
           {/* <AdvertisedItems/> */}
           <ProductCategories/>
           <Testimonials/>
        </div>
    );
};

export default Home;