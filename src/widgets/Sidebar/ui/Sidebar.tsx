import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { ThemeSwitcher } from '@/widgets/toSideBar/ThemeSwitcher';
import { LangSwitcher } from '@/widgets/toSideBar/LangSwitcher';
import { Button, ButtonSize, ButtonVariant } from '@/shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from '@/shared/ui/Applink/AppLink';
import { AppRoutes } from '@/shared/config/RouteConfig/routeConfig';
import AboutIcon from '@/shared/assets/icons/about-20-20.svg';
import MainIcon from '@/shared/assets/icons/main-20-20.svg';

interface ISidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: ISidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={classNames(cls.collapseBtn)}
                theme={ButtonVariant.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                <AppLink
                    to={AppRoutes.MAIN}
                    theme={AppLinkTheme.INVERTABLE}
                    className={cls.item}
                >
                    <MainIcon className={cls.icon} />
                    <span className={cls.link}>
                        {t('Main page')}
                    </span>
                </AppLink>
                <AppLink
                    to={AppRoutes.ABOUT}
                    theme={AppLinkTheme.INVERTABLE}
                    className={cls.item}
                >
                    <AboutIcon className={cls.icon} />
                    <span className={cls.link}>
                        {t('About us')}
                    </span>
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </div>
        </div>
    );
};
