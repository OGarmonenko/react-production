import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './Button.module.scss';
import {ButtonHTMLAttributes, FC} from "react";

export enum ThemeButton {
    CLEAR = 'clear',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<IButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        ...restProps
    } = props;

    return (
        <button
            className={classNames(cls.button, {}, [className, cls[theme]])}
            {...restProps}
        >
            {children}
        </button>
    );
};
