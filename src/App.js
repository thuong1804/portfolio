import './App.scss';
import React, { useState, useEffect } from 'react'
import clsx from 'clsx';
import MainLayout from './layout/main';
import HeaderLayout from './layout/header';
import FooterLayout from './layout/footer';
import { mode } from './contants/index,';
import { useMode } from './hook/useMode';
import useDevice from './hook/useDevice';
import HeaderMobile from './layout/header/header-device-mobile';

function App() {
    const [sticky, setSticky] = useState(false)
    const [sections, setSection] = useState();
    const { theme } = useMode()
    const { isMobile } = useDevice();
    const [isOpen, setIsOpen] = useState(false);

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

    const onClickScrollItem = (e, itemTag) => {
        e.preventDefault();
        const findComponent = sections.refProps.find(section => section.current.id === itemTag)
        if (findComponent) {
            findComponent.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
    }
    const refComponent = (...refProps) => {
        setSection({ refProps })
    }

    return (
        <div className={clsx("App", theme === mode.LIGHT ? 'appLight' : 'appDark', { blurred: isMobile && isOpen })}>
            <header className={clsx(theme, { sticky: sticky })}>
                <HeaderLayout onClick={onClickScrollItem} setIsOpen={setIsOpen} />
            </header>
            {isMobile && (
                <HeaderMobile
                    setIsOpen={setIsOpen}
                    isOpen={isOpen}
                    onClick={onClickScrollItem}
                />
            )}
            <main>
                <MainLayout refComponent={refComponent} />
            </main>
            <footer>
                <FooterLayout />
            </footer>
        </div>
    );
}

export default App;
