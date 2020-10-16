import React, { useState } from 'react';
import './SingleServiceList.css'


const SingleServiceList = ({ orders }) => {
    
    return (
        <div className="col-md-5 m-3 SingleServiceList">
            <div className="row">
                <div className="col-md-6">
                    {
                        orders && <img className="img-fluid" src={`data:image/jpeg;base64,${orders.service.image.img}`} alt="" />
                    }
                </div>
                <div className="col-md-6">
                    {
                        orders.statues === "pending" && <button type="button" class="btn btn-outline-danger">Pending</button>
                    }
                    {
                        orders.statues === "done" && <button type="button" class="btn btn-outline-success">Done</button>
                    }
                    {
                        orders.statues === "on going" && <button type="button" class="btn btn-outline-primary">On going</button>
                    }
                </div>
                <div className="col-md-10 mt-3">
                    <strong>{orders.service.title}</strong> <br/>
                    <small>{orders.service.description}</small>
                </div>
            </div>
        </div>
    )

};

export default SingleServiceList;