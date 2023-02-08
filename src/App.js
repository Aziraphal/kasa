import Banner from './components/banner/Banner'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Error from './components/error/Error'


function App() {
    return <div className='App'>
        <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />

            <Route path='/home' element={<Home />} />
            <Route path='/services' element={<Services />} />
            <Route path='/contact' element={<Contact />} />

            <Route path='*' element={<Error />} />
        </Routes>
        </BrowserRouter>
     <Banner />
    </div>
}

export default App
