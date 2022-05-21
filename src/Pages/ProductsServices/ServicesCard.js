import React from 'react';

const ServicesCard = ({ service }) => {
    const {name, image}=service;
    return (
        <div class="card bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={image} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name} </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions">
                    <button class="btn btn-primary w-64 ">purchase</button>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;