import React from 'react';
import { Link } from 'react-router-dom';
import './SingleService.css';

const SingleService = ({ service }) => {
    const {_id, image, title, description } = service;
    return (
        <div className="col-md-4">
            <Link style={{textDecoration:"none"}} to={`/dashboard/place-order/${_id}`}>
                <div className="text-center service p-5">
                    <img className="img-rotate" src={`data:image/jpeg;base64,${image.img}`} alt="" />
                    <h4 className="font-weight-bold mt-3 ">{title}</h4>
                    <p className="font-weight-light mt-3 ">{description}</p>
                </div>
            </Link>
        </div>
    );
};

export default SingleService;