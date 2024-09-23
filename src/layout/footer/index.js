import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCopyright } from "@fortawesome/free-regular-svg-icons"

import styles from './index.module.scss'
import clsx from "clsx"
import { mode } from "../../contants/index,"
import { useMode } from "../../hook/useMode"
import useDevice from "../../hook/useDevice"

const FooterLayout = () => {
    const {theme} = useMode();
    const {isMobile} = useDevice();

    return (
        <div className={clsx(styles.container, theme === mode.DARK && styles.dark, isMobile && styles.mobile)}>
            <div className={styles.left}>
                <FontAwesomeIcon icon={faCopyright} /> 2024
            </div>
            <a 
                href="https://www.figma.com/community/file/1262992249991763120" 
                className={styles.link}
                target="_blank"
                rel="noreferrer"
            >
                Designed
            </a>
            by Sagar Shah and
            <a 
                href="https://github.com/thuong1804/portfolio" 
                className={styles.link}
                target="_blank"
                rel="noreferrer"
            >
                coded
            </a>
            with ❤️️ by Thuong Le
        </div>
    )
}
export default FooterLayout