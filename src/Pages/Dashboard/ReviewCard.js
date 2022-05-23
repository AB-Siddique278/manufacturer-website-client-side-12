import React from 'react';

const ReviewCard = ({ review }) => {
    const { name, comment, rating, email } = review
    return (
        <div>
            <div class="card  bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 className='text-xl font-mono font-bold text-purple-500'> {name}</h2>
                    <p className='text-xl font-mono '>User: {email}</p>
                    <p className='text-xl font-mono '>Rating: {rating}</p>
                    <p className='text-xl font-mono '>Comment:{comment}</p>
                    
                   
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;