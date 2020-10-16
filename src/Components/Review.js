import React from 'react';
import './Review.css';

const Review = ({review}) => {
    const {pic, name, company, des} = review;
    return (
        <div className="col-md-4 mb-3">
            <div className="singleReview">
                <div className="row">
                    <div className="col-md-3 client-pic">
                        <img className="img-fluid" src={pic} alt=""/>
                    </div>
                    <div className="col-md-7">
                        <strong>{name}</strong><br/>
                        <strong>{company}</strong>
                    </div>
                    <div className="col-md-12 mt-2">
                        <small>{des}</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;