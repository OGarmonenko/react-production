import { HTMLAttributes, ReactNode } from 'react';

import cls from './Card.module.scss';

import { classNames, TMods } from '@/shared/lib/classNames/classNames';

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    theme?: CardTheme;
    max?: boolean;
}

export const Card = (props: CardProps) => {
    const {
        className,
        children,
        theme = CardTheme.NORMAL,
        max,
        ...otherProps
    } = props;

    const mods: TMods = {
        [cls.max]: max,
    };

    return (
        <div
            className={classNames(cls.card, mods, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </div>
    );
};
