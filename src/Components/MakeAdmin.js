import React, { useContext, useEffect, useState } from 'react';
import './AddService.css';
import Logo from '../images/logos/logo.png'
import { faUserTag } from '@fortawesome/free-solid-svg-icons'
import { faInbox } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons'
import ServiceForm from './ServiceForm';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { userContext } from '../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MakeAdmin = () => {
    const { register, handleSubmit, watch, errors, reset } = useForm();
    const [message, setMessage] = useState('');
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
                reset()
            })
    }, [])
    const onSubmit = data => {
        fetch('https://lit-island-82681.herokuapp.com/add-admin', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                if (data){
                    setMessage("Admin added successfully.")
                }
            })
            .catch(error => {
                console.error(error)
            })
    };
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
                                    <Link style={{ textDecoration: "none" }} to="/dashboard/add-service"><h5 className=" mt-4 "><FontAwesomeIcon icon={faPlus} /> Add Service</h5></Link>
                                    <Link style={{ textDecoration: "none" }} to="/dashboard/make-admin"><h5 className=" mt-4 text-primary"><FontAwesomeIcon icon={faUserPlus} /> Make Admin</h5></Link>
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
                            <h5 className="text-left font-weight-bold">Make Admin</h5>
                        </div>
                        <div className="col-md-6 title">
                            <h5 className="text-right font-weight-bold">{loggedUser.name}</h5>
                        </div>
                        <div className="col-md-12 mt-3 serviceForm">
                            <form class="d-flex align-items-start" onSubmit={handleSubmit(onSubmit)}>
                                    <input style={{maxWidth:"50%"}} className="form-control contactFormInput mb-2" type="email" name="email" placeholder="Your email-address" ref={register({ required: true })} />
                                    <input style={{
                                            marginTop: "3px",
                                            height: "48px",
                                            width: "100px"
                                    }} class="btn btn-success pl-3 pr-3" type="submit" value="Send" /> <br/>
                                    {errors.email && <p className="text-danger ml-2">Please write a valid e-mail address</p>}
                            </form>
                            {
                                message && <h6 className="text-success font-weight-bold">{message}</h6>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;