import { createContext, useState, useContext, useEffect } from 'react';
export const modeContext = createContext('light')

export const ModeContextProvider = ({children}) => {
    const [theme, setTheme] = useState('light');

    const onChangeTheme = (isLight) => {
        if (isLight) {
            setTheme('light')
            localStorage.setItem('theme', 'light')
        } else {
            setTheme('dark')
            localStorage.setItem('theme', 'dark')
        }
    }
    
    useEffect(() => {
        const themeLocal = localStorage.getItem('theme')
        if (themeLocal) {
            setTheme(themeLocal)
        }
    }, [theme])
    
    return (
        <modeContext.Provider value={{theme, setTheme, onChangeTheme}}>
            {children}
        </modeContext.Provider>
      );
}

export const useMode = () => {
    const context = useContext(modeContext);
    if (!context) {
        throw new Error('useMode must be used within a ProviderNotification');
    }
    return context;
};
 