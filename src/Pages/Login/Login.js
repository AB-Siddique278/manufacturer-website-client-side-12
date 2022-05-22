import React, { useEffect } from 'react';

import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from 'firebase/auth';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';
import useToken from '../../hooks/useToken';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate()
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      
     

      const [token]= useToken(user||gUser);

      useEffect(() =>{
        if(token){
          navigate(from, { replace: true }); 
        }
    },[token, from, navigate])
    

      if(loading || gLoading){
          return <Loading></Loading>
      }
    // if(user|| gUser){
    //     console.log(user||gUser)
    //     navigate(from, { replace: true });
    // }

   

    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password)
        // navigate("/appointment");
    }

    let signInError;

    if(error || gError){
        signInError = <p>{error?.message||gError?.message}</p>
    }


    return (
        <div className='flex h-screen justify-center items-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center">Login</h2>


                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                               
                            </label>

                            <input 
                            type="email"
                            placeholder="your email" 
                            class="input input-bordered w-full max-w-xs" 
                            {...register("email",{
                                required:{
                                    value:true,
                                    message:"Email is Required"
                                },
                                pattern:{
                                    value:/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message:'Provide a valid Email'
                                }
                            } )}
                            />
                            <label class="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            
                                
                            </label>
                        </div>





                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>
                               
                            </label>

                            <input 
                            type="password"
                            placeholder="your Password" 
                            class="input input-bordered w-full max-w-xs" 
                            {...register("password",{
                                required:{
                                    value:true,
                                    message:"Password is Required"
                                },
                                minLength:{
                                    value:6,
                                    message:'Must be 6 characters or longer'
                                }
                            } )}
                            />
                            <label class="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            
                                
                            </label>
                        </div>


                    {signInError}
                    <input className='btn w-full max-w-xs' type="submit" value="Login" />
                    </form>

                    <p>Motor Parts  <Link to="/signup"><span className='text-primary'>create a account</span></Link></p>

                    <div class="divider">OR</div>

                    <button 

                    onClick={() => signInWithGoogle()}
                    class="btn btn-outline btn-success">contunue with google
                    
                    </button>
                   

                </div>
            </div>
        </div>
    );
};

export default Login;