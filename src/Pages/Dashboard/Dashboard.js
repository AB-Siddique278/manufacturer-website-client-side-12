import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
  const [user] = useAuthState(auth)
  const [admin] = useAdmin(user);
    return (
        <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content ">
        <h2 className='text-3xl text-purple-500 font-bold'> wellcome to my dashbord</h2>
        
        <Outlet></Outlet>

        
        </div> 
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label> 
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
           
            {!admin && <li><Link to="/dashboard">My Orders</Link></li>}
            
            
                           
             { !admin && <li><Link to="/dashboard/review"> Add Review</Link></li>}
              
            
            { admin && <li><Link to="/dashboard/addservice"> Add New Service</Link></li>}
            <li><Link to="/dashboard/profile">My Profile</Link></li>
            {admin && <li><Link to="/dashboard/manageServices"> Manage Services</Link></li>}
            {admin && <li><Link to="/dashboard/users">Make Admin</Link></li>}
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;