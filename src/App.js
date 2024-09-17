import './App.scss';
import React, { useState, useEffect } from 'react'

import clsx from 'clsx';
import MainLayout from './layout/main';
import HeaderLayout from './layout/header';
import FooterLayout from './layout/footer';

function App() {
    const [sticky, setSticky] = useState(false)
    const [sections, setSection] = useState();
    
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
        const findComponent = sections.refProps.find(section => section.current.id === itemTag)
        e.preventDefault();
        if (findComponent) {
            findComponent.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
    }
    const refComponent = (...refProps) => {
        setSection({refProps})
    }

    console.log({sections})

    return (
        <div className="App">
            <header className={clsx({sticky: sticky})}>
                <HeaderLayout onClick={onClickScrollItem}/>
            </header>
            <main>
                <MainLayout refComponent={refComponent}/>
            </main>
            <footer>
                <FooterLayout />
            </footer>
        </div>
    );
}

export default App;
