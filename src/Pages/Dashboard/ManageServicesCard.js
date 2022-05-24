import React from 'react';

const ManageServicesCard = ({ service, setServices,index }) => {

    const handleDelete = id => {
        const proceed = window.confirm("Are you sure Remove items??")
        if (proceed) {
            const url = `http://localhost:8000/service/${id}`;
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }


            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = service.filter(service => service._id !== id);
                    setServices(remaining);
                })

        }
    }
    return (
        <tr>
            <th>{index+1}</th>
            <td>{service.name} </td>
            <td>{service.price} </td>
            <td>{service.minimum_order_quantity} </td>
            <td>{service.available_quantity} </td>
            <td><button onClick={() => handleDelete(service._id)} class="btn btn-error">Remove</button> </td>
        </tr>
    );
};

export default ManageServicesCard;