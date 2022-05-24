import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const AddService = () => {

    
    const { register, handleSubmit, } = useForm();
    const [user] = useAuthState(auth);

    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:8000/service`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })


    };
    return (
        <div>
            <h1 className='text-2xl font-mono font-bold text-center mb-3 text-secondary'>Add New Service </h1>
            <div class="card w-96 bg-base-100 shadow-xl mx-auto">
                <div class="card-body">
                    <form className='mx-auto' onSubmit={handleSubmit(onSubmit)}>

                        <input  class="input input-bordered w-full max-w-xs mb-3" placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                        <input className='input input-bordered w-full max-w-xs mb-3' placeholder='Price'  type="number" {...register("price",)} />
                        <input className='input input-bordered w-full max-w-xs mb-3' placeholder='Photo url'  {...register("image")} />
                        <textarea className='mb-2 input input-bordered w-full max-w-xs' placeholder='description'  {...register("description")} />
                        <input className='input input-bordered w-full max-w-xs mb-3' placeholder='minimum_order_quantity'  type="number" {...register("minimum_order_quantity",)} />
                        <input className='input input-bordered w-full max-w-xs mb-3' placeholder='available_quantity'  type="number" {...register("available_quantity",)} />
                        <input className='input input-bordered w-full max-w-xs mb-3' placeholder='User Email ' value={user.email}  {...register("email")} readOnly />
                        <input className='btn btn-outline btn-warning w-full' placeholder='' type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;