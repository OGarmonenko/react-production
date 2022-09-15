import React from 'react';
import './index.scss';
import {Link, Route, Routes} from 'react-router-dom';
import AboutPage from './pages/AboutPage/AboutPage';
import MainPage from './pages/MainPage/MainPage';

const App = () => {
    return (
        <div className="app">
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
          <Routes>
              <Route path={'/about'} element={<AboutPage />} />
              <Route path={'/'}  element={<MainPage />} />
          </Routes>
        </div>
    );
};

export default App;