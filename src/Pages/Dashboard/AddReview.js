import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user, loading, error] = useAuthState(auth);

    const handalReview = event => {
        event.preventDefault();
        const name = user.displayName
        const comment = event.target.comment.value;
        const rating = event.target.rating.value;
        const email = user.email;

        const review = { name, comment, rating, email };

        fetch('http://localhost:8000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                event.target.reset()
            })


    }
    return (
        <div>
            <h2 className='text-2xl font-mono font-bold text-center mb-3 text-secondary uppercase'> Add New Review</h2>

            <div class="card w-96 bg-base-100 shadow-xl mx-auto">
                <div class="card-body">
                    

                    <form action='' onSubmit={handalReview} className='grid grid-cols-1 gap-3   mt-2'>
                        <label htmlFor="user_name"> User Name</label>
                        <input type="text" name='name' disabled value={user?.displayName} class="input input-bordered w-full max-w-xs" />

                        <label htmlFor="user_name">comment</label>
                        <input type="text" name='comment' class="input input-bordered w-full max-w-xs" />

                        <label htmlFor="order_Quantity">Ratting </label>
                        <input type="number" name='rating' class="input input-bordered w-full max-w-xs" />

                        <label htmlFor="user_email"> User Email</label>
                        <input type="email" name='email' disabled value={user?.email} class="input input-bordered w-full max-w-xs" />




                        <input type="submit" class="btn btn-primary w-full max-w-xs" />

                    </form>

                </div>
            </div>



















        </div>
    );
};

export default AddReview;