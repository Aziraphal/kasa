import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from './Home';
import Apropos from './Apropos';
import Hebergment from './Hebergement';
import Error from './Error'

const PublicRouter = () => {
    return (
        <div>
            <Routes>
            <Route element={<Layout />}>
            <Route index element={<Home />} />

            <Route path='/home' element={<Home />} />
            <Route path='/apropos' element={<Apropos />} />
            <Route path='/hebergement' element={<Hebergment />} />

            </Route>
            <Route path='*' element={<Error />} />
            </Routes>
        </div>
    );
};

export default PublicRouter;