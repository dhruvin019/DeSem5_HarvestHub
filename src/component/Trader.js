import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.jpg'

const Trader = () => {
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
    </div>    
    <div className='traderbody'>
        <div><h1 className='tradertitle1'>Benefits for Traders</h1>
        <h2 className='tradertitle2'>Wider Market Reach:</h2>
        <p className='tradercontent'>Access a broader market for both buying and selling. Our platform connects you with potential customers and suppliers from various regions.</p>
        </div>
        
        <div>
        <h2 className='tradertitle2'>Efficient Transactions:</h2>
        <p className='tradercontent'>Simplify your buyingand selling processes with our user-friendly platform. Transactions are straightforward and secure, saving you time and effort.</p>
        </div>
        
        <div>
        <h2 className='tradertitle2'>Transparent Transactions:</h2>
        <p className='tradercontent'>Transparency is key. Our platform ensures clear communication, fair pricing, and reliable deliveries.</p>
        </div>
        
        <div>
        <h2 className='tradertitle2'>Expand Your Business:</h2>
        <p className='tradercontent'>Grow your trader business by leveraging our platform to reach more farmers and expand your seed sales or crop procurement.</p>
        </div>
        
        

    </div>

    
      <div className='butttonbox2'>
                <button className='homebtn1'>Sell Agri-Product</button>
                <button className='homebtn1'>Buy Crop</button>
       </div>
    </div>
  )
}

export default Trader











