import React from 'react';
import './Services.css';
import SingleService from './SingleService';
import { useState } from 'react';
import { useEffect } from 'react';
import Loader from '../images/loading.gif'

const Services = () => {
    const [services, setServices] = useState([]);
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        fetch("https://lit-island-82681.herokuapp.com/services")
        .then(res => res.json())
        .then(data => {
            setServices(data)
            setLoader(false)
        })
    }, []) 
    return (
        <div id="services" className="container pt-5 pb-5">
            <div className="row">
                <div className="col-md-12 mb-5">
                    <h2 className="font-weight-bold text-center">Provide awesome <span className="green-text">services</span></h2>
                </div>
                {
                    loader ? <div className="col-md-12 text-center"> <img style={{maxWidth:"300px"}} src={Loader} alt=""/> </div>
                    :services.map(service => <SingleService service={service}/>)
                }
            </div>
        </div>
    );
};

export default Services;