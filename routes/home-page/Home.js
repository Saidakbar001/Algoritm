import React from 'react';
import './Home.css'
import Header from '../../components/header/Header';
import Banner from '../../components/banner/Banner';
import Advantages from '../../components/advantages/Advantages';
import Courses from '../../components/courses/Courses';
import shapeOne from '../../assets/shape_one.svg'

const Home = () => {
    return (
        <>
           <Header/> 
           <Banner/>
           <img src={shapeOne} alt="" className="shape__image"/>
           <div className="container__main">
                <Advantages/>
                <Courses/>
           </div>
        </>
    )
}

export default Home
