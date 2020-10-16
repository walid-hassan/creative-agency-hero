import React from 'react';
import BrandLogos from './BrandLogos';
import ClientsReviews from './ClientsReviews';
import ContactUs from './ContactUs';
import Header from './Header';
import OurWorks from './OurWorks';
import Services from './Services';

const Home = () => {
    return (
        <section className="home">
            <Header />
            <BrandLogos />
            <Services/>
            <OurWorks/>
            <ClientsReviews/>
            <ContactUs/>
        </section>
    );
};

export default Home;