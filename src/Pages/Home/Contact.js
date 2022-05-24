import React from 'react';
import background from '../../images/background.jpg'
const Contact = () => {
    return (
        <section style={{
            background:`url(${background})`
        }} className="mb-10">

        
            <h2 className='text-center text-3xl text-orange-500'>Stay connected with us</h2>

           
            <div className='grid grid-cols-1 justify-items-center gap-5 py-3 '>
                <input className='input w-full max-w-md  rounded input-warning' type="email" placeholder='Email' />
                <input className='input w-full max-w-md  rounded input-warning' type="text" placeholder='Subject' />
                <textarea className='textarea w-full max-w-md rounded input-warning'  rows={3}type="email" placeholder='Email' />
               
                <button class="btn btn-warning w-full max-w-md">Warning</button>
            
            </div>


        </section>
    );
};

export default Contact;