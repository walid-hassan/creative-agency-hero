import React from 'react';
import './Work.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import imageOne from '../images/carousel-1.png';
import imageTwo from '../images/carousel-2.png';
import imageThree from '../images/carousel-3.png';
import imageFour from '../images/carousel-4.png';
import imageFive from '../images/carousel-5.png';
 
const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const Work = () => {
    
      const items = [
        <div className="item"><img src={imageOne} /></div>,
        <div className="item"><img src={imageTwo}/></div>,
        <div className="item"><img src={imageThree}/></div>,
        <div className="item"><img src={imageFour}/></div>,
        <div className="item"><img src={imageFive}/></div>,
    ];
    return (
        <AliceCarousel
        autoPlay
        infinite
        mouseTracking
        items={items}
        responsive={responsive}
    />
    );
};

export default Work;