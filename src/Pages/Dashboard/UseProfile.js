// import React, { useEffect, useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useParams } from 'react-router-dom';
// import auth from '../../firebase.init';

// const UseProfile = () => {
//     const [user, loading, error] = useAuthState(auth);
//     const {id}=useParams();
//     const [profile, setProfile] = useState({});
//     useEffect(()=>{
//         const url = `http://localhost:8000/profile/${id}`;
//         fetch(url)
//         .then(res => res.json())
//         .then(data => setProfile(data));

//     },[])
//     const handalmyUpdateProfile = event => {
//         event.preventDefault();
//         const name = user.displayName;
//         const email = user.email;
//         const address= event.target.address.value;
//         const mobile = event.target.mobile.value;
        

//         const updateprofile = { name, address, mobile, email };

//         fetch(`http://localhost:8000/profile/${id}`, {
//             method: 'PUT',
//             headers: {
//                 'content-type': 'application/json',
//                 authorization: `Bearer ${localStorage.getItem('accessToken')}`
//             },
//             body: JSON.stringify(updateprofile)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data)
//                 event.target.reset()
//             })


//     }
//     return (
//         <div>
//                        <div class="card w-96 bg-base-100 shadow-xl mx-auto">
//                 <div class="card-body">
                    

//                     <form action='' onSubmit={handalmyUpdateProfile} className='grid grid-cols-1 gap-3   mt-2'>
//                         <label htmlFor="user_name"> User Name</label>
//                         <input type="text" name='name' disabled value={user?.displayName} class="input input-bordered w-full max-w-xs" />

//                         <label htmlFor="user_email"> User Email</label>
//                         <input type="email" name='email' disabled value={user?.email} class="input input-bordered w-full max-w-xs" />





//                         <label htmlFor="user_name">address</label>
//                         <input type="text" name='address' class="input input-bordered w-full max-w-xs" />

//                         <label htmlFor="order_Quantity">Mobile </label>
//                         <input type="number" name='mobile' class="input input-bordered w-full max-w-xs" />

                        




//                         <input type="submit" class="btn btn-primary w-full max-w-xs" />

//                     </form>

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default UseProfile;
import React from 'react';

const UseProfile = () => {
    return (
        <div>
            
        </div>
    );
};

export default UseProfile;