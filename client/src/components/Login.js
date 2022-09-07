import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import Alert from './Alert';
import {login} from '../auth';
import {useNavigate} from 'react-router-dom';

const Login = () => {

    const {register, handleSubmit, reset, formState:{errors}} = useForm();
    const [showAlert, setShowAlert] = useState(false)
    const [serverResponse, setServerResponse] = useState('')
    const history = useNavigate()

    const submitForm = (data) => {
        console.log(data)

        const requestOptions={
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        }

        fetch('/auth/login', requestOptions)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            login(data.access_token)
            setServerResponse(data.message)
            setShowAlert(false)
            history('/')
            console.log(serverResponse)
        })
        .then(err=>console.log(err))

        reset()
    }

    return(
        <div>
            {showAlert && Alert('Passwords do not match', 'Please check if your passwords do not contain any typos', "danger")}
            {serverResponse && Alert('Success!', serverResponse, 'success')}
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-6">
                        <h2 className="mt-5">Welcome back! New hot dogs are waiting you!</h2>
                        <form className="mt-5">
                            <div className="mb-3">
                                <label htmlFor="loginInput" className="form-label">Login</label>
                                <input type="text" className="form-control" id="loginInput" {...register('username', {required:true,maxLength:25})}/>
                            </div>
                            {errors.username && <small style={{color:"red"}}>Login is required</small>}
                            <br />
                            {errors.username?.type==="maxLength" && <small style={{color:"red"}}>Login shouldn't be longer than 25 characters!</small>}
                            <div className="mb-3">
                                <label htmlFor="passwordInput" className="form-label">Password</label>
                                <input type="password" className="form-control" id="passwordInput" {...register('password',{required:true,minLength:8})}/>
                            </div>
                            {errors.password && <small style={{color:"red"}}>Password is required!</small>}
                            <br />
                            {errors.password?.type==="minLength" && <small style={{color:'red'}}>Password's minimum length is 8 characters!</small>&&<br />}
                            
                            <button type="submit" className="btn btn-primary" onClick={handleSubmit(submitForm)}>Sign in</button>
                            <div className="mb-3">
                                <small>New to psinder? Create your account <Link to="/signup">here</Link></small>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login