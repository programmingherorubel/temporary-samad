import React, { useContext, useState } from 'react';
import login from '../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const {signIn,setUser} = useContext(AuthContext) || {}

    const handleLogin = event =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        

        signIn(email, password)
        .then(result=>{
            const user = result.user;
            setUser(user)
            navigate(from,{replace: true})
            form.reset();
        })
        .catch(error=>{
            
        })

    }

   
  

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content md:flex-col lg:flex-row space-x-8">
                <div className="text-center w-1/2">
                    <img src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-xl font-bold text-center">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" name="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            {/* <button className="btn btn-primary">Login</button> */}
                            <input type="submit" className='btn btn-primary bg-red-500' value="Login" />
                        </div>
                    </form>
                    <p className='text-center my-4'>Don't have an account? <Link to='/signUp' className='text-red-500 
                    font-semibold'>Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;