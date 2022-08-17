import React from 'react';
import Nav from '../SharedComponents/Nav/Nav';
import './Header.css'
import Showcase from './Showcase/Showcase';

const Header = () => {
    return (
        <div>
            <Nav/>
            <Showcase/>
        </div>
    );
};

export default Header;