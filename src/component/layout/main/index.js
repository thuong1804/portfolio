import clsx from 'clsx'
import styles from './index.module.scss'

const MainLayout = ({
    children,
    defaultBackground = 'white'
}) => {
    return (
        <div className={clsx(styles.container)}>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}
export default MainLayout;