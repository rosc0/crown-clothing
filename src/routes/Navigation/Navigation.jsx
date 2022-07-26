import { useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'

import { signOutUser } from '../../utils/firebase/firebase.utils'

import CartIcon from '../../components/CartIcon/CartIcon'
import CartDropdown from '../../components/CartDropdown/CartDropdown'
import { UserContext } from '../../context/UserContext'
import { CartContext } from '../../context/CartContext'

import { ReactComponent as Logo } from '../../assets/crown.svg'

import './Navigation.scss'

function Navigation() {

  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)

  return (
    <>
      <div className='navigation'>
        <Link to='/' className='logo-container'>
          <Logo />
        </Link>        
        <div className='nav-links-container'>
          <Link to='/shop' className='nav-link'>SHOP</Link>   
          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>
          ) : (
            <Link to='/auth' className='nav-link'>SIGN IN</Link>                        
          )}      
          <CartIcon />             
        </div> 
        { isCartOpen && <CartDropdown /> }        
      </div>
      <Outlet />
    </>
  )
}

export default Navigation