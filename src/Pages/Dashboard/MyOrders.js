import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:8000/booking?customer_email=${user.email}`,{

            method:'GET',
            headers:{
                'authorization':`Bearer ${localStorage.getItem('accessToken')}`
            }
            })
                .then(res => {

                    if(res.status===401||res.status===403){

                        navigate('/')
                    }
                   return res.json()
                })
                .then(data => setOrders(data))
        }
    }, [user])


    return (
        <div>
            <h1 className='text-2xl font-mono font-bold text-center mb-3 text-secondary uppercase'>Yor Order : {orders.length} Items</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>S.NO</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Product Name</th>
                            <th>Quantati</th>
                            <th>Payment</th>
                        </tr>
                    </thead>

                    <tbody>

                       {
                           orders.map((o, index) =><tr>
                            <th>{index+1}</th>
                            <td>{o.customerName}</td>
                            <td>{o.customer_email}</td>
                            <td>{o.serviceName}</td>
                            <td>{o.purchase_quantity}</td>
                            <td>
                                {(o.price && !o.paid) && <Link to={`/dashboard/payment/${o._id}`}><button class="btn btn-success btn-xs">pay</button></Link>}
                                {(o.price && o.paid) && <span className='text-success'>paid</span>}
                            </td>
                        </tr>)
                       }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyOrders;