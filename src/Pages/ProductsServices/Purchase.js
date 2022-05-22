import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import {toast} from 'react-toastify';
const Purchase = () => {
    const [user, loading, error] = useAuthState(auth);
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {

        const url = `http://localhost:8000/service/${serviceId}`
        fetch(url)
            .then(response => response.json())
            .then(data => setService(data))

    }, []);

    const handleBooking = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        console.log(name)

        const booking = {

            service:service._id,
            serviceName:service.name,
            customer_email:user.email,
            customerName:user.displayName,
            purchase_quantity:event.target.purchase_quantity.value

        }

        fetch('http://localhost:8000/booking',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.success){
                toast(`purchase Done ${service.name}`)
               
            }
            
        })
    }

    return (
        <div>
            <h1 className='text-2xl font-bold'>Wellcome for purchase: {serviceId} </h1>

            <div>
                <h1> name:{service.name} </h1>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">name:{service.name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl my-5">
                <div class="card-body">
                    <h2 class="card-title">name:{service.name}</h2>
                    <form action='' onSubmit={handleBooking} className='grid grid-cols-1 gap-3  justify-items-center mt-2'>
                        <label htmlFor="user_name"> User Name</label>
                        <input type="text" name='name' disabled value={user?.displayName} class="input input-bordered w-full max-w-xs" />
                        
                        <label htmlFor="user_email"> User Email</label>
                        <input type="email" name='email' disabled value={user?.email} class="input input-bordered w-full max-w-xs" />

                        <label htmlFor="order_Quantity">Minimum Order Quantity </label>
                        <input type="text" name='phone' disabled value={service.minimum_order_quantity} class="input input-bordered w-full max-w-xs" />

                        <label htmlFor="available_Quantity"> Available Quantity</label>
                        <input type="text" name='phone' disabled value={service.available_quantity} class="input input-bordered w-full max-w-xs" />

                        <label htmlFor="purchase_quantity"> Your Purchase Quantity</label>
                        <input type="number" name='purchase_quantity' placeholder="Enter Purchase Quantity " class="input input-bordered w-full max-w-xs" />
                        <input type="submit" class="btn btn-primary w-full max-w-xs" />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;