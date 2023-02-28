import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Apropos from './apropos/Apropos';
import Hebergement from './hebergement/Hebergement';
import Error from './error/Error'

const PublicRouter = () => {
    return (
        <div>
            <Routes>
            <Route index element={<Home />} />

            <Route path='/home' element={<Home />} />
            <Route path='/apropos' element={<Apropos />} />
            <Route path='/hebergement/:id' element={<Hebergement />} />
            
            <Route path='*' element={<Error />} />
            </Routes>
        </div>
    );
};

export default PublicRouter;