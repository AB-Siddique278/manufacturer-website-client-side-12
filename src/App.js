import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import Login from './Pages/Login/Login';
import Dashboard from './Pages/Dashboard/Dashboard';
import Navbar from './Pages/Shared/Navbar';
import SignUp from './Pages/Login/SignUp';
import Purchase from './Pages/ProductsServices/Purchase';
import RequireAuth from './Pages/Login/RequireAuth';

import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="myPortfolio" element={<MyPortfolio />} />
        <Route path="/purchase/:serviceId" element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        } />
        <Route path="dashboard" element={
        
        <RequireAuth>


          <Dashboard />
        </RequireAuth>} />





        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
