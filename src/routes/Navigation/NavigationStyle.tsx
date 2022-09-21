import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 10px 0 0 0;
  }
`

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-top: 10px;

  @media screen and (max-width: 800px) {
    width: 80%;
    padding-top: 20px;
  }
`

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`