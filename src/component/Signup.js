import React, { useState } from 'react'
import FarmerSignupForm from './FarmerSignupForm';
import TraderSignupForm from './TraderSignupForm';
import { Link } from 'react-router-dom';
import { toast } from "react-hot-toast";

const Signup = (props) => {
  let setIsLoggedIn = props.setIsLoggedIn;
  const [accountType, setAccountType] = useState("farmer");
  const [isRotated, setIsRotated] = useState(false);

  const handletraderClick = () => {
    setAccountType("trader");
    setIsRotated(true);

    setTimeout(() => {
      setIsRotated(false);
    }, 1000);

  };

  const handleFarmerClick = () => {
    setAccountType("farmer");
    setIsRotated(true);

    setTimeout(() => {
      setIsRotated(false);
    }, 1000);

  };

  return (
    <div>
      <div className='box'>
        <button onClick={handleFarmerClick}
          className={accountType === "farmer" ? 'box1 a' : 'box1'}>
          Farmer
        </button>

        <button onClick={handletraderClick}
          className={accountType === "trader" ? 'box1 a' : 'box1'}>
          Trader
        </button>
      </div>

      <div className={`signupform ${isRotated ? 'rotate' : ''}`}>
        {accountType === "farmer" ? <FarmerSignupForm setIsLoggedIn={setIsLoggedIn} /> : <TraderSignupForm setIsLoggedIn={setIsLoggedIn} />}
      </div>


      {/* <div>
      <Link to="/">
                <button className='signup-btn' onClick={() =>{
                    setIsLoggedIn(true);
                    toast.success("Welcome");
                }}>
                    Sign up
                </button>
            </Link>
      </div> */}

    </div>
  )
}

export default Signup

