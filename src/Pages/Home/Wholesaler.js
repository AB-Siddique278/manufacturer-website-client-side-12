import React from 'react';
import Brands from './Brands';

const Wholesaler = () => {
    const brands = [
        {
            _id: 1,
            name: 'Honda',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,.',
            img:"https://motosymbol.com/wp-content/uploads/2021/02/Honda-Logo.jpg"
          
        },
        {
            _id: 2,
            name: 'kawasaki-motor',
            description: ' Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, ',
            img: "https://www.kindpng.com/picc/m/4-42735_kawasaki-motor-logo-png-transparent-png.png"
           

        },
        {
            _id: 3,
            name: 'TVS',
            description: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore .',
            img:"https://i.pinimg.com/564x/0b/77/a6/0b77a61ba7f8810d715dedde29875272.jpg" 
            
        },
        {
            _id: 4,
            name: 'Walton',
            description: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore .',
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSWc5Vr2c5VoI-cGXu-2QgjInAwn1YVdBJBHhu92hMzr_dX8BwiuuwudlGgnLoNLw8gEM&usqp=CAU"
            
        }
    ]
    return (
        <div>
            <div>
                <div className='mb-5'>
                    <h1 className=' text-center font-bold text-3xl '>All the brands that use our products</h1>
                </div>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-5' >
                    {
                        brands.map(brand =><Brands
                        
                        key={brand._id}
                        brand={brand}

                        ></Brands> )
                    }
                </div>
            </div>
        </div>
    );
};

export default Wholesaler;