import { useMode } from '../../context/useMode';
import Navbar from '../navbar';
import styles from './index.module.scss'

const HeaderLayout = ({onClick}) => {
    return (
        <div className={styles.container}>
            <div className={styles.navbarHeader}>
                <div className={styles.title}>Hello</div>
                <Navbar onClick={onClick}/>
            </div>
        </div>
    )
}
export default HeaderLayout;