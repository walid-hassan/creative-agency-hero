import React from 'react';
import './OurWorks.css';
import imageOne from '../images/carousel-1.png';
import imageTwo from '../images/carousel-2.png';
import imageThree from '../images/carousel-3.png';
import imageFour from '../images/carousel-4.png';
import imageFive from '../images/carousel-5.png';
import Work from './Work';

const OurWorks = () => {
    const works = [imageOne, imageTwo, imageThree, imageFour, imageFive]
    return (
        <section id="works" className=" ourWorks mt-5 pt-5">
            <div className="container">
                <div className="col-md-12 mb-5">
                    <h2 style={{color:"white"}} className="font-weight-bold text-center">Here are some of <span className="green-text">our works</span></h2>
                </div>
                <div className="col-md-12 mb-5">
                    <Work/>
                </div>
            </div>
        </section>
    );
};

export default OurWorks;