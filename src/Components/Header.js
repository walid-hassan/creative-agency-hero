import React from 'react';
import HeroSlider from './HeroSlider';
import MainMenu from './MainMenu';
import './Header.css'
const Header = () => {
    return (
        <div className="headerBg">
            <MainMenu/>
            <HeroSlider/>
        </div>
    );
};

export default Header;