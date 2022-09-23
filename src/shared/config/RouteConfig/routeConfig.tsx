import { RouteProps } from 'react-router-dom';
import { MainPage } from '@/pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export const enum AppRoutes {
    MAIN = '/',
    ABOUT = '/about',
    NOT_FOUND = '*',
}

export const routeConfig: RouteProps[] = [
    { path: AppRoutes.MAIN, element: <MainPage /> },
    { path: AppRoutes.ABOUT, element: <AboutPage /> },
    { path: AppRoutes.NOT_FOUND, element: <NotFoundPage /> },
];
