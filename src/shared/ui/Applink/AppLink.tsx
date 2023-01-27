import { memo, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import cls from './AppLink.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

export const enum AppLinkTheme {
    PRIMARY = 'primary',
    INVERTABLE = 'invertable',
}

interface IAppLinkProps extends LinkProps{
    className?: string;
    theme?: AppLinkTheme;
    children?: ReactNode;
}

export const AppLink = memo((props: IAppLinkProps) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...restProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            {...restProps}
        >
            {children}
        </Link>
    );
});
