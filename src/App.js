import './App.scss';
import React, { useState, useEffect } from 'react'

import HeaderPage from './component/layout/header';
import ContentPage from './component/content';
import FooterPage from './component/layout/footer';
import clsx from 'clsx';
import MainLayout from './component/layout/main';
import ProfilePage from './component/content/profile/profile';

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
                <HeaderPage />
            </header>
            <main>
                <MainLayout>
                    <ProfilePage />
                </MainLayout>
            </main>
            <footer>
                <FooterPage />
            </footer>
        </div>
    );
}

export default App;
