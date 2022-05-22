import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:8000/booking?customer_email=${user.email}`)
                .then(res => res.json())
                .then(data => setOrders(data))
        }
    }, [user])


    return (
        <div>
            <h1>my orders:{orders.length} </h1>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>S.NO</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Product Name</th>
                            <th>Quantati</th>
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
                        </tr>)
                       }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyOrders;