import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
const header = () => {
    return (
        <div className='Header'>
            <header>
                <nav>
                    <ul>
                        <li><Link to={"/home"}>Accueil</Link></li>
                        <li><Link to={"/services"}>Services</Link></li>
                        <li><Link to={"/contact"}>Contact</Link></li>
                    </ul>


                </nav>


            </header>
            
        </div>
    );
};

export default header;