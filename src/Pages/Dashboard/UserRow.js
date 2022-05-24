import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user, refetch, index}) => {
    const {email, role} = user;
    const makeAdmin = () =>{
       fetch(`http://localhost:8000/user/admin/${email}`,{
        method: 'PUT',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }

       })
       .then(res => {
           if(res.status === 403){
               toast.error('faild to make admin')
           }
        return res.json()})
       .then(data =>{
           console.log(data);
           if(data.modifiedCount > 0 ){
            refetch()
            toast.success(`successfully made an admin`);
           }
       })

    }
    
    return (
        
            <tr>
                <th>{1+index} </th>
                
                <td>{user.email}</td>
                <td>{role!=='admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
                
            </tr>
        
    );
};

export default UserRow;