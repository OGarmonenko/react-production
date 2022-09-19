import React from 'react';
import '@/app/styles/index.scss';
import {Link} from 'react-router-dom';
import {useTheme} from "@/app/providers/ThemeProvider";
import {classNames} from '@/shared/lib/classNames/classNames';
import {AppRouter} from "@/app/providers/router";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to='/'>Main</Link>
            <Link to='/about'>About</Link>
            <AppRouter />
        </div>
    );
};

export default App;