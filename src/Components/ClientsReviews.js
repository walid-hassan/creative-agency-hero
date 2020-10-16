import React, { useEffect } from 'react';
import { useState } from 'react';
import clientOne from "../images/customer-1.png";
import clientTwo from "../images/customer-2.png";
import clientThree from "../images/customer-3.png";
import Review from './Review';
import Loader from '../images/loading.gif'

const ClientsReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        fetch("https://lit-island-82681.herokuapp.com/reviews")
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                setLoader(false)
            })
    }, []) 
    return ( 
        <div className="container mt-5 pt-5 pb-5">
            <div className="row">
                <div className="col-md-12 mb-5">
                    <h2 className="font-weight-bold text-center">Clients <span className="green-text">Feedback</span></h2>
                </div>
                {
                    loader ? <div className="col-md-12 text-center"> <img style={{ maxWidth: "300px" }} src={Loader} alt="" /> </div>
                    :
                    reviews.map(review => <Review review={review} />)
                }
            </div>
        </div>
    );
};

export default ClientsReviews;