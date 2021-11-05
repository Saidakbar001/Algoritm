import React from 'react';
import './Header.css';
import logo from '../../assets/logo.svg';
import { NavLink } from 'react-router-dom';
import { FiGlobe } from 'react-icons/fi';

const Header = () => {
    return (
        <div className="header">
            <div className="header__container">
                <div className="header__logoContainer">
                    <img src={logo} alt="" className="logoImage"/>
                </div>
                <ul className="header__collection">
                    <li className="header__collectionItem">
                        <NavLink to="/" className="header__collectionLink">
                            Bosh sahifa
                        </NavLink>
                    </li>
                    <li className="header__collectionItem">
                        <NavLink to="/" className="header__collectionLink">
                            Darslar
                        </NavLink>
                    </li>
                    <li className="header__collectionItem">
                        <NavLink to="/" className="header__collectionLink">
                            Biz haqimizda
                        </NavLink>
                    </li>
                </ul>
                <div className="header__language">
                   O'zbek <FiGlobe/>
                </div>
                <button className="header__calltoact">Biz bilan bog'laning</button>
            </div>
        </div>
    )
}

export default Header
