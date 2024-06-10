import { ButtonHTMLAttributes, ReactNode, memo } from 'react';
import cls from './Button.module.scss';
import { Mods, classNames } from '../../lib/classNames/classNames';

export enum ThemeButton {
    PRIMARY = 'primary',
    OUTLINE = 'outline',
    ACCENT = 'accent',
    DASHED = 'dashed',
    CLEAR = 'clear',
    LIGHT_BlUE = 'light_blue',
    DARK_VIOLET =  'dark_violet',   
}

export enum ButtonSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
    size?: ButtonSize;
    disabled?: boolean;
    children?: ReactNode;
    fullWidth?: boolean;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        theme = ThemeButton.CLEAR,
        size = ButtonSize.M,
        disabled,
        fullWidth,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.disabled]: disabled,
        [cls.fullWidth]: fullWidth,
    };

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [
                className,
                cls[theme],
                cls[size],
            ])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
