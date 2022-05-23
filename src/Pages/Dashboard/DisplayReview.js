import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const DisplayReview = () => {
    const [reviews, setReview] = useState([]);
    useEffect(() => {

        fetch('http://localhost:8000/review')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <div >

            <div>
            <h1 className='my-10 text-center font-mono font-bold text-primary text-4xl '>Customer Review</h1>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 my-11'>
                    {
                        reviews.map(review => <ReviewCard

                            key={review._id}
                            review={review}

                        ></ReviewCard>)
                    }
                </div>
            </div>

        </div>
    );
};

export default DisplayReview;