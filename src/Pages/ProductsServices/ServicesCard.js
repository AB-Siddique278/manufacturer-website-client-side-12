import React from 'react';
import { useNavigate } from 'react-router-dom';

const ServicesCard = ({ service }) => {

    const { name, _id, image } = service;
    const navigate = useNavigate();
    const navigateTopurchase = id => {
        navigate(`/purchase/${_id}`);

    }
    return (
        <div>
            <div>
                <div class="card bg-base-100 shadow-xl">
                    <figure class="px-20 pt-10 ">
                        <img src={image} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">{name} </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions">
                            <button onClick={() => navigateTopurchase(_id)} class="btn btn-primary w-64 ">purchase</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;