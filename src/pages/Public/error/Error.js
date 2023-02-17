import React from 'react';
import './error.css';
import Header from '../../../components/header/Header';
import { Link } from 'react-router-dom';
const Error = () => {
    return (
        <div className='error'>
            <Header />
            <div className='errorInfo'>
            <h1 className='errorTitle'>404</h1>
            <p className='errorContent'>Oups! La page que vous demandé n'existe pas.</p>
            <Link className='errorReturn' to='/'>Retourner sur la page d'accueil</Link>
            </div>
        </div>
    );
};

export default Error;