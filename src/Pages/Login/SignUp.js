import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile, updating, uError] = useUpdateProfile(auth);
      if(loading || gLoading||updating){
          return <Loading></Loading>
      }
    if(user){
        console.log(user)
    }

    

    const onSubmit =async data => {
        console.log(data);
      await createUserWithEmailAndPassword(data.email, data.password)
        navigate("/");
        await updateProfile({ displayName:data.name });
    }

    let signInError;

    if(error || gError||uError){
        signInError = <p>{error?.message||gError?.message}</p>
    }
    return (
        <div>
                    <div className='flex h-screen justify-center items-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center">SignUp</h2>


                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Name</span>
                               
                            </label>

                            <input 
                            type="text"
                            placeholder="you Name" 
                            class="input input-bordered w-full max-w-xs" 
                            {...register("name",{
                                required:{
                                    value:true,
                                    message:"name is Required"
                                },
                                
                            } )}
                            />
                            <label class="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            
                                
                            </label>
                        </div>







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

                    <p>Motor Parts <Link to="/login"><span className='text-primary'>Login</span></Link></p>

                    <div class="divider">OR</div>

                    <button 

                    onClick={() => signInWithGoogle()}
                    class="btn btn-outline btn-success">contunue with google
                    
                    </button>
                   

                </div>
            </div>
        </div>
        </div>
    );
};

export default SignUp;