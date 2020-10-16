import React, { useEffect, useState } from 'react';
import Loader from '../images/loading.gif'
import './OrderList.css'
import OrdersTable from './OrdersTable';
const OrderList = () => {
    const [orders, setOrders] = useState([]);
    const [count, setCount] = useState(0);
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        fetch("https://lit-island-82681.herokuapp.com/all-orders")
            .then(res => res.json())
            .then(data => {
                setOrders(data);
                setLoader(false)
            })
    }, [count])

    return (
        <div className="orderList">
            {
                loader ? <div className="col-md-12 text-center"> <img style={{ maxWidth: "300px" }} src={Loader} alt="" /> </div>
                :
                <div class="table-responsive-md">
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email ID</th>
                            <th scope="col">Service</th>
                            <th scope="col">Project Details</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {      
                                orders.map(order => <OrdersTable key={order._id} setLoader={setLoader} count={count} setCount={setCount}  order={order}/>)
                        }
                    </tbody>
                </table>
            </div>
            }
            
        </div>
    );
};

export default OrderList;