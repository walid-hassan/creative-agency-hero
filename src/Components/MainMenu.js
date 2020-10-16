import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../App';
import Logo from '../images/logos/logo.png';
import HeroSlider from './HeroSlider';
import './MainMenu.css'

const MainMenu = () => {
    const [loggedUser, setLoggedUser] = useContext(userContext);

    return (
        <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light ">
                <a class="navbar-brand logo" href=""><img className="img-fluid" src={Logo} alt=""/></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item mr-4 active">
                            <a class="nav-link font-weight-bold" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item mr-4">
                            <a class="nav-link font-weight-bold" href="#works">Our Portfolio</a>
                        </li>
                        <li class="nav-item mr-4">
                            <a class="nav-link font-weight-bold" href="#services">Our Team</a>
                        </li>
                        <li class="nav-item mr-4">
                            <a class="nav-link font-weight-bold" href="#contact">Contact Us</a>
                        </li>
                        <li class="nav-item mr-4 ">
                        {
                            loggedUser.email ? 
                            <Link style={{ textDecoration: "none" }} to="/dashboard/my-profile"><button type="button" class="btn btn-primary">Dashboard</button></Link>
                            :
                            <Link style={{ textDecoration: "none" }} to="/login"><h5 className=" "><a className="nav-link blackBtn" href="#">Login</a></h5></Link>
                        }
                            
                        </li>

                    </ul>

                </div>
            </nav>
        </div>
    );
};

export default MainMenu;