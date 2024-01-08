import React from 'react';
import {Link} from "react-router-dom";
import { toast } from "react-hot-toast";
import logo from './logo.jpg'

const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div>
        <nav className='Navbar'>
        <div className='nav-container'>
            <img className='logo' src={logo}/>
            <p className='logoname'>Harvest Hub</p>
            </div>
        <div>
        {!isLoggedIn &&
            <Link  to="/login">
                <button className='navbtn btn1'>
                    Login
                </button>
            </Link>
        }
        {!isLoggedIn &&
            <Link to="/signup">
                <button className='navbtn'>
                    Sign Up
                </button>
            </Link>
        }
        {isLoggedIn &&
            <Link to="/">
                <button className='navbtn btn1' onClick={() =>{
                    setIsLoggedIn(false);
                    toast.success("Logged Out");
                }}>
                    Log Out
                </button>
            </Link>
        }
        
      </div>
      </nav>
    </div>
  )
}

export default Navbar
