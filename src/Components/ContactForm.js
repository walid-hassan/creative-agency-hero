import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import './ContactForm.css'
const ContactForm = () => {
    const { register, handleSubmit, watch, errors, reset } = useForm();
    const [message, setMessage] = useState('');
    const onSubmit = data => {
        fetch('https://lit-island-82681.herokuapp.com/contact-message', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(response => {
                if (response) {
                    setMessage("Message sent successfully.")
                    reset()
                }
            })
    };

    return (
        <div>
            {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input className="form-control contactFormInput mb-2" type="email" name="email" placeholder="Your email-address" ref={register({ required: true })} />
                {errors.email && <p className="text-danger ">Please write a valid e-mail address</p>}
                {/* include validation with required or other standard HTML validation rules */}
                <input className="form-control contactFormInput mb-2" type="text" placeholder="Your name / company's name" name="name" ref={register({ required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.name && <p className="text-danger ">Please write your name</p>}
                <textarea className="form-control contactFormTextArea mb-2" type="text" placeholder="Your message" name="message" ref={register({ required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.message && <p className="text-danger mb-2" >Please write your message</p>}
                <input class="btn btn-dark pl-3 pr-3" type="submit" value="Send" />
                {
                    message && <h6 className="text-success font-weight-bold mt-3">{message}</h6>
                }
            </form>
        </div>
    );
};

export default ContactForm;