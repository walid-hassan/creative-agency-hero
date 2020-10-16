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
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import ServiceForm from './ServiceForm';
import OrderForm from './OrderForm';
import { Link, useHistory, useParams } from 'react-router-dom';
import { userContext } from '../App';

const Order = () => {
    const history = useHistory();
    const {id} = useParams();
    const [service, setService] = useState([]);
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
    useEffect(() => {
        if(admin){
            history.push("/dashboard/my-profile");
        }
    }, [admin])
    useEffect(() => {
        fetch("https://lit-island-82681.herokuapp.com/services")
        .then(res => res.json())
        .then(data => {
            const selectedService = data.find(ser => ser._id === id);
            setService(selectedService);
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
                                    <Link style={{ textDecoration: "none" }} to="/dashboard/add-service"><h5 className=" mt-4 "><FontAwesomeIcon icon={faPlus} /> Add Service</h5></Link>
                                    <Link style={{ textDecoration: "none" }} to="/dashboard/make-admin"><h5 className=" mt-4 "><FontAwesomeIcon icon={faUserPlus} /> Make Admin</h5></Link>
                                </>
                                :
                                <>
                                    <Link style={{ textDecoration: "none" }} to="/dashboard/place-order"><h5 className=" mt-4 text-primary"><FontAwesomeIcon icon={faCartPlus} /> Order</h5></Link>
                                    <Link style={{ textDecoration: "none" }} to="/dashboard/service-list"><h5 className=" mt-4 "><FontAwesomeIcon icon={faInbox} /> Service list</h5></Link>
                                    <Link style={{ textDecoration: "none" }} to="/dashboard/review"><h5 className=" mt-4 "><FontAwesomeIcon icon={faCommentAlt} /> Make Review</h5></Link>
                                </>
                        }
                    </div>
                </div>
                <div className="col-md-9">
                        <div className="row">
                            <div className="col-md-6 title">
                                <h5 className="text-left font-weight-bold">Place Order</h5>
                            </div>
                            <div className="col-md-6 title">
                                <h5 className="text-right font-weight-bold">{loggedUser.name}</h5>
                            </div>
                            <div className="col-md-12 mt-3 text-center serviceForm">
                                { 
                                    service ? <OrderForm service={service}/>
                                    :
                                    <Link style={{ textDecoration: "none" }} to="/"><button type="button " class="btn btn-info mt-5 font-weight-bold"><FontAwesomeIcon icon={faArrowLeft} />  &nbsp; Select a service from home page</button></Link>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Order;