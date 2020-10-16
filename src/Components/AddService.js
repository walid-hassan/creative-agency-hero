import React, { useContext, useEffect, useState } from 'react';
import './AddService.css';
import Logo from '../images/logos/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTag } from '@fortawesome/free-solid-svg-icons'
import { faInbox } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons'
import ServiceForm from './ServiceForm';
import { Link } from 'react-router-dom';
import { userContext } from '../App';

const AddService = () => {
    const [loggedUser, setLoggedUser] = useContext(userContext);
    const [admin, setAdmin] = useState(false);
    useEffect(() => {
        fetch("https://lit-island-82681.herokuapp.com/check-admin", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({email: loggedUser.email})
        })
            .then(res => res.json())
            .then(data => {
                setAdmin(data);
            })
    }, [])
    return (
        <div className="container pt-3">
            <div className="row">
                <div className="col-md-3">
                    <div className="logo">
                        <Link to="/"><img className="img-fluid" src={Logo} alt="" /></Link>
                    </div>
                    <div className="menu mt-5">
                        <Link style={{ textDecoration: "none" }} to="/dashboard/my-profile"><h5 className=" mt-4 "><FontAwesomeIcon icon={faUserTag} /> My profile</h5></Link>
                        {
                            admin ?
                                <>
                                    <Link style={{ textDecoration: "none" }} to="/dashboard/orders"><h5 className=" mt-4"><FontAwesomeIcon icon={faInbox} /> Service List</h5></Link>
                                    <Link style={{ textDecoration: "none" }} to="/dashboard/add-service"><h5 className=" mt-4 text-primary"><FontAwesomeIcon icon={faPlus} /> Add Service</h5></Link>
                                    <Link style={{ textDecoration: "none" }} to="/dashboard/make-admin"><h5 className=" mt-4 "><FontAwesomeIcon icon={faUserPlus} /> Make Admin</h5></Link>
                                </>
                                :
                                <>
                                    <Link style={{ textDecoration: "none" }} to="/dashboard/place-order"><h5 className=" mt-4"><FontAwesomeIcon icon={faCartPlus} /> Order</h5></Link>
                                    <Link style={{ textDecoration: "none" }} to="/dashboard/service-list"><h5 className=" mt-4 "><FontAwesomeIcon icon={faInbox} /> Service list</h5></Link>
                                    <Link style={{ textDecoration: "none" }} to="/dashboard/review"><h5 className=" mt-4 "><FontAwesomeIcon icon={faCommentAlt} /> Make Review</h5></Link>
                                </>
                        }
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="row">
                        <div className="col-md-6 title">
                            <h5 className="text-left font-weight-bold">Add Services</h5>
                        </div>
                        <div className="col-md-6 title">
                            <h5 className="text-right font-weight-bold">Tuhin</h5>
                        </div>
                        <div className="col-md-12 mt-3 serviceForm">
                            <ServiceForm></ServiceForm>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;