import React from 'react';
import useServices from '../../hooks/useServices';
import ManageServicesCard from './ManageServicesCard';

const ManageServices = () => {
    const [services, setServices] = useServices();
    return (
        <div>
            <h1 className='text-2xl font-mono font-bold text-center mb-3 text-secondary'>Manage services</h1>






            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Product Name </th>
                            <th>Price</th>
                            <th>Order Quantity</th>
                            <th>Available Quantity</th>
                            <th>Remove Items</th>
                        </tr>
                    </thead>
                    <tbody>

                        
                            {
                                services.map((service,index) => <ManageServicesCard

                                    key={service._id}
                                    service={service}
                                      setServices={setServices}
                                      
                                    index={index}
                                ></ManageServicesCard>)
                            }
                    

                    </tbody>
                </table>
            </div>










        </div>
    );
};

export default ManageServices;