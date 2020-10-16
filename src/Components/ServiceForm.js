import React from 'react';
import './ServiceForm.css';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const ServiceForm = () => {
    const { register, handleSubmit, watch, errors, reset } = useForm();
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');
    const onSubmit = data => {

        const formData = new FormData()
        formData.append('icon', file);
        formData.append('title', data.title);
        formData.append('description', data.description);
        console.log(file, data.title, data.description);
        fetch('https://lit-island-82681.herokuapp.com/add-service', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data.insertedCount > 0) {
                    setMessage("Service added successfully.")
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
    }
    return (
        <div className="addServiceForm">
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6 col-sm-12 form-group p-1">
                        {/* register your input into the hook by invoking the "register" function */}
                        <label>Service title</label>
                        <input className="form-control mb-3" name="title" placeholder="Enter Title" ref={register({ required: true })} />
                        {/* errors will return when field validation fails  */}
                        {errors.title && <p className="text-danger mb-2">This field is required</p>}
                        {/* include validation with required or other standard HTML validation rules */}
                        <label>Description</label>
                        <textarea className="form-control mb-3" placeholder="Enter Description" name="description" ref={register({ required: true })} />
                        {/* errors will return when field validation fails  */}
                        {errors.description && <p className="text-danger mb-2">This field is required</p>}

                    </div>
                    <div className="form-group col-md-6 col-sm-12 p-1">
                        {/* register your input into the hook by invoking the "register" function */}
                        <label>Icon</label>
                        <label class="custom-file-upload" >
                            <input onChange={uploadIcon} type="file" name="icon" ref={register({ required: true })} />
                             <span className="btnText"><FontAwesomeIcon icon={faCloudUploadAlt} /> Upload</span>
                        </label>
                        {errors.icon && <p className="text-danger mb-2">Plaese upload an icon.</p>}
                    </div>
                </div>
                <div className="serviceSubmitBtn ">
                    <input className="btn btn-success" type="submit" value="Submit" />
                    {
                        message && <h6 className="text-success font-weight-bold mt-3">{message}</h6>
                    }
                </div>
            </form>
        </div>
    );
};

export default ServiceForm;