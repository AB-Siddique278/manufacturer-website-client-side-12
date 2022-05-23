
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import Loading from '../Shared/Loading';

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:8000/booking/${id}`;

    const { data:service, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-2xl text-purple-500'> please pay for: {id}</h2>
            
               

                    <div class="card w-96 bg-base-100 shadow-xl">

                        <div class="card-body">
                            <h2 class="card-title">Product Name : {service.serviceName}</h2>
                            <p>price: {service.price} </p>
                            <p>Product Quantati: {service.purchase_quantity} pice </p>
                            <p>Customer Email: {service.customer_email} </p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>





                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">


                        </div>
                    </div>
                
           

        </div>
    );
};

export default Payment;

//http://localhost:8000/booking/${id}