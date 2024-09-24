import { useEffect, useRef, useState } from 'react'
import clsx from "clsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../navbar';
import { useMode } from '../../hook/useMode';
import { mode } from '../../contants/index,';
import styles from './header-device-mobile.module.scss'

const HeaderMobile = ({ isOpen, setIsOpen, onClick }) => {
    const { theme } = useMode();
    const refNavbar = useRef();

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
        }
    }, [isOpen]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (refNavbar.current && !refNavbar.current.contains(event.target)) {
                setIsOpen(false)
            }
        };
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };

    }, [refNavbar]);

    return (
        <div
            className={clsx(styles.bar, isOpen && styles.open, theme === mode.LIGHT && styles.light)}
            ref={refNavbar}
        >
            <div className={styles.headerBar}>
                <div className={styles.title} onClick={(e) => {onClick(e, 'Profile'); setIsOpen(false)}}>Hello</div>
                <FontAwesomeIcon
                    icon={faXmark}
                    className={styles.close}
                    onClick={() => setIsOpen(false)}
                />
            </div>
            <Navbar onClick={onClick} setIsOpen={setIsOpen} />
        </div>
    )
}
export default HeaderMobile;