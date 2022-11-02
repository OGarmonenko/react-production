import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export const enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

export const enum TextAlign {
    LEFT = 'left',
    RIGHT = 'right',
    CENTER= 'center',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
    } = props;

    const additional = [className, cls[theme], cls[align]];

    return (
        <div className={classNames(cls.text, {}, additional)}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
