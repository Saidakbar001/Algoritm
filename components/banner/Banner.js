import React from 'react';
import './Banner.css';
import { FiSearch } from 'react-icons/fi'

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner__mainImage">
            <img src="https://cdn.oboi7.com/content/images/d0/17/d0178e34ac5b6c5c683a2123263a73bdf94af36c.jpg" alt="" />
            </div>
            <div className="banner__mainOperation">
                <h1 className="banner__title">
                    Grow Your Skills To Advance Your Career Path.
                </h1>
                <p>We have something big for you who want to level up!</p>
                <div className="banner__searchbar">
                    <input type="text"  placeholder="What do you want to learn..." className="banner__searchinput"/>
                    <div className="banner__searchIcon">
                         <FiSearch/>
                    </div>
                </div>
                <p>Suggestions</p>
                <div className="banner__suggestions">
                    <ul className="banner__suggestionCollection">
                        <li className="suggestion__item">UI UX Design</li>
                        <li className="suggestion__item">CSS Fundamental</li>
                        <li className="suggestion__item">3D Design Illustration</li>
                        <li className="suggestion__item">Website Development</li>
                        <li className="suggestion__item">Logo Design</li>
                        <li className="suggestion__item">Icon Design</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Banner
