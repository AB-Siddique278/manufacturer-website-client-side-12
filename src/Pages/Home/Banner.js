import React from 'react';

const Banner = () => {
    return (
        <div>
            <div class="hero  lg:h-[80vh] bg-secondary">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://media.istockphoto.com/photos/engine-of-a-dismantled-motorcycle-picture-id487394407?k=20&m=487394407&s=612x612&w=0&h=RmTUYbb9MdaBJkeD9LDlwGLMsLW_HO2-fJwjXp3Gt0U=" class="max-w-lg rounded-lg shadow-2xl" />
                    <div className=' max-w-3xl'>
                        <h1 class="text-5xl font-bold">MOTOR PARTS <br />FOR ALL OF MOTORBIKE <br/> PARTAS </h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary">Get an Appointment</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;