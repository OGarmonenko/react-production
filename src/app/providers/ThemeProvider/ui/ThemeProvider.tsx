import { ReactNode, useMemo, useState } from 'react';

import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from '../../../../shared/lib/context/ThemeContext';

import { Theme } from '@/shared/const/theme';

export interface IThemeProviderProps {
    children: ReactNode;
    initialTheme?: Theme;
}

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

const ThemeProvider = (props: IThemeProviderProps) => {
    const {
        children,
        initialTheme,
    } = props;
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
