import { useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import styles from './index.module.scss'
import { useMode } from '../../context/useMode';
import clsx from 'clsx';


const Navbar = ({onClick}) => {
    const {theme, onChangeTheme} = useMode();
    const itemTag = ['About', 'Work', 'Testimonials', 'Contact']
    const [changeMode, setChangeMode] = useState(true)

    useEffect(() => {
        onChangeTheme(changeMode)
    }, [changeMode])

    return (
        <div className={clsx(styles.container, theme === 'dark' && styles.dark)}>
            <ul className={styles.tag}>
                {itemTag.map((item, index) => (
                    <li className={styles.itemTag} onClick={(e) => onClick(e, item)}>{item}</li>
                ))}
            </ul>
            <div className={styles.mode} onClick={() => setChangeMode(pre => !pre)}>
                <FontAwesomeIcon icon={changeMode ? faMoon : faSun} className={styles.icon}/>
            </div>
            <button className={styles.btnDownload}>
               Download CV
            </button>
        </div>
    )
}
export default Navbar;