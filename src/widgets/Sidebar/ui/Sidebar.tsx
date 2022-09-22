import { useState } from 'react';
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

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    return (
        <div className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <Button onClick={onToggle}>
                toggle
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
