import Navbar from '../navbar';
import styles from './index.module.scss'

const HeaderPage = () => {

    return (
        <div className={styles.container}>
            <div className={styles.navbarHeader}>
                <div className={styles.title}>Hello</div>
                <Navbar />
            </div>
        </div>
    )
}
export default HeaderPage;