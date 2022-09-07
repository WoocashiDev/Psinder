import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';

const SignUp = () => {
    const {register, watch, handleSubmit, reset, formState:{errors}} = useForm();

    const submitForm=(data)=>{
        console.log(data)

    if (data.password===data.confirmPassword) {

        const body_data ={
            username:data.username,
            email:data.email,
            password:data.password
        }

        const requestOptions={
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(body_data)
        }

        fetch('/auth/signup', requestOptions)
        .then(res=>res.json())
        .then(data=>console.log(data))
        .then(err=>console.log(err))

        reset()
    } else {
        alert("Passwords do not match")
    }
}

    console.log(watch("username"))

    return(
        <div>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-6">
                        <h2 className="mt-5">Join psinder today!</h2>
                        <form className="mt-5">
                            <div className="mb-3">
                                <label htmlFor="loginInput" className="form-label">Login</label>
                                <input type="email" className="form-control" id="loginInput" aria-describedby="emailHelp" name="username" {...register("username",{required:true,maxLength:25})}/>
                            </div>
                            {errors.username && <small style={{color: "red"}}>Username is required</small>}
                            <br />
                            {errors.username?.type==="maxLength"&&<small style={{color: "red"}}>Username is too long!</small>}
                            <div className="mb-3">
                                <label htmlFor="emailInput" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" {...register("email",{required:true,maxLength:80})} name="email"/>
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            {errors.email && <small style={{color: "red"}}>Email is required</small>}
                            <br />
                            {errors.email?.type==="maxLength"&&<small style={{color: "red"}}>Email is too long!</small>}
                            <div className="mb-3">
                                <label htmlFor="passwordInput" className="form-label">Password</label>
                                <input type="password" className="form-control" id="passwordInput" {...register("password",{required:true,minLength:8})} name="password"/>
                            </div>
                            {errors.password && <small style={{color: "red"}}>Password is required </small>}
                            <br />
                            {errors.password?.type==="minLength"&&<small style={{color:"red"}}>Password must be longer than 8 characters!</small>}
                            <div className="mb-3">
                                <label htmlFor="passwordConfirmInput" className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" id="passwordConfirmInput" name="confirmPassword" {...register("confirmPassword",{required:true,minLength:8})}/>
                            </div>
                            {errors.password && <small style={{color: "red"}}>Make sure your password is the same as above</small>}
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="consentInput"/>
                                <label className="form-check-label" htmlFor="consentInput">I agree to the terms of use of psinder</label>
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={handleSubmit(submitForm)}>Sign up</button>
                            <div className="mb-3">
                                <small>Have an account? Login <Link to="/login">here</Link></small>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp