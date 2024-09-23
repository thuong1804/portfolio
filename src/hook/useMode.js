import { createContext, useState, useContext, useEffect } from 'react';
import { modeContext } from '../context/modeProvider';


export const useMode = () => {
    const context = useContext(modeContext);
    if (!context) {
        throw new Error('useMode must be used within a ProviderNotification');
    }
    return context;
};