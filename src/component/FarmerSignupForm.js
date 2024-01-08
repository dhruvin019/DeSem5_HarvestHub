import React, { useState } from 'react';
import { AiFillEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const StudentSignupForm = ({ setIsLoggedIn }) => {
    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        farmer_id: '',
        email: '',
    });

    function changeHandler(event) {
        setFormData((prevdata) => ({
            ...prevdata,
            [event.target.name]: event.target.value,
        }));
    }

    const navigate = useNavigate();

    function submitHandler(event) {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success('Logged In');
        navigate('/');
    }

    return (
        <div className="farmerform">
            <form className="form" onSubmit={submitHandler}>
                <label>
                    <p className="title">
                        User Name<sup>*</sup>
                    </p>
                    <input
                        className="input"
                        required
                        type="text" 
                        name="username"
                        value={formData.username}
                        onChange={changeHandler}
                        placeholder="Enter user name"
                    />
                </label>

                <label>
                    <p className="title">
                        Farmer_ID<sup>*</sup>
                    </p>
                    <input
                        className="input"
                        required
                        type="text" 
                        name="farmer_id"
                        value={formData.farmer_id}
                        onChange={changeHandler}
                        placeholder="Enter farmer_id"
                    />
                </label>

                <label>
                    <p className="title">
                        Email<sup>*</sup>
                    </p>
                    <input
                        className="input"
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={changeHandler}
                        placeholder="Enter email"
                    />
                </label>

                <label className="label">
                    <p className="title">Password<sup>*</sup></p>

                    <input
                        required
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={formData.password}
                        onChange={changeHandler}
                        placeholder="Enter Password"
                    />

                    <span className="icon" onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? <AiFillEyeInvisible /> : <AiOutlineEye />}
                    </span>

                    <Link to="#">
                        <p className="forgotpassword">Forgot Password</p>
                    </Link>
                </label>

                <button className="signup-btn" type="submit">Sign Up</button> {/* Add a type="submit" to the button */}
            </form>
        </div>
    );
};

export default StudentSignupForm;
