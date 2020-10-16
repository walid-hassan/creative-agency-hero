import React, { useContext } from 'react';
import "./OrderForm.css"
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { userContext } from '../App';

const ReviewForm = ({service}) => {
    const [loggedUser, setLoggedUser] = useContext(userContext);
    const { register, handleSubmit, watch, errors, reset } = useForm();
    const [message, setMessage] = useState('');
    const onSubmit = data => {
        data.pic = loggedUser.pic;
        fetch('https://lit-island-82681.herokuapp.com/give-review', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                if (data){
                    setMessage("Review sent");
                    reset()
                }
            })
            .catch(error => {
                console.error(error)
            })
            console.log(data);
    };
    return (
        <div className="reviewForm">
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className="d-flex justify-content-center">
                    <div className="form-group w-50 p-1">
                        {/* register your input into the hook by invoking the "register" function */}
                        <input type="text" value={loggedUser.name} className="form-control mt-3 mb-2" name="name" placeholder="Your name / company name" ref={register({ required: true })} />
                        {/* errors will return when field validation fails  */}
                        {errors.name && <p className="text-danger mb-2">Please write your name</p>}
                        
                        <input type="text" className="form-control mt-3 mb-2" name="company" placeholder="Company's name Designation" ref={register({ required: true })} />
                        {/* errors will return when field validation fails  */}
                        {errors.company && <p className="text-danger mb-2">Write service your company name</p>}
                        <textarea className="projectDetails form-control mt-3 mb-2 " name="des" placeholder="Discription" ref={register({ required: true })} />
                        {/* errors will return when field validation fails  */}
                        {errors.des && <p className="text-danger mb-2">Please write your review in details</p>}
                    </div>
                    <div className="form-group w-50 p-1"></div>
                </div>
                <div className="serviceSubmitBtn ">
                    <input className="btn btn-dark" type="submit" value="Submit" />
                    {
                        message && <h4 className="text-success font-weight-bold mt-3">{message}</h4>
                    }
                </div>
                
            </form>
        </div>
    );
};

export default ReviewForm;