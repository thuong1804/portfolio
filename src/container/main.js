import clsx from 'clsx'
import styles from './main.module.scss'

const MainContainer = ({
    children,
    light,
    topic,
    title,
    refTopic,
    id,
}) => {
    
    return (
        <div className={clsx(styles.container, light ? styles.light : styles.gray)}>
            <div className={styles.content} id={id} ref={refTopic}>
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