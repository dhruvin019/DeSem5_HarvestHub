
import React, { useState } from 'react'
import { AiFillEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from "react-hot-toast";

const OrganizationSignupForm = ({ setIsLoggedIn }) => {
    const [showPassword, setShowPassword] = useState(false);
    
    const[formData,setFormData] = useState({
      username:"",password:"",trader_id:"",email:""
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
  return(
  <div className='farmerform'>
  <form className='form' onSubmit={submitHandler} >
    <label>
        <p className='title'> 
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

    <div className='id-box'>
    <div className='id'>
    <label>
        <p className='titleid'> 
            Trader_Id<sup>*</sup>
        </p>
        <input className='inputid'
            required
            type="id"
            name="trader_id"
            value={formData.trader_id}
            onChange={changeHandler}
            placeholder="Enter trader_id"
        />
    </label>
    </div>
    <div className='id'>
    <label>
        <p className='titleid'> 
            GST No.<sup>*</sup>
        </p>
        <input className='inputid'
            required
            type="id"
            name="gstnumber"
            value={formData.gstnumber}
            onChange={changeHandler}
            placeholder="Enter GST Number"
        />
    </label>
    </div>
    </div>
    <label>
        <p className='title'> 
        Email Address<sup>*</sup>
        </p>
        <input className='input'
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Enter email id"
        />
    </label>
    
    <label>
        <p className='title'>Password<sup>*</sup> </p>
        
        <input className='input trader'
            required
            type={showPassword ? ("text") : ("password")}
            name="password"
            value={formData.password}
            onChange={changeHandler}
            placeholder="Enter Password"
        />

        <span className='signupformicon' onClick={() => setShowPassword((prev) => !prev)} >
        {showPassword ? <AiFillEyeInvisible /> : <AiOutlineEye />}
        </span>

        <Link to="#">
        <p className='forgotpassword'>
            Forgot Password
        </p>
            </Link>
    </label>


    <button className='signup-btn'>Sign Up</button>

</form>        
</div>
)
}


export default OrganizationSignupForm;