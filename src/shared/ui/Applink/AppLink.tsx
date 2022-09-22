import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export const enum AppLinkTheme {
    PRIMARY = 'primary',
    INVERTABLE = 'invertable',
}

interface IAppLinkProps extends LinkProps{
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<IAppLinkProps> = (props) => {
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
};
