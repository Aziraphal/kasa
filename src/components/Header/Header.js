import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import Logo from '../../assets/LOGO.png';
const header = () => {
    return (
        <div className='Header'>
            <header>
                <div> 
                    <img src={Logo} alt="Kasa, location d'appartement"></img>
                </div>
                <nav>
                    <ul>
                        <li><Link to={"/home"}>Accueil</Link></li>
                        <li><Link to={"/apropos"}>A propos</Link></li>
                    </ul>
                </nav>
            </header>
            
        </div>
    );
};

export default header;