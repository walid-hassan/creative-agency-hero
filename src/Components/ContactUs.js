import React from 'react';
import ContactForm from './ContactForm';
import './ContsctUs.css';

const ContactUs = () => {
    return (
        <section id="contact" className="contactUs pt-5 ">
            <div className="container mt-3 mb-3">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="font-weight-bold ">Let us handle your <br/> project, professionally.</h2>
                        <p className="font-weight-light mt-3">With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                    </div>
                    <div className="col-md-6">
                        <ContactForm/>
                    </div>
                </div>
                <div className="text-center pt-5">
                    <p>Developed by Walid Hassan</p>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;