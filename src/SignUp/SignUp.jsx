import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../Firebase.init';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [success, setSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSignUp = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.terms.checked;
        console.log(email, password,terms);

        setErrorMessage('');
        setSuccess(false);
        if(!terms)
        {
            setErrorMessage('Please Accpt Our terms and Conditions');
            return;
        }

        if (password.length < 6) {
            setErrorMessage('password should be at least 6 character');
            return;
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

        if (!passwordRegex.test(password)) {
            setErrorMessage('At least one uppercase, one lowercase, one number, one special character');
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSuccess(true)
            })
            .catch(error => {
                console.log('ERROR', error);
                setErrorMessage(error.message)
                setSuccess(false);
            })
    }
    return (
        <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl mt-4">
            <h2 className="text-3xl ml-4 text-center font-bold">Sign Up Now!</h2>
            <form onSubmit={handleSignUp} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                </div>
                <div className="form-control relative">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type={showPassword ? 'text' : 'password'} placeholder="password" name='password'
                        className="input input-bordered"
                        required />
                    <button
                        onClick={() => setShowPassword(!showPassword)}
                        className='btn btn-xs absolute right-2 top-12'>
                        {
                            showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                        }
                    </button>
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control">
                    <label className="label  justify-start cursor-pointer">
                    <input type="checkbox" name='terms' className="checkbox" />
                        <span className="label-text ml-2">Accpt Our Terms And Condition</span>  
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Sign Up</button>
                </div>
            </form>
            {
                errorMessage && <p className="text-red-700">{errorMessage}</p>
            }
            {
                success && <p className='text-green-600 text-bold '>Successfully Signed Up</p>
            }
             <p className='m-2'>Already have Account? Please <Link to="/login" className='text-bold text-blue-700'>Login</Link></p>
        </div>
    );
};

export default SignUp;