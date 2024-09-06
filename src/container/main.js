import clsx from 'clsx'
import styles from './main.module.scss'

const MainContainer = ({
    children,
    light,
    topic,
    title,
}) => {
    return (
        <div className={clsx(styles.container, light ? styles.light : styles.gray)}>
            <div className={styles.content}>
                {(topic || title) && (
                    <div className={styles.topic}>
                        <div className={styles.description}>
                            <span>{topic}</span>
                            <span>{title}</span>
                        </div>
                    </div>
                )}
                {children}
            </div>
        </div>
    )
}
export default MainContainer;