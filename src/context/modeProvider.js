import { createContext, useState, useContext, useEffect } from 'react';
import { mode } from '../contants/index,';
export const modeContext = createContext('light')

export const ModeContextProvider = ({children}) => {
    const getInitialTheme = () => localStorage.getItem('theme') || mode.LIGHT;

    const [theme, setTheme] = useState(getInitialTheme());

    const onChangeTheme = (isLight) => {
        const newTheme = isLight ? mode.LIGHT : mode.DARK;
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme); // Persist the theme
    };

    return (
        <modeContext.Provider value={{theme, setTheme, onChangeTheme}}>
            {children}
        </modeContext.Provider>
      );
}
