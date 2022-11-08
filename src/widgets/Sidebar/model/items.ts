import React from 'react';
import { AppRoutes } from '@/shared/config/routeConfig/routeConfig';
import AboutIcon from '@/shared/assets/icons/about-20-20.svg';
import MainIcon from '@/shared/assets/icons/main-20-20.svg';
import ProfileIcon from '@/shared/assets/icons/profile-20-20.svg';
import ArticleIcon from '@/shared/assets/icons/article-20-20.svg';

export interface ISidebarItem {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}

export const SidebarItemsList: ISidebarItem[] = [
    {
        path: AppRoutes.MAIN,
        Icon: MainIcon,
        text: 'Main',
    },
    {
        path: AppRoutes.ABOUT,
        Icon: AboutIcon,
        text: 'About',
    },
    {
        path: AppRoutes.PROFILE,
        Icon: ProfileIcon,
        text: 'Profile',
        authOnly: true,
    },
    {
        path: AppRoutes.ARTICLES,
        Icon: ArticleIcon,
        text: 'Articles',
        authOnly: true,
    },
];
