import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import styles from './index.module.scss'


const Navbar = () => {
    const itemTag = ['About', 'Work', 'Testimonials', 'Contact']
    const [changeMode, setChangeMode] = useState(true)

    return (
        <div className={styles.container}>
            <ul className={styles.tag}>
                {itemTag.map((item, index) => (
                    <li className={styles.itemTag}>{item}</li>
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