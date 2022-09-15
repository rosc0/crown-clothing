import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { signOutUser } from '../../utils/firebase/firebase.utils'

import CartIcon from '../../components/CartIcon/CartIcon'
import CartDropdown from '../../components/CartDropdown/CartDropdown'

import { selectIsCartOpen } from '../../store/cart/cart.selector'
import { selectCurrentUser } from '../../store/user/user.selector'

import { ReactComponent as Logo } from '../../assets/crown.svg'

import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './NavigationStyle'

function Navigation() {
  const currentUser = useSelector(selectCurrentUser)
  const isCartOpen = useSelector(selectIsCartOpen)

  return (
    <>
      <NavigationContainer>
        <LogoContainer to='/'>
          <Logo />
        </LogoContainer>        
        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>   
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>                        
          )}      
          <CartIcon />             
        </NavLinks> 
        { isCartOpen && <CartDropdown /> }        
      </NavigationContainer>
      <Outlet />
    </>
  )
}

export default Navigation