import React, { useState } from 'react'
import { AiFillEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from "react-hot-toast";

const Login =({ setIsLoggedIn }) => {
    
    const [showPassword, setShowPassword] = useState(false);
    
    const[formData,setFormData] = useState({
      username:"",password:""
     })

   function changeHandler(event){
    setFormData((prevdata) => (
        {
            ...prevdata,
            [event.target.name]:event.target.value
        }
    ));
   }

   const navigate= useNavigate();

   function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    navigate("/");
    }

    return (
    <div className='loginform'>

      {/* <form className='form'  > */}
      <form className='form' onSubmit={submitHandler} >
        <label>
            <p className='title login'> 
                User Name<sup>*</sup>
            </p>
            <input className='input'
                required
                type="string"
                name="username"
                value={formData.username}
                onChange={changeHandler}
                placeholder="Enter user name"
            />
        </label>
        
        <label className='label'>
            <p className='title login'>Password<sup>*</sup> </p>
            
            <input
                required
                type={showPassword ? ("text") : ("password")}
                name="password"
                value={formData.password}
                onChange={changeHandler}
                placeholder="Enter Password"
            />

            <span className='icon' onClick={() => setShowPassword((prev) => !prev)} >
            {showPassword ? <AiFillEyeInvisible /> : <AiOutlineEye />}
            </span>

            <Link to="#">
            <p className='forgotpassword'>
                Forgot Password
            </p>
                </Link>
        </label>


        <button  className='formbtn'>
            log in
        </button>

        <div className='line'>
                <div className='lineSub'>.</div>
                    <p className='or'>OR</p>
                <div className='lineSub'>.</div>
        </div>

        <button className='formbtn2'>Sign in with Google</button>
    </form>        
    </div>
  )
}

export default Login
