import { useContext } from 'react';

import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from '../context/ThemeContext';

import { Theme } from '@/shared/const/theme';

interface IUseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme(): IUseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        //  const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        let newTheme: Theme;

        switch (theme) {
        case Theme.DARK:
            newTheme = Theme.LIGHT;
            break;
        case Theme.LIGHT:
            newTheme = Theme.BLUE;
            break;
        case Theme.BLUE:
            newTheme = Theme.DARK;
            break;
        default: newTheme = Theme.LIGHT;
        }

        setTheme?.(newTheme);
        document.body.className = newTheme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme: theme || Theme.LIGHT,
        toggleTheme,
    };
}
