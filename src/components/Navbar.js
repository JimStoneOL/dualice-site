import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from '../img/logo.jpg';
import styled from 'styled-components';
import {ButtonContainer} from './Button';

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar nav-bar-expand-sm navbar-dark px-sm-5">
               <Link to='/about'>
                  <img src={logo} alt="store" className="navbar-brand" width="130px" height="150px"/>
               </Link> 
               <ul className="navbar-nav align-items-center">
                 <li className="nav-item ml-5">
                    <Link to="/" className="nav-link">
                       Услуги
                    </Link>
                 </li>
               </ul>
               <Link to="/cart" className="ml-auto">
                  <ButtonContainer>
                      <i className="fas fa-cart-plus">Моя корзина</i>
                  </ButtonContainer>
               </Link>
            </NavWrapper>
        )
    }
}
const NavWrapper = styled.nav`
background:#272136;
.nav-link{
    color:var(--lightBlue) !important;
    font-size:1.7 rem;
    text-transform:capitalize;
}
`;
