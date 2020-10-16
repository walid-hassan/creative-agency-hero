import React from 'react';
import './OrdersTable.css';

const OrdersTable = ({order, count, setCount, setLoader}) => {
    const statuesType = (e) => {
        fetch (`https://lit-island-82681.herokuapp.com/update/${order._id}`,{
            method: "PATCH",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({statues: e.target.value})
        })
        .then (res => res.json())
        .then( data => {
            if (data){
                setCount(count + 1);
                setLoader(true)
            }
        })
        
    }
    return (
        <tr>
            <td>{order.name}</td>
            <td>{order.email}</td>
            <td>{order.service.title}</td>
            <td>{order.details}</td>
            <td>
                {
                    order.statues === "pending" &&
                    <select className="text-danger" onChange={statuesType} name="statues" id="statues" >
                        <option className="text-danger" value={order.statues} >{order.statues}</option>
                        <option className="text-warning" value="on going">on going</option>
                        <option className="text-success" value="done">done </option>
                    </select>
                }
                {
                    order.statues === "on going" &&
                    <select className="text-warning" onChange={statuesType} name="statues" id="statues" >
                        <option className="text-warning" value={order.statues} >{order.statues}</option>
                        <option className="text-danger" value="pending">pending</option>
                        <option className="text-success" value="done">done </option>

                    </select>
                }
                {
                    order.statues === "done" &&
                    <select className="text-success" onChange={statuesType} name="statues" id="statues" >
                        <option className="text-success" value={order.statues} >{order.statues}</option>
                        <option className="text-danger" value="pending">pending</option>
                        <option className="text-warning" value="on going">on going</option>
                    </select>
                }
            </td>
        </tr>
    );
};

export default OrdersTable;