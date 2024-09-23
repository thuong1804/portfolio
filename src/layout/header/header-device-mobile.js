import {useEffect} from 'react'
import clsx from "clsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../navbar';
import { useMode } from '../../hook/useMode';
import { mode } from '../../contants/index,';
import styles from './header-device-mobile.module.scss'

const HeaderMobile = ({isOpen, setIsOpen, onClick}) => {
    const {theme} = useMode();
    
    useEffect(() => {
        if (isOpen) {
            document.body.style = 'overflow-y: hidden;'
        } else {
            document.body.style = 'overflow-y: auto;'
        }
    }, [isOpen])
    
    return (
        <div className={clsx(styles.bar, isOpen && styles.open, theme === mode.LIGHT && styles.light)}>
            <div className={styles.headerBar}>
                <div className={styles.title}>Hello</div>
                <FontAwesomeIcon
                    icon={faXmark}
                    className={styles.close}
                    onClick={() => setIsOpen(false)}
                />
            </div>
            <Navbar onClick={onClick} setIsOpen={setIsOpen}/>
        </div>
    )
}
export default HeaderMobile;