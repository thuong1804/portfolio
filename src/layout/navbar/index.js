import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import clsx from 'clsx';
import cv from '../../assets/images/cv.pdf'
import { mode } from '../../contants/index,';
import { useMode } from '../../hook/useMode';
import useDevice from '../../hook/useDevice';
import styles from './index.module.scss'

const Navbar = ({ onClick, setIsOpen }) => {
    const { theme, onChangeTheme } = useMode();
    const itemTag = ['About', 'Work', 'Testimonials', 'Contact']
    const [changeMode, setChangeMode] = useState(theme === mode.LIGHT);
    const { isMobile } = useDevice();

    useEffect(() => {
        onChangeTheme(changeMode)
    }, [changeMode])

    return (
        <div className={
            clsx(styles.container,
                theme === mode.DARK && styles.dark, isMobile && styles.mobile)}>
            <ul className={styles.tag}>
                {itemTag.map((item, index) => (
                    <li 
                        className={styles.itemTag} 
                        onClick={(e) => {onClick(e, item); setIsOpen?.(false)}}>
                        {item}
                    </li>
                ))}
            </ul>
            <div className={styles.mode} onClick={() => setChangeMode(pre => !pre)}>
                {isMobile && 'Switch Theme'}
                <FontAwesomeIcon icon={changeMode ? faMoon : faSun} className={styles.icon} />
            </div>
            <a href={cv} target='_blank' rel="noreferrer" className={styles.btnDownload}>
                Download CV
            </a>
        </div>
    )
}
export default Navbar;