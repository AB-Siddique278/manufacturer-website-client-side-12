import React from 'react';

const Brands = ({brand}) => {
    return (
        <div>
            <div class="card bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src= {brand.img} alt="Shoes" class="rounded-xl" />
                </figure>
               
            </div>
        </div>
    );
};

export default Brands;