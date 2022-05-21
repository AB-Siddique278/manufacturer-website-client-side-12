import React, { useEffect, useState } from 'react';
import ServicesCard from '../ProductsServices/ServicesCard';

const Tools = () => {
    const [services, setServices] = useState([])
    useEffect(() => {

        fetch('Services.json')
            .then(response => response.json())
            .then(data => setServices(data))

    }, [])

    return (
        <div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5'>
            {
                services.map(service=><ServicesCard
                key={service._id}
                service={service}
                
                ></ServicesCard>)
            }
            </div>
        </div>
    );
};

export default Tools;