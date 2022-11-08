import { RouteProps } from 'react-router-dom';
import { MainPage } from '@/pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
}

export const enum AppRoutes {
    MAIN = '/',
    ABOUT = '/about',
    PROFILE = '/profile',
    ARTICLES = '/articles',
    ARTICLE_DETAILS = '/articles/', // +id
    NOT_FOUND = '*',
}

export const routeConfig: AppRoutesProps[] = [
    { path: AppRoutes.MAIN, element: <MainPage /> },
    { path: AppRoutes.ABOUT, element: <AboutPage /> },
    { path: AppRoutes.PROFILE, element: <ProfilePage />, authOnly: true },
    { path: AppRoutes.ARTICLES, element: <ArticlesPage />, authOnly: true },
    { path: `${AppRoutes.ARTICLE_DETAILS}:id`, element: <ArticleDetailsPage />, authOnly: true },
    { path: AppRoutes.NOT_FOUND, element: <NotFoundPage /> },
];
