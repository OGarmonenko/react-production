import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { ThemeSwitcher } from '@/widgets/toSideBar/ThemeSwitcher';
import { LangSwitcher } from '@/widgets/toSideBar/LangSwitcher';
import { Button } from '@/shared/ui/Button/Button';

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
            >
                {t('Toggle')}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
