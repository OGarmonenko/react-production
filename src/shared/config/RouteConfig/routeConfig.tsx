import { RouteProps } from 'react-router-dom';
import { MainPage } from '@/pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';

export const enum AppRoutes {
    MAIN = '/',
    ABOUT = '/about',
}

export const routeConfig: RouteProps[] = [
    { path: AppRoutes.MAIN, element: <MainPage /> },
    { path: AppRoutes.ABOUT, element: <AboutPage /> },
];
