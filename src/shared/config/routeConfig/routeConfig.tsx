import { RouteProps } from 'react-router-dom';
import { MainPage } from '@/pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
}

export const enum AppRoutes {
    MAIN = '/',
    ABOUT = '/about',
    PROFILE = '/profile',
    NOT_FOUND = '*',
}

export const routeConfig: AppRoutesProps[] = [
    { path: AppRoutes.MAIN, element: <MainPage /> },
    { path: AppRoutes.ABOUT, element: <AboutPage /> },
    { path: AppRoutes.PROFILE, element: <ProfilePage />, authOnly: true },
    { path: AppRoutes.NOT_FOUND, element: <NotFoundPage /> },
];
