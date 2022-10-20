import React from 'react';
import { AppRoutes } from '@/shared/config/RouteConfig/routeConfig';
import AboutIcon from '@/shared/assets/icons/about-20-20.svg';
import MainIcon from '@/shared/assets/icons/main-20-20.svg';
import ProfileIcon from '@/shared/assets/icons/profile-20-20.svg';

export interface ISidebarItem {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
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
    },
];