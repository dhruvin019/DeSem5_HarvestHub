import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.jpg'

const Farmer = () => {
  return (
    <div>

    <div className='TraderNavbar'>

    <nav className='Navbar'>
        <div className='nav-container'>
            <img className='logo' src={logo}/>
            <p className='logoname'>Harvest Hub</p>
        </div>

        <Link to="/">
            <button className='traderbtn'>Go To Home</button>
        </Link>
        
    </nav>

    <div className='traderbody'>
        <div><h1 className='tradertitle1'>Benefits for Farmer</h1>
        <h2 className='tradertitle2'>Access to Quality Seeds::</h2>
        <p className='tradercontent'>Farmers can easily find and purchase high-quality seeds directly from local traders without the need for middlemen. This ensures that they have access to the best seeds for their crops.</p>
        </div>
        
        <div>
        <h2 className='tradertitle2'>Affordable Pricing:</h2>
        <p className='tradercontent'>By buying seeds, pesticides, and fertilizers directly from nearby traders, farmers can enjoy affordable prices, as there are no brokerage fees involved.</p>
        </div>
        
        <div>
        <h2 className='tradertitle2'>Crop Recommendations:</h2>
        <p className='tradercontent'>The website provides valuable information on which crops are suitable for each season. This guidance helps farmers make informed decisions, leading to successful harvests.</p>
        </div>
        
        <div>
        <h2 className='tradertitle2'>Farming Technology Insights:</h2>
        <p className='tradercontent'>Farmers can stay updated with the latest farming technology and innovations. This knowledge empowers them to apply new methods and tools to increase productivity and save time.</p>
        </div>
        
        
        <div>
        <h2 className='tradertitle2'>Expanded Market Reach:</h2>
        <p className='tradercontent'>Farmers can reach a broader market for selling their crops by connecting with potential buyers and traders from various regions.</p>
        </div>
        
    </div>

    </div>
      
    <div className='butttonbox2'>
                <button className='homebtn1'>Buy Agri-Product</button>
                <button className='homebtn1'>Sell Crop</button>
                <button className='homebtn1'>Tutorial</button>
       </div>
    </div>
  )
}

export default Farmer
