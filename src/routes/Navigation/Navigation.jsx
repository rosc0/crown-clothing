import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'

import './Navigation.scss'

function Navigation() {
  return (
    <>
      <div className='navigation'>
        <Link to='/' className='logo-container'>
          <Logo />
        </Link>        
        <div className='nav-links-container'>
          <Link to='/shop' className='nav-link'>SHOP</Link>    
          <Link to='/auth' className='nav-link'>SIGN IN</Link>              
        </div>      
      </div>
      <Outlet />
    </>
  )
}

export default Navigation