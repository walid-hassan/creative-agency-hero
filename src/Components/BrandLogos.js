import React from 'react';
import { Container } from 'react-bootstrap';
import slackLogo from '../images/logos/slack.png';
import googleLogo from '../images/logos/google.png';
import uberLogo from '../images/logos/uber.png';
import netFlixLogo from '../images/logos/netflix.png';
import airbnbLogo from '../images/logos/airbnb.png';
import './BrandLogos.css';

const BrandLogos = () => {
    return (
        <div className="container pt-5 pb-5">
            <div className="row mt-5">
                <div className="col-md-1">
                </div>
                <div className="col-md-2 brandLogos text-center">
                    <img className="img-fluid" src={slackLogo} />
                </div>
                <div className="col-md-2 brandLogos text-center">
                    <img className="img-fluid" src={googleLogo} />
                </div>
                <div className="col-md-2 brandLogos text-center">
                    <img className="img-fluid" src={uberLogo} />
                </div>
                <div className="col-md-2 brandLogos text-center">
                    <img className="img-fluid" src={netFlixLogo} />
                </div>
                <div className="col-md-2 brandLogos text-center">
                    <img className="img-fluid" src={airbnbLogo} />
                </div>
                <div className="col-md-1">
                </div>
            </div>
        </div>
    );
};

export default BrandLogos;