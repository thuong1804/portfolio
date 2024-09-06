import './App.scss';
import React, { useState, useEffect } from 'react'

import clsx from 'clsx';
import MainLayout from './layout/main';
import HeaderLayout from './layout/header';
import FooterLayout from './layout/footer';

function App() {
    const [sticky, setSticky] = useState(false)

    const handelScroll = () => {
        if (window.scrollY > 0) {
            setSticky(true)
        } else {
            setSticky(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handelScroll)
        return () => {
            window.removeEventListener('scroll', handelScroll)
        }
    }, [])

    return (
        <div className="App">
            <header className={clsx({sticky: sticky})}>
                <HeaderLayout/>
            </header>
            <main>
                <MainLayout />
            </main>
            <footer>
                <FooterLayout />
            </footer>
        </div>
    );
}

export default App;
