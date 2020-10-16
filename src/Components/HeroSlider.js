import React from 'react';
import PeoplesImg from '../images/logos/Frame.png';
import './HeroSlider.css'
const HeroSlider = () => {
    return (
        <div className="container">
            <div className="row d-flex justify-content-center align-items-center heroSlider">
                <div className="col-md-5">
                    <h1 className="font-weight-bold">Let’s Grow Your<br />
                    Brand To The<br />
                    Next Level<br />
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Purus commodo <br />ipsum duis laoreet maecenas. Feugiat
                    </p>
                    <a href="#services" className="btn btn-dark"> Hire us</a>
                </div>
                <div className="  col-md-7">
                    <img className="img-fluid" src={PeoplesImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default HeroSlider;