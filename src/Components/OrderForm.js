import React, { useContext } from 'react';
import "./OrderForm.css"
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { userContext } from '../App';


const OrderForm = ({ service }) => {
    const [loggedUser, setLoggedUser] = useContext(userContext);
    const { register, handleSubmit, watch, errors, reset } = useForm();
    const [file, setFile] = useState(null);
    const [display, setDisplay] = useState("none");
    const [message, setMessage] = useState('');
    const onSubmit = data => {
        data.service = service;
        data.statues = "pending";
        fetch('https://lit-island-82681.herokuapp.com/place-order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    setMessage("Order placed successfully.");
                    reset()
                }
            })
            .catch(error => {
                console.error(error)
            })
    };

    const uploadIcon = (e) => {
        const icon = e.target.files[0];
        setFile(icon);
        setDisplay("block")
    }
    const inputDisplay = {
        display: display,
        textAlign: "center"
    }
    return (
        <div className="orderForm row">
            <form className="col-md-6" onSubmit={handleSubmit(onSubmit)} >
                <div className="row d-flex justify-content-center">
                    <div className="form-group col-md-12 p-1">
                        {/* register your input into the hook by invoking the "register" function */}
                        <input type="text" value={loggedUser.name} className="form-control mt-3 mb-2" name="name" placeholder="Your name / company name" ref={register({ required: true })} />
                        {/* errors will return when field validation fails  */}
                        {errors.name && <p className="text-danger mb-2">Please write your name</p>}

                        <input type="email" value={loggedUser.email} className="form-control mt-3 mb-2" name="email" placeholder="Your email" ref={register({ required: true })} />
                        {/* errors will return when field validation fails  */}
                        {errors.email && <p className="text-danger mb-2">Please write your email</p>}

                        <input type="text" className="form-control mt-3 mb-2" name="service" value={service.title} ref={register({ required: true })} />
                        {/* errors will return when field validation fails  */}
                        {errors.service && <p className="text-danger text-left mb-2">Write service name</p>}
                        <textarea type="text" className="projectDetails form-control mt-3 mb-2 " name="details" placeholder="Project details" ref={register({ required: true })} />
                        {/* errors will return when field validation fails  */}
                        {errors.details && <p className="text-danger text-left mb-2">Please write your project details</p>}
                        <input className="form-control mt-3 mb-2" name="price" placeholder="Budget $" ref={register({ pattern: /^[0-9]+$/, required: true })}  />
                        {/* errors will return when field validation fails  */}
                        {errors.price && <p className="text-danger text-left mb-2">Write project budget</p>}
                        {/* register your input into the hook by invoking the "register" function */}
                        <label class="custom-upload mt-3" >
                            <input style={inputDisplay} onChange={uploadIcon} type="file" name="file" ref={register} />
                            <span className="btnFile"><FontAwesomeIcon icon={faCloudUploadAlt} /> Upload File</span>
                        </label>
                    </div>
                    <div className=" col-md-12 serviceSubmitBtn text-left">
                        <input className="btn btn-success" type="submit" value="Submit" />
                        {
                            message && <h4 className="text-success font-weight-bold mt-3">{message}</h4>
                        }
                    </div>
                </div>


            </form>
        </div>
    );
};

export default OrderForm;